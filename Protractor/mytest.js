describe("My First Test",function(){
	
	var register = element(by.css('#save'));
	var reset = element(by.css('#reset'));
	

	it("To Test Output2",function(){
		browser.ignoreSynchronization = true;
		browser.get("http://localhost:5000");	
		browser.driver.findElement(by.id('Description')).sendKeys('csknsnsmn');
		element(by.id('Clientlist')).$('[value="Client A"]').click();
		browser.driver.findElement(by.id('Priority')).sendKeys('1');
		browser.driver.findElement(by.id('TargetDate')).sendKeys('18-8-28');
		element(by.id('ProductArea')).$('[value="Claim"]').click();

		register.click();

		expect(element(by.className('alert-danger')).isDisplayed()).toBeTruthy();	
		browser.driver.sleep(3000);
		reset.click();




	});


});



describe("My First Test1",function(){
	
	var register = element(by.css('#save'));
	var reset = element(by.css('#reset'));
	

	it("To Test Output1",function(){
:		
		browser.ignoreSynchronization = true;
		browser.get("http://localhost:5000");	
		element(by.id('Clientlist')).$('[value="Client A"]').click();
		browser.driver.findElement(by.id('Priority')).sendKeys('1');
		browser.driver.findElement(by.id('TargetDate')).sendKeys('18-8-28');
		element(by.id('ProductArea')).$('[value="Claim"]').click();

		register.click();
		expect(element(by.className('alert-danger')).isDisplayed()).toBeTruthy();
		reset.click();
	


	});


});

describe("My Third Test",function(){
	
	console.log("Protractor Started");
	var register = element(by.css('#save'));
	var reset = element(by.css('#reset'));
	

	it("To Test Client",function(){
		
		browser.ignoreSynchronization = true;
		browser.get("http://localhost:5000");	
		
		
		browser.driver.findElement(by.id('Title')).sendKeys('csknsnsmn');
		browser.driver.findElement(by.id('Description')).sendKeys('csknsnsmn');

		browser.driver.findElement(by.id('Priority')).sendKeys('1');
		browser.driver.findElement(by.id('TargetDate')).sendKeys('18-8-28');
		element(by.id('ProductArea')).$('[value="Claim"]').click();
		register.click();

		expect(element(by.className('alert-danger')).isDisplayed()).toBeTruthy();
		reset.click();


	});


});

describe("My Fourth Test",function(){
	
	var register = element(by.css('#save'));
	var reset = element(by.css('#reset'));
	

	it("To Test Priority",function(){
		
		browser.ignoreSynchronization = true;
		browser.get("http://localhost:5000");	
		
		
		browser.driver.findElement(by.id('Title')).sendKeys('csknsnsmn');
		browser.driver.findElement(by.id('Description')).sendKeys('csknsnsmn');
		element(by.id('Clientlist')).$('[value="Client A"]').click();
		browser.driver.findElement(by.id('TargetDate')).sendKeys('18-8-28');
		element(by.id('ProductArea')).$('[value="Claim"]').click();
		register.click();
		expect(element(by.className('alert-danger')).isDisplayed()).toBeTruthy();
		reset.click();


	});


});


describe("My Fifth Test",function(){
	
	console.log("Protractor Started");
	var register = element(by.css('#save'));
	var reset = element(by.css('#reset'));
	

	it("To Test Target Date",function(){
		
		browser.ignoreSynchronization = true;
		browser.get("http://localhost:5000");	
		browser.driver.findElement(by.id('Title')).sendKeys('csknsnsmn');
		browser.driver.findElement(by.id('Description')).sendKeys('csknsnsmn');
		element(by.id('Clientlist')).$('[value="Client A"]').click();
		browser.driver.findElement(by.id('Priority')).sendKeys('1');
		element(by.id('ProductArea')).$('[value="Claim"]').click();
		register.click();

	
		expect(element(by.className('alert-danger')).isDisplayed()).toBeTruthy();
		reset.click();


	});


});

describe("My Sixth Test",function(){
	
	var register = element(by.css('#save'));
	var reset = element(by.css('#reset'));
	

	it("To Test Product Area",function(){
		
		browser.ignoreSynchronization = true;
		browser.get("http://localhost:5000");	
		
		
		browser.driver.findElement(by.id('Title')).sendKeys('csknsnsmn');
		browser.driver.findElement(by.id('Description')).sendKeys('csknsnsmn');
		

		element(by.id('Clientlist')).$('[value="Client A"]').click();

		browser.driver.findElement(by.id('Priority')).sendKeys('1');
		browser.driver.findElement(by.id('TargetDate')).sendKeys('18-8-28');

		register.click();

	
		expect(element(by.className('alert-danger')).isDisplayed()).toBeTruthy();
		reset.click();


	});


});


describe("My Seventh Test",function(){
	

	var register = element(by.css('#save'));
	var reset = element(by.css('#reset'));
	

	it("To Test Product Area",function(){
		
		browser.ignoreSynchronization = true;
		browser.get("http://localhost:5000");	
		register.click();
		expect(element(by.className('alert-danger')).isDisplayed()).toBeTruthy();
		reset.click();


	});


});


describe("My Eighth Test",function(){
	
	var register = element(by.css('#save'));
	var reset = element(by.css('#reset'));
	

	it("To Test Product Area",function(){
		
		browser.ignoreSynchronization = true;
		browser.get("http://localhost:5000");	

		browser.driver.findElement(by.id('Title')).sendKeys('csknsnsmn');
		browser.driver.findElement(by.id('Description')).sendKeys('csknsnsmn');
		element(by.id('Clientlist')).$('[value="Client A"]').click();
		browser.driver.findElement(by.id('Priority')).sendKeys('1');
		browser.driver.findElement(by.id('TargetDate')).sendKeys('18-8-28');
		element(by.id('ProductArea')).$('[value="Claim"]').click();
		
		register.click();
		expect(element(by.className('alert-success')).isDisplayed()).toBeTruthy();
		reset.click();


	});


});
















































































