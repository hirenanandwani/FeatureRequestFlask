from flaskapp import app
import unittest, json
from flask import request, jsonify
import sys, argparse
from models import *


class FlaskTestCase(unittest.TestCase):



#######Test_Case -1 : Testing the Welcome Page

	def test_01_index(self):
		tester = app.test_client(self)
		response = tester.get('/',content_type='html/text')
		self.assertEqual(response.status_code, 200)





#######Test_Case - 2 : Adding First Feature Request with unique Priority


#Title        :  Title_1
#Description  :  XYZ
#Client       :  Client A
#Priority     :  1
#Target Date  :  18-8-24
#Product Area :  Claim


	def test_02_add_feature_1(self):
                tester = app.test_client(self)
                response=tester.post('/regions', data=json.dumps(dict(Title='Title_1',Description='XYZ',Client='Client A',Product='Claim',Priority='1',TargetDate='18-8-24')),content_type='application/json')
		
		record = Features.query.filter_by(Title='Title_1').first()
		if record != None:
			print record.Title
                	self.assertEqual(response.status_code, 200)





#######Test_Case - 3 : Adding First Feature Request with unique Priority


#        Title        :  Title_2
#        Description  :  XYZ
#        Client       :  Client A
#        Priority     :  2
#        Target Date  :  18-8-25
#       Product Area :  Claim


        def test_03_add_feature_2(self):
                tester = app.test_client(self)
                response=tester.post('/regions', data=json.dumps(dict(Title='Title_2',Description='XYZ',Client='Client A',Product='Claim',Priority='2',TargetDate='18-8-25')),content_type='application/json')

		record = Features.query.filter_by(Title='Title_2').first()
		if record != None:
                	self.assertEqual(response.status_code, 200)





#######Test_Case - 4 : Adding third feature request with unique priority


#        Title        :  Title_3
#        Description  :  XYZ
#        Client       :  Client A
#        Priority     :  3
#        Target Date  :  18-8-26
#        Product Area :  Claim




        def test_04_add_feature_3(self):
                tester = app.test_client(self)
                response=tester.post('/regions', data=json.dumps(dict(Title='Title_3',Description='XYZ',Client='Client A',Product='Claim',Priority='3',TargetDate='18-8-26')),content_type='application/json')

		record = Features.query.filter_by(Title='Title_3').first()
                if record != None:
                        self.assertEqual(response.status_code, 200)





#######Test_Case - 5 : Adding Feature Request with already existing  priority for particular client with Entered TargetDate > Existing TargetDate


#        Title        :  Title_4
#        Description  :  XYZ
#        Client       :  Client A
#        Priority     :  2
#        Target Date  :  18-8-27
#        Product Area :  Claim


#	Three Scenarios When Priority entered by client is already exist in database
#
#	(1) Target Date entered by client > Target Date in Database for that priority
#	(2) Target Date entered by client < Target Date in Database for that priority
#	(3) Target Date entered by client = Target Date in Database for that priority
#
#	Expected output - Priority for Title_4 is set to 4
#
#	Actual Output -   Priority for Title_4 is set to 4


        def test_05_already_exist_priority_1(self):
                tester = app.test_client(self)
                response=tester.post('/regions', data=json.dumps(dict(Title='Title_4',Description='XYZ',Client='Client A',Product='Claim',Priority='2',TargetDate='18-8-27')),content_type='application/json')

		
		record = Features.query.filter_by(Title='Title_4').first()
		if str(record.Priority) == '4':
			print "Recotd is"
			print record.Priority
                	self.assertEqual(response.status_code, 200)
		else:
			self.fail("conditions not met")





#######Test_Case - 6 : Adding Feature Request with already existing  priority for particular client with Entered TargetDate <  Existing TargetDate


#        Title        :  Title_5
#        Description  :  XYZ
#        Client       :  Client A
#        Priority     :  3
#        Target Date  :  18-8-23
#        Product Area :  Claim


#        Three Scenarios When Priority entered by client is already exist in database

#        (1) Target Date entered by client > Target Date in Database for that priority
#        (2) Target Date entered by client < Target Date in Database for that priority
#        (3) Target Date entered by client = Target Date in Database for that priority


#	For Scenario No - 2 
#
#        Expected output - Priority for Title_5 is set to 1 and all other priorities are updated

#        Actual Output -   Priority for Title_5 is set to 1 and all other priorities are updated



        def test_06_already_exist_priority_2(self):
                tester = app.test_client(self)
                response=tester.post('/regions', data=json.dumps(dict(Title='Title_5',Description='XYZ',Client='Client A',Product='Claim',Priority='3',TargetDate='18-8-23')),content_type='application/json')
                
		record = Features.query.filter_by(Title='Title_5').first()
                if str(record.Priority) == '1':
                        self.assertEqual(response.status_code, 200)
		else:
                        self.fail("conditions not met")





#######Test_Case - 7 : Adding Feature Request with already existing  priority for particular client with Entered TargetDate =  Existing TargetDate


#        Title        :  Title_6
#        Description  :  XYZ
#        Client       :  Client A
#        Priority     :  2
#        Target Date  :  18-8-24
#        Product Area :  Claim


