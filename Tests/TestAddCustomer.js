/** AUTHOR - SHUBHANGI GOEL */

let addCustomer=require('../Pages/addCustomer')


describe('Add New Customer', () => {

    beforeAll(function() {
       var brow= addCustomer.getBrowser('https://www.way2automation.com/angularjs-protractor/banking/#/login');
       browser.manage().window().maximize();   
       browser.sleep('3000');
    });

    it('should click on Bank Manager Login Button', () => {
        addCustomer.doBankManagerLogin();
        browser.sleep('3000');
    });

    it('should click on Add Customer Button', () => {
        addCustomer.addNewCustomer();
        browser.sleep('3000');
    });

    it('should Add New Customer Details', () => {
        var first_name="Charles";
        addCustomer.enterFirstName("Charles");
        expect(first_name).toEqual("Charles"); 
        browser.sleep('2000');

        var last_name="Logan";
        addCustomer.enterLastName("Logan");
        expect(last_name).toEqual("Logan"); 
        browser.sleep('2000');

        var postal_code="671045" 
        addCustomer.enterPostalCode("671045");
        expect(postal_code).toEqual("671045"); 
        browser.sleep('2000');

        addCustomer.addCustomerButton();
        browser.sleep('3000');
    
    });
    
});