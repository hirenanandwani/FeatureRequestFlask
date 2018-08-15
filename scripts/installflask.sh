#!/bin/bash

sudo apt-get update
sudo apt-get install python-virtualenv 
sudo apt-get install python-pip

mkdir flask-application
cd flask-application
virtualenv flaskenv

source flaskenv/bin/activate

pip install Flask
sudo apt-get install python-flask-sqlalchemy
sqlite3 features.db

