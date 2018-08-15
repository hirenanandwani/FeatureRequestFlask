from flaskdemo1 import app
import unittest
import json
from flask import request, jsonify


class FlaskTestCase(unittest.TestCase):

	def test_index(self):
		tester = app.test_client(self)
		response = tester.get('/',content_type='html/text')
		self.assertEqual(response.status_code, 200)

	def test_ind(self):
		tester = app.test_client(self)
		response=tester.post('/regions', data=json.dumps(dict(Title='bar',Description='Bye',Client='Client A',Product='Claim',Priority='1',TargetDate='24/6/2018')),content_type='application/json')
		#self.assertFalse(response.data != 'Data Inserted Successfully')
		assert response.data == '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">\n<title>500 Internal Server Error</title>\n<h1>Internal Server Error</h1>\n<p>The server encountered an internal error and was unable to complete your request.  Either the server is overloaded or there is an error in the application.</p>\n'
	
		assert response.data == 'Data Inserted Successfully'

	#def test_main(self):
        #	with app.test_client() as client:
            		# send data as POST form to endpoint
            		#sent = {'Title': 'Hiren','Description':'Anandwani','Client':'Client A','Priority':'1','TargetDate':'23/6/18','ProductArea':'Billig'}
			#sent = {'Title':'Hiren'}
         #   		result = client.post(
           #     		'/regions',
          #      		json= {'Title': 'Hiren','Description':'Anandwani','Client':'Client A','Priority':'1','TargetDate':'23/6/18','ProductArea':'Billig'})

	#		self.assertEqual(result.data,"Data Inserted Successfully")
			#json_data = result.get_json()
   			#assert generate_response(email, json_data['resp'])
            		# check result from server with expected data
            		#self.assertEqual(
                	#	result.data,
                	#	json.dumps(sent)
            		#)
			
		

if __name__ == '__main__':
	unittest.main()
