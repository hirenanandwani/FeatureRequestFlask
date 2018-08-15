#!/bin/bash

yes | sudo apt-get update
yes | sudo apt-get install python-virtualenv 
yes | sudo apt-get install python-pip

mkdir flask-application
cd flask-application
virtualenv flaskenv

source flaskenv/bin/activate

yes | pip install Flask
yes | sudo apt-get install python-flask-sqlalchemy
#sqlite3 features.db

