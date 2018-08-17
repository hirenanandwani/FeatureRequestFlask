#from app import app
from flask import Flask, request, jsonify
#from routes import *
from flask_sqlalchemy import SQLAlchemy 
from flask import render_template
import json

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./features.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

from views import *


if __name__ == "__main__":
        app.run(host='0.0.0.0', port='5000', debug=True)

