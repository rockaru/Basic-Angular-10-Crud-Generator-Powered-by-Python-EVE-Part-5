from setuptools import setup, find_packages


LONG_DESCRIPTION = None
try:
    LONG_DESCRIPTION = open('README.rst').read()
except:
    pass

# Version Information
# (Using 'execfile' is not version safe)
exec(open('eve_mea/__version__.py').read())
VERSION = get_version()

extra_opts = dict()

# Project Setup
setup(
    name='eve-mea',
    version=VERSION,
    url='https://github.com/rockaru/eve-mea',
    author='Vlad Preda',
    author_email='vlad@{nospam}rockaru.ro',
    maintainer="Vlad Preda",
    maintainer_email="vlad@{nospam}rockaru.ro",
    description='Eve extension for MEA CRUD Angular Generator',
    long_description=LONG_DESCRIPTION,
    platforms=['any'],
    packages=find_packages(exclude=["test*"]),
    test_suite="tests",
    license='MIT',
    include_package_data=True,
    install_requires=[
        'Eve>=1.1.3',
    ],
    **extra_opts
)