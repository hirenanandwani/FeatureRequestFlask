from flaskapp import app,db
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import desc
from flask import render_template
from models import Features
from datetime import datetime
import json


@app.route('/')
def index():
        #return app.send_static_file('feature.html')
	return render_template('feature.html')


@app.route('/regions', methods=['POST','GET'])
def region():

	
	content = request.get_json(silent=True)


	### Cheking For Invalid Priority
	if int(content['Priority']) <= 0:
		return json.dumps({ "error": "Priority Should be Greater than Zero" }), 500
		

	check_database_empty = Features.query.filter_by(Client=str(content['Client'])).first()
	temp_feature = Features.query.filter_by(Client=str(content['Client']), Priority=int(content['Priority'])).first()


	new_date = datetime.strptime(str(content['TargetDate']), '%y-%m-%d').date()
	print new_date


	#### User should enter new unique priority in sequence

	""" 
			For example. If we have 1 to 10 Priority in databases 
			thenuser should enter priority no 1 to 11. Not after 11.

			Same, For entering new unique priority, User should 
			enter date greater than the date of highest priority
			which will be displayed on UI.

			For e.g Date for Priority no 10 is 8/28/2018 then 
			date for priority 11 should be on or after 8/28/2018.
	"""


	
	#### Checking if user have entered priority no in sequence if not, It will throw 500 with error message ###

	if check_database_empty != None and temp_feature == None:
		max_priority = Features.query.filter_by(Client=str(content['Client'])).order_by(desc(Features.Priority)).first()

		if int(content['Priority']) != int(max_priority.Priority)+1:
			return json.dumps({ "error": "Next Feature Priority Should be "+str(int(max_priority.Priority +1)) }), 500

		last_date = Features.query.filter_by(Client=str(content['Client'])).order_by(desc(Features.id)).first()
		#last_date = datetime.strptime(str(last_date.TargetDate), '%m-%d-%y').date()
		print last_date.TargetDate
		#last_date = datetime.strptime(str(last_date.TargetDate), '%y-%m-%d').date()
		last_date = last_date.TargetDate
		#print last_date
		

	#### Checking if user have entered proper date for unique priorityif not, it will throw 500 withh error message ###
		if new_date < last_date:
			 print "Entered Again"
		    	 print last_date 
			 return json.dumps({ "error": "Date should be equal or after "+ str(last_date)+ "for"+ str(max_priority.Priority)}), 500		

	new_date = datetime.strptime(str(content['TargetDate']), '%y-%m-%d').date()

	###########  		Reordiring the Priority when already existing priority no  entered by user   	  ###########
	###########												  ###########
	###########		Three Cases can be included when already existing priority number entered	  ###########
	###########												  ###########
	###########		Case - 1: Entered Target Date is less than Date in Database for that Priority	  ###########
	###########		Case - 2: Entered Target Date is greater than date in database for the Priority   ###########
	###########		Case - 3: Entered Target Date is equals to date in database for the Priority	  ###########


	while (temp_feature != None):

		temp_feature = Features.query.filter_by(Client=str(content['Client']), Priority=int(content['Priority'])).first()

		if temp_feature == None:
			break
	
		with open('somefile.txt', 'a') as the_file:
			the_file.write(str(temp_feature.Title))


		exist_date = temp_feature.TargetDate

		if new_date < exist_date:
			records = Features.query.filter(Features.TargetDate > new_date, Features.Client==str(content['Client'])).order_by(Features.Priority)

			content['Priority'] = records[0].Priority
			for record in records:
				record.Priority = record.Priority+1
			temp_feature = None


		if new_date > exist_date:
			content['Priority'] = int(content['Priority']) + 1
			temp_feature = Features.query.filter_by(Client=str(content['Client']), Priority=int(content['Priority'])).first()

		if new_date == exist_date:
			records = Features.query.filter(Features.Priority > int(content['Priority']), Features.Client==str(content['Client'])).first()
			content['Priority'] = int(content['Priority']) + 1


	new_feature = Features(Title=str(content['Title']), Description=str(content['Description']), Client=str(content['Client']), 				ProductArea=str(content['Product']), Priority = str(content['Priority']), TargetDate= new_date)

	db.session.add(new_feature)
	db.session.commit()

	return "Data Inserted Successfully"

@app.route('/clientFeatures', methods=['POST','GET'])
def clientFeature():
	content = request.get_json(silent=True)	
	temp_feature = Features.query.filter_by(Client=str(content['client'])).order_by(Features.Priority)
	output = []
	
	for feature in temp_feature:
		print feature.TargetDate
		feature_data = {}
		feature_data['Title'] = feature.Title
		feature_data['TargetDate'] = str(feature.TargetDate)
		feature_data['Priority'] = feature.Priority
		output.append(feature_data)
		
	return jsonify({'features' : output})
	
