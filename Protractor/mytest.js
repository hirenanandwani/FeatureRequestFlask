
describe("First Test",function(){

        var register = element(by.css('#save'));
        var reset = element(by.css('#reset'));


        it("To Test whether welcome page is loaded or not",function(){
                browser.ignoreSynchronization = true;
                browser.get("http://localhost:5000");
		var myText = "FEATURE REQUEST APP";
                element(by.xpath("//*[contains(., '" + myText + "')]"));


        });


});


describe("Second Test",function(){
	
	var register = element(by.css('#save'));
	var reset = element(by.css('#reset'));
	

	it("To Test Title Null",function(){
		browser.ignoreSynchronization = true;
		browser.get("http://localhost:5000");	
		browser.driver.findElement(by.id('Description')).sendKeys('csknsnsmn');
		element(by.id('Clientlist')).$('[value="Client A"]').click();
		browser.driver.findElement(by.id('Priority')).sendKeys('1');
		browser.driver.findElement(by.id('TargetDate')).sendKeys('18-8-28');
		element(by.id('ProductArea')).$('[value="Claim"]').click();

		register.click();
		browser.switchTo().alert().accept();
		expect(element(by.className('alert-danger')).isDisplayed()).toBeTruthy();	
		reset.click();




	});


});



describe("Third  Test1",function(){
	
	var register = element(by.css('#save'));
	var reset = element(by.css('#reset'));
	

	it("To Test DEscription Null",function(){
		browser.ignoreSynchronization = true;
		browser.get("http://localhost:5000");	
		browser.driver.findElement(by.id('Title')).sendKeys('csknsnsmn');
		element(by.id('Clientlist')).$('[value="Client A"]').click();
		browser.driver.findElement(by.id('Priority')).sendKeys('1');
		browser.driver.findElement(by.id('TargetDate')).sendKeys('18-8-28');
		element(by.id('ProductArea')).$('[value="Claim"]').click();
		register.click();
		browser.switchTo().alert().accept();
		expect(element(by.className('alert-danger')).isDisplayed()).toBeTruthy();
		reset.click();
	


	});


});

describe("Fourth Test",function(){
	
	console.log("Protractor Started");
	var register = element(by.css('#save'));
	var reset = element(by.css('#reset'));
	

	it("To Test Client Not Selected",function(){
		
		browser.ignoreSynchronization = true;
		browser.get("http://localhost:5000");	
		
		
		browser.driver.findElement(by.id('Title')).sendKeys('csknsnsmn');
		browser.driver.findElement(by.id('Description')).sendKeys('csknsnsmn');

		browser.driver.findElement(by.id('Priority')).sendKeys('1');
		browser.driver.findElement(by.id('TargetDate')).sendKeys('18-8-28');
		element(by.id('ProductArea')).$('[value="Claim"]').click();
		register.click();
		browser.switchTo().alert().accept();
		expect(element(by.className('alert-danger')).isDisplayed()).toBeTruthy();
		reset.click();


	});


});

describe("Fifth Test",function(){
	
	var register = element(by.css('#save'));
	var reset = element(by.css('#reset'));
	

	it("To Test Priority Not Selected",function(){
		
		browser.ignoreSynchronization = true;
		browser.get("http://localhost:5000");	
		
		
		browser.driver.findElement(by.id('Title')).sendKeys('csknsnsmn');
		browser.driver.findElement(by.id('Description')).sendKeys('csknsnsmn');
		element(by.id('Clientlist')).$('[value="Client A"]').click();
		browser.driver.findElement(by.id('TargetDate')).sendKeys('18-8-28');
		element(by.id('ProductArea')).$('[value="Claim"]').click();
		register.click();
		browser.switchTo().alert().accept();
		expect(element(by.className('alert-danger')).isDisplayed()).toBeTruthy();
		reset.click();


	});


});


describe("Sixth Test",function(){
	
	console.log("Protractor Started");
	var register = element(by.css('#save'));
	var reset = element(by.css('#reset'));
	

	it("To Test Target Date not Selected",function(){
		
		browser.ignoreSynchronization = true;
		browser.get("http://localhost:5000");	
		browser.driver.findElement(by.id('Title')).sendKeys('csknsnsmn');
		browser.driver.findElement(by.id('Description')).sendKeys('csknsnsmn');
		element(by.id('Clientlist')).$('[value="Client A"]').click();
		browser.driver.findElement(by.id('Priority')).sendKeys('1');
		element(by.id('ProductArea')).$('[value="Claim"]').click();
		register.click();
		browser.switchTo().alert().accept();
	
		expect(element(by.className('alert-danger')).isDisplayed()).toBeTruthy();
		reset.click();


	});


});

describe("Seventh Test",function(){
	
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
		browser.switchTo().alert().accept();

		expect(element(by.className('alert-danger')).isDisplayed()).toBeTruthy();
		reset.click();


	});


});


describe("Eighth Test",function(){
	

	var register = element(by.css('#save'));
	var reset = element(by.css('#reset'));
	

	it("To Test Product Area",function(){
		
		browser.ignoreSynchronization = true;
		browser.get("http://localhost:5000");	
		register.click();
		browser.switchTo().alert().accept();
		expect(element(by.className('alert-danger')).isDisplayed()).toBeTruthy();
		reset.click();


	});


});


describe("Nineth Test",function(){
	
	var register = element(by.css('#save'));
	var reset = element(by.css('#reset'));
	

	it("Successful Submit",function(){
		
		browser.ignoreSynchronization = true;
		browser.get("http://localhost:5000");	

		browser.driver.findElement(by.id('Title')).sendKeys('csknsnsmn');
		browser.driver.findElement(by.id('Description')).sendKeys('csknsnsmn');
		element(by.id('Clientlist')).$('[value="Client A"]').click();
		browser.driver.findElement(by.id('Priority')).sendKeys('1');
		browser.driver.findElement(by.id('TargetDate')).sendKeys('18-8-28');
		element(by.id('ProductArea')).$('[value="Claim"]').click();
		
		register.click();
		browser.driver.sleep(2000);
		browser.switchTo().alert().accept();
		
		expect(element(by.className('alert-success')).isDisplayed()).toBeTruthy();
		reset.click();


	});


});


describe("Tenth Test",function(){

        var register = element(by.css('#save'));
        var reset = element(by.css('#reset'));
	
        it("Reset Button Click Test",function(){

                browser.ignoreSynchronization = true;
                browser.get("http://localhost:5000");
	
		browser.driver.findElement(by.id('Title')).sendKeys('csknsnsmn');
                browser.driver.findElement(by.id('Description')).sendKeys('csknsnsmn');
                element(by.id('Clientlist')).$('[value="Client A"]').click();
                browser.driver.findElement(by.id('Priority')).sendKeys('1');
                browser.driver.findElement(by.id('TargetDate')).sendKeys('18-8-28');
                element(by.id('ProductArea')).$('[value="Claim"]').click();

		reset.click();

        	var title = element(by.id('Title'));
        	var description = element(by.id('Description'));
        	var client = element(by.id('Clientlist'));
        	var priority = element(by.id('Priority'));
        	var targetdate = element(by.id('TargetDate'));
        	var productarea = element(by.id('ProductArea'));

		expect(title.getText()).toEqual("").then
			expect(description.getText()).toEqual("").then
				expect(client.getText()).toEqual('Choose client......\nClient A\nClient B\nClient C').then
					expect(priority.getText()).toEqual("").then
						expect(targetdate.getText()).toEqual("").then
							expect(productarea.getText()).toEqual('Choose Product Area.....\nPolicies\nBilling\nClaim');



        });


});

















































































