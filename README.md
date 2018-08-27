####################### BriteCore Feature Request Application #####################

# FeatureRequestFlask

This is a Feature Request APP for a product in insurance industry. It is a web application to add and manage a new features requested by the client..

Techstack for this application:


    OS: Ubuntu 16
    Server Side Scripting: Python 2.7
    Server Framework: Flask
    ORM: Flask-Sql-Alchemy
    JavaScript: KnockoutJS
    Continious Integration Tool : Jenkins
    Automated Deployment Platform : AWS Code Deploy with EC2
    Frontend Testing Framework - Protractor
    Backend Testing Framework : Python unittest
    
    
  Flow of the Application :
  
      
  ![alt text](https://github.com/hirenanandwani/demo/blob/master/BriteCoreCICD.png)
  
   
    
  Directories -
  
    FeatureRequestApp - Contains Whole Application Code
    static - Contains sub directories (1)css (2)js
    templates - HTMTL Templates
    scripts - Contains .sh file that should be run on the time of deployment on AWS EC2.
    Protractor - protractor files for front-end testing of application (1) conf.js (2) mytest.js
    
  Files -
  
    featuresapp.py - Flask app which will start Flask Server
    feature-test.py - Python file which contains test case to be tested on Jenkins Server
    views.py - Contains routes for the Flask Application
    models.py - ORM - Sqlalchmey Model for Flask Application
    appsec.yml  - Configuration file which is read by AWS Code Deploy Agent to do before installation, installation and after
                  installation steps and other configuration steps to be followed at EC2 instances.
    
    
    
    
