# env.py : This file consumes values from environment variables.
# The environment variables need to be sourced from the .env file 
# in the root of this project.

import os

DB_NAME = os.environ.get('DB_NAME')
DB_HOST = os.environ.get('DB_HOST')
DB_PORT = int(os.environ.get('DB_PORT'))
DB_USER = os.environ.get('DB_USER')
DB_PASS = os.environ.get('DB_PASS')
HOST = os.environ.get('HOST')
PORT = int(os.environ.get('PORT'))
DEBUG = os.environ.get('DEBUG', False)
FIREFOX_DRIVER = os.environ.get('FIREFOX_DRIVER')
