from flaskapp import app,db
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask import render_template
from models import Features
import json


@app.route('/')
def index():
        #return app.send_static_file('feature.html')
	return render_template('feature.html')


@app.route('/regions', methods=['POST','GET'])
def region():
	#region = request.json
	#with open("C:\\test.txt", 'w') as f:
	#f.write(regions)

	content = request.get_json(silent=True)
	#with open('somefile.txt', 'a') as the_file:
	#the_file.write(str(content['Title'])+ str(content['Client']))


	new_feature = Features(Title=str(content['Title']), Description=str(content['Description']), Client=str(content['Client']), ProductArea=str(content['Product']), Priority = str(content['Priority']), TargetDate= str(content['TargetDate']))
	

	temp_feature = Features.query.filter_by(Client=str(content['Client']), Priority=int(content['Priority'])).first()

	if temp_feature != None:
		with open('somefile.txt', 'a') as the_file:
        		the_file.write(str(temp_feature.Title))
		
		records = Features.query.filter(Features.Priority >= int(content['Priority']), Features.Client==str(content['Client']))
		for record in records:
			record.Priority = record.Priority+1

		#Features.order_by(Features.Priority.desc())
	
	



	db.session.add(new_feature)
	db.session.commit()

    	return "Data Inserted Successfully"

@app.route('/clientFeatures', methods=['POST','GET'])
def clientFeature():
	print "ClientFeatures"
	content = request.get_json(silent=True)	
	print str(content['client'])

	#print(content)
	temp_feature = Features.query.filter_by(Client=str(content['client'])).order_by(Features.Priority)
	

	output = []
	
	for feature in temp_feature:
		feature_data = {}
		feature_data['Title'] = feature.Title
		feature_data['TargetDate'] = feature.TargetDate
		feature_data['Priority'] = feature.Priority
		output.append(feature_data)
		
	#return json.dumps([dict(r) for r in temp_feature])
	print output
	return jsonify({'features' : output})
	#return jsonify({'features' : temp_feature})
	#return "Data Returned"
	
