/** AUTHOR - MIMANSHA */

let CustomerSearch = require('../Pages/CustomerSearch');
describe(' Search Customer', function() {

  it('should search customers', function() {
        CustomerSearch.clickCustomerButton();
        browser.sleep('1000');
        CustomerSearch.doSearch("Hermoine");
        browser.sleep('1000');
        expect(element(by.css('[placeholder="Search Customer"]')).getText()).toEqual('');
    
   });

  it('should delete customers', function() {
    
    CustomerSearch.clickDeleteCustomer();
    browser.sleep('2000');
   });
});