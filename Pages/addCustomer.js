/** Author - SHUBHANGI GOEL */

let addCustomer=function(){

    let firstName = element(by.model('fName'));
    let lastName = element(by.model('lName'));
    let postalCode = element(by.model('postCd'));
    let  CustomerAdded =element(By.xpath("/html/body/div[3]/div/div[2]/div/div[2]/div/div/form/button"));
    let bankManagerLogin=element(by.buttonText("Bank Manager Login"));
    let addCustomerButton=element(by.css('[ng-click="addCust()"]'));

/**Launch Browser */
this.getBrowser=function(url){
    browser.get(url);
}

/**Click on Add Customer */
this.addNewCustomer=function(){
    addCustomerButton.click();
}

/**Click on Bank Manager Login Button */
this.doBankManagerLogin=function(){
    bankManagerLogin.click();
}
/**Enter First Name */
this.enterFirstName=function(Fname){
    firstName.sendKeys(Fname);
}

/**Enter Last Name */
this.enterLastName=function(Lname){
    lastName.sendKeys(Lname);
}

/**Enter Postal Code */
this.enterPostalCode=function(postal){
    postalCode.sendKeys(postal);
}

/**Click on Add Customer Button */
this.addCustomerButton=function(){
    CustomerAdded.click();

}
}
module.exports=new addCustomer();
