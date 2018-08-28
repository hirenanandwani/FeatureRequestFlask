#!/bin/bash

yes | sudo apt-get update
yes | sudo apt-get install python-virtualenv 
yes | sudo apt-get install python-pip

yes | pip install Flask
yes | sudo apt-get install python-flask-sqlalchemy

cd /home/ubuntu/flaskapp
#rm -rf *
#sqlite3 features.db

