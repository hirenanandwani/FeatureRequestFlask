#from app import app
from flask import Flask, request, jsonify
#from routes import *
from flask_sqlalchemy import SQLAlchemy 
from flask import render_template
import json,sys, argparse

app = Flask(__name__)

parser = argparse.ArgumentParser()
parser.add_argument('--input', default='My Input')

# We are maintaing seprate database for Test and Production. We will pass it on command line
DB = sys.argv[1]

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./'+str(DB)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

from views import *


if __name__ == "__main__":
        app.run(host='0.0.0.0', port=5000, debug=True, use_reloader=False)

