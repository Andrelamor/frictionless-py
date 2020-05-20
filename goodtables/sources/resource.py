import datapackage
from .table import validate_table


def validate_resource(resource, base_path=None, **options):
    resource = datapackage.Resource(resource, base_path=base_path)

    # TODO: support multipart paths
    # TODO: test inline data in reports

    # Prepare dialect/headers
    headers = 1
    dialect = resource.descriptor.get('dialect', {})
    if dialect.get('header') is False:
        headers = None

    # Validate table
    report = validate_table(
        resource.source,
        headers=headers,
        scheme=resource.descriptor.get('scheme'),
        format=resource.descriptor.get('format'),
        encoding=resource.descriptor.get('encoding'),
        compression=resource.descriptor.get('compression'),
        pick_fields=resource.descriptor.get('pickFields'),
        skip_fields=resource.descriptor.get('skipFields'),
        pick_rows=resource.descriptor.get('pickRows'),
        skip_rows=resource.descriptor.get('skipRows'),
        size=resource.descriptor.get('bytes'),
        hash=resource.descriptor.get('hash'),
        schema=resource.descriptor.get('schema'),
        **options,
        **dialect,
    )

    # Extend warnings
    for error in resource.errors:
        report['warnings'].append(str(error))

    return report
