Pipeline
========

Naturally, the `ValidationPipeline` class implements the validation pipeline.

Spec
----

Validator registration
**********************

Register by constructor
+++++++++++++++++++++++

The `ValidationPipeline` constructor takes a `validators` keyword argument, which is a list of validators to run in the pipeline.

Each value in the `validators` list is expected to be a string describing the path to a validator class, for import via `importlib`.

Optionally, for builtin validators, the `validator.name` property can be used as a shorthand convenience.

**Example**
::
    validators = ['spec', 'structure']  # short hand names for builtin validators
    validators = ['my_module.CustomValidatorOne', 'my_module.CustomValidatorTwo']  # import from string
    validators = ['spec', 'my_module.CustomValidatorTwo']  # both combined

Each Validator class is expected to conform to the following API in order to validate, transform and report correctly.

Register by instance method
+++++++++++++++++++++++++++

Once you have a `ValidationPipeline` instance, you can also register validators via the `register_validator` method.

Registering new validators this way will by default append the new validators to any existing pipeline.

You can define the position in the pipeline explicitly using the `position` argument.

**Example**
::
    pipeline = ValidationPipeline(args, kwargs)
    pipeline.register_validator('structure', structure_options)
    pipeline.register_validator('spec', spec_options, 0)

Validator options
*****************

`ValidationPipeline` takes an `options` keyword argument to pass options into each validator in the pipeline.

`options` should be a dict, with each top-level key being the name of the validator.

**Example**
::
    pipeline_options = {
        'structure': {
            # keyword args for the StructureValidator
        },
        'spec': {
            # keyword args for the Spec Validator
        }
    }

Instantiating the pipeline
**************************

WIP

`job_id`
++++++++

A unique identifier for this job. It will be used to creating a directory inside workspace, and therefore should be unique.

`workspace`
+++++++++++

A directory for persisting files that are read from and written to in job processing.

`dry_run`
+++++++++

If `dry_run` is True, any files that have been written to the workspace will be removed on job completion.

Running the pipeline
********************

Run the pipeline with the `run` method.

`run` in turn calls the supported **validator methods** of each validator.

Once the data table has been run through all validators, `run` returns a tuple of `valid, report`, where:

* `valid` is a boolean, indicating if the data table is valid according to the pipeline validation
* `report` is `reporter.Report` instance, which can be used to generate a report in various formats


Validator arguments
*******************

Most validators will have custom keyword arguments for their configuration.

Additionally, all validators are expected to take the following keyword arguments, and exhibit certain behaviour based on their values.

The `base.Validator` signature implements these arguments.

`fail_fast`
+++++++++++

`fail_fast` is a boolean that defaults to `False`.

If `fail_fast` is `True`, the validator is expected to stop processing as soon as an error occurs.

`transform`
+++++++++++

`transform` is a boolean that defaults to `True`.

If `transform` is `True`, then the validator is "allowed" to return transformed data.

The caller (e.g., the pipeline class) is responsible for persisting transformed data.

`report_limit`
++++++++++++++

`report_limit` is an int that defaults to `1000`, and refers to the maximum amount of entries that this validator can write to a report.

If this number is reached, the validator should stop processing.

Validator methods
*****************

The following methods are checked for on each validator, and called, in this order, if they exist.

`pre_run`
+++++++++

A hook to run any code before processing the data table.

`run_header`
++++++++++++

Process data table headers.

`run_row`
+++++++++

Process a data table row.

`run_column`
++++++++++++

Not implemented.

# TODO: Probably remove this.

`post_run`
++++++++++

A hook to run any code after processing the data table.

`run`
+++++

While not called in a validation pipeline, each validator is expected to implement its own `run` method for use as a standalone validator.

Any validator class that inherits `validators.base.Validator` has a `run` method that calls and responds accordingly.


Validator attributes
********************

Validators are also expected to have the following attributes.

`report`
++++++++

A `reporter.Report` instance. See `Reporter`_

Validators are expected to write report entries to the report instance.

`ValidationPipeline` will call `validator.report.generate` for each validator to build the pipeline report.

`name`
++++++

A shorthand name for this validator. `name` should be unique when called in a pipeline.

Validators that inherit from `base.Validator` have a name that defaults to a lower-cased version of the class name.




.. _`Reporter`: https://github.com/okfn/reporter
