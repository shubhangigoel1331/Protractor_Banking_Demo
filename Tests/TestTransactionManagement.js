/** AUTHOR - SHIVAM AGARWAL */

let TransactionManagement=require("..//Pages/TransactionManagement");

describe("Transaction ", function(){
     
it('Should click on Transaction button', function() { 
     TransactionManagement.ClickTransactionbtn();
     browser.sleep('3000');
     TransactionManagement.VerifyTransactionbtn();
 });

it('Should click on Reset button and clear all transactions', function() {
     TransactionManagement.Resetbtn1();
     browser.sleep('3000');
     TransactionManagement.VerifyResetbtn();
 });

it('Should click on Logout button & send user outside the account', function() {
     TransactionManagement.Logoutbtn1();
     browser.sleep('3000');
     TransactionManagement.VerifyLogoutbtn();

  });

});