import os


def read_from(app, *paths):
    path = os.path.join(app, 'docs', *paths)
    if os.path.exists(path):
        return open(path, encoding='utf8').read()
    else:
        return ''


def read(request, *paths):
    return read_from(request.resolver_match.app_name, *paths)
