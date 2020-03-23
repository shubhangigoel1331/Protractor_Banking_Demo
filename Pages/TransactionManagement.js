/** AUTHOR - SHIVAM AGARWAL */

let TransactionManagement=function(){

   let Transactionbtn=element(by.className('btn btn-lg tab'))
   let Resetbtn=element(by.css('[ng-click="reset()"]'))
   let Logoutbtn=element(by.className('btn logout'))
  
   this.ClickTransactionbtn=function(){
       Transactionbtn.click();
  
    };

   this.VerifyTransactionbtn=function(){
       expect(element(by.tagName('a')).getText()).toBe('Date-Time');
    };

   this.Resetbtn1=function(){
       Resetbtn.click();
  
    };

   this.VerifyResetbtn=function(){
       expect(element(by.tagName('tbody')).getText()).toBe('');
    };

    this.Logoutbtn1=function(){
       Logoutbtn.click();
    };

  this.VerifyLogoutbtn=function(){
   expect(browser.getCurrentUrl()).toEqual("https://www.way2automation.com/angularjs-protractor/banking/#/customer")
  }

  };
  
  module.exports =new TransactionManagement();