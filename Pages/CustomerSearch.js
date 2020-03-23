/** AUTHOR - MIMANSHA  */
let CustomerSearch = function(){

    var CustomerButton = element(by.css('[ng-click="showCust()"]'));
    var Search = element(by.model('searchCustomer'));
    var DeleteCustomer =  element(by.css('[ng-click="deleteCust(cust)"]'));

    this.clickCustomerButton = function(){
        CustomerButton.click();
    }

    console.log("after click"); 

    this.doSearch = function(customer){
       Search.sendKeys(customer);
    }

    this.clickDeleteCustomer = function(){
        DeleteCustomer.click();
    }

}
module.exports=new CustomerSearch();