# -*- coding: utf-8 -*-
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals

import io
import tellme
from ..utilities import data_table, helpers
from .. import exceptions


class Validator(object):

    """Base Validator class. Validator implementations should inherit."""

    name = None
    ROW_LIMIT_MAX = 30000
    REPORT_LIMIT_MAX = 1000
    RESULT_CATEGORY_HEADER = 'header'
    RESULT_CATEGORY_ROW = 'row'
    RESULT_LEVEL_ERROR = 'error'
    RESULT_LEVEL_WARNING = 'warning'
    RESULT_LEVEL_INFO = 'info'
    RESULT_HEADER_ROW_NAME = 'headers'

    def __init__(self, fail_fast=False, transform=False, report_limit=1000,
                 row_limit=30000, report_stream=None):

        if report_stream:
            report_stream_tests = [isinstance(report_stream, io.TextIOBase),
                                   report_stream.writable(),
                                   report_stream.seekable()]

            if not all(report_stream_tests):
                _msg = '`report_stream` must be a seekable and writable text stream.'
                raise exceptions.ValidatorBuildError(_msg)

        self.name = self.name or self.__class__.__name__.lower()
        self.fail_fast = fail_fast
        self.transform = transform
        self.row_limit = self.get_row_limit(row_limit)
        self.report_limit = self.get_report_limit(report_limit)

        if report_stream:
            report_backend = 'client'
        else:
            report_backend = 'yaml'

        report_options = {
            'schema': helpers.report_schema,
            'backend': report_backend,
            'client_stream': report_stream,
            'limit': report_limit
        }
        self.report = tellme.Report(self.name, **report_options)

    def get_row_limit(self, passed_limit):
        """Return the row limit, locked to an upper limit."""

        if passed_limit > self.ROW_LIMIT_MAX:
            return self.ROW_LIMIT_MAX
        else:
            return passed_limit

    def get_report_limit(self, passed_limit):
        """Return the report_limit, locked to an upper limit."""

        if passed_limit > self.REPORT_LIMIT_MAX:
            return self.REPORT_LIMIT_MAX
        else:
            return passed_limit

    def get_row_id(self, headers, row):
        """Return an identifying for a row, or None if not able to detect."""
        ids = ('id', '_id')
        for k, v in zip(headers, row):
            if k in ids:
                return v
        return ''

    def make_entry(self, result_category, result_level, result_message,
                   result_type, row_index=None, row_name='', column_index=None,
                   column_name=''):
        """Return a report entry."""

        return {
            'result_category': result_category,
            'result_level': result_level,
            'result_message': result_message,
            'result_type': result_type,
            'row_index': row_index,
            'row_name': row_name,
            'column_index': column_index,
            'column_name': column_name
        }

    def run(self, data_source, headers=None, is_table=False):

        """Run this validator on data_source.

        Args:
            data_source: the data source as string, URL, filepath or stream
            headers: pass headers explicitly to the DataTable constructor
            is_table: if True, data_source is a DataTable instance

        Returns:
            a tuple of `valid, report, data_table`
            valid: boolean indicating if the data is valid
            report: instance of reporter.Report
            data: a data_table.DataTable object containing the output data

        """

        def _run_valid(process_valid, run_valid):
            """Set/maintain the valid state of the run."""
            if not process_valid and run_valid:
                return False
            return run_valid

        valid = True
        openfiles = []

        if is_table:
            data = data_source
        else:
            data = data_table.DataTable(data_source, headers=headers)
            openfiles.extend(data.openfiles)

        # pre_run
        if hasattr(self, 'pre_run'):
            _valid, data = self.pre_run(data)
            valid = _run_valid(_valid, valid)
            if not _valid and self.fail_fast:
                return valid, self.report, data

        # run_header
        if hasattr(self, 'run_header'):
            _valid, data.headers = self.run_header(data.headers)
            valid = _run_valid(_valid, valid)
            if not _valid and self.fail_fast:
                return valid, self.report, data

        # run_row
        if hasattr(self, 'run_row'):
            # TODO: on transform, create a new stream out of returned rows
            for index, row in enumerate(data.values):
                if index < self.row_limit:
                    _valid, data.headers, index, row = self.run_row(data.headers, index, row)
                    valid = _run_valid(_valid, valid)
                    if not _valid and self.fail_fast:
                        return valid, self.report, data

        # post_run
        if hasattr(self, 'post_run'):
            _valid, data = self.post_run(data)
            valid = _run_valid(_valid, valid)
            if not _valid and self.fail_fast:
                return valid, self.report, data

        for f in openfiles:
            f.close()

        return valid, self.report, data