#        Three Scenarios When Priority entered by client is already exist in database
#
#        (1) Target Date entered by client > Target Date in Database for that priority
#        (2) Target Date entered by client < Target Date in Database for that priority
#        (3) Target Date entered by client = Target Date in Database for that priority


#        For Scenario No - 2 

#        Expected output - Priority for Title_5 is set to 3 and all other priorities are updated

#        Actual Output -   Priority for Title_5 is set to 3 and all other priorities are updated



        def test_07_already_exist_priority_3(self):
                tester = app.test_client(self)
                response=tester.post('/regions', data=json.dumps(dict(Title='Title_6',Description='XYZ',Client='Client A',Product='Claim',Priority='2',TargetDate='18-8-24')),content_type='application/json')
                

		record = Features.query.filter_by(Title='Title_6').first()
                if str(record.Priority) == '3':
                        self.assertEqual(response.status_code, 200)
		else:
                        self.fail("conditions not met")




#######Test_Case - 8 : Fetching Client Features from Database to Display


	def test_08_client_features_fetch(self):
                tester = app.test_client(self)
                response=tester.post('/clientFeatures', data=json.dumps(dict(client='Client A')), content_type='application/json')
		self.assertEqual(response.status_code, 200)



#######Test_Case - 9 : Checking Valid Priority Details
	
	def test_09_valid_priority(self):
               tester = app.test_client(self)
               response=tester.post('/regions', data=json.dumps(dict(Title='Title_7',Description='XYZ',Client='Client A',Product='Claim',Priority='5',TargetDate='18-8-28')), content_type='application/json')

               self.assertEqual(response.status_code, 200)



#######Test_Case - 10 : Checking Invalid Priority Details################################################
	
	def test_10_invalid_priority(self):
                tester = app.test_client(self)
                response=tester.post('/regions', data=json.dumps(dict(Title='bar',Description='Bye',Client='Client A',Product='Claim',Priority='-1',TargetDate='18-8-29')),content_type='application/json')

                self.assertEqual(response.status_code, 500)





#######Test_Case - 11 : Checking new features request with following details############################


#        Title        :  Title_8
#        Description  :  XYZ
#        Client       :  Client A
#        Priority     :  9
#        Target Date  :  18-8-29
#        Product Area :  Claim



# Expected  Output - Give 500 Error code with message - "" Next priority number should be 8

# Actual Output -  Give 500 Error code with message - "" Next priority number should be 8

	def test_11_invalid_priority_1(self):
        	tester = app.test_client(self)
       		response=tester.post('/regions', data=json.dumps(dict(Title='Title_8',Description='XYZ',Client='Client A',Product='Claim',Priority='9',TargetDate='18-8-29')), content_type='application/json')

	        record = Features.query.filter_by(Title='Title_8').first()
                if record == None:
                        self.assertEqual(response.status_code, 500)
                else:
                        self.fail("conditions not met")





#######Test_Case - 12 : Checking new features request with following details##############################


#        Title        :  Title_8
#        Description  :  XYZ
#        Client       :  Client A
#        Priority     :  9
#        Target Date  :  18-8-24
#        Product Area :  Claim



# Expected  Output - Give 500 Error code with message - "" Date for new feature for Priority No 7 should be after 18-8-28

# Actual Output -  Give 500 Error code with message - "" Date for new feature for Priority No 7 should be after 18-8-28

        def test_12_invalid_date(self):
        	tester = app.test_client(self)
        	response=tester.post('/regions', data=json.dumps(dict(Title='Title_8',Description='XYZ',Client='Client A',Product='Claim',Priority='9',TargetDate='18-8-24')), content_type='application/json')


		record = Features.query.filter_by(Title='Title_8').first()
                if record == None:
                        self.assertEqual(response.status_code, 500)
                else:
                        self.fail("conditions not met")

#######Test_Case - 13 : Add new feature request to first position with priority 1 ##############################


#        Title        :  Title_8
#        Description  :  XYZ
#        Client       :  Client A
#        Priority     :  1
#        Target Date  :  18-8-22
#        Product Area :  Claim



# Expected  Output - Title_8 will be first record with priority 1

# Actual Output -  Title_8 will be first record with priority 1





	def test_13_anything(self):
                tester = app.test_client(self)
                response=tester.post('/regions', data=json.dumps(dict(Title='Title_8',Description='XYZ',Client='Client A',Product='Claim',Priority='1',TargetDate='18-8-22')), content_type='application/json')


                record = Features.query.filter_by(Title='Title_8').first()
                if str(record.Priority) == '1':
                        self.assertEqual(response.status_code, 200)
                else:
                        self.fail("conditions not met")

#######Test_Case - 14 : Testing the Front-End ##############################################################

	def test_14_frontend_lang(self):
 
        	#r = requests.get("http://127.0.0.1:5000/")
		tester = app.test_client(self)
		response = tester.get('/',content_type='html/text')
        	page_src = response.data
 
        	if page_src.find("FEATURE REQUEST APP") < 0:
            		self.fail("Do not find data in page")












		

if __name__ == '__main__':

	#parser = argparse.ArgumentParser()
	#parser.add_argument('unittest_args', nargs='*')
	#args = parser.parse_args()
	#sys.argv[1:] = args.unittest_args
	command_line_param = sys.argv[1]
    	del sys.argv[1]
	unittest.main(verbosity=2)
