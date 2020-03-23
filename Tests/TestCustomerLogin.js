/** AUTHOR - SUNDRAM MISHRA */


let cType = require('../Pages/CustomerLogin');
let userDB = require("../Pages/userDashboard");

describe('Cash Deposit and Withdrawl', function () {

    it("1.customerLoginClick", function () {

        cType.chooseCustomer();
        browser.sleep(2000);

    });

    it("2.Click customer", function () {

        cType.chooseName();
        browser.sleep(2000);

    });



    it("3.Enter-in-account", function () {

        cType.login();
        browser.sleep(2000);

    });

        
    it("4.Deposit", function () {
        userDB.getDeposit();
    });

    it("5.DepositeAmount", function () {
        userDB.enterDepositAmount(5000);
        browser.sleep(2000);

    });

    it("6.DepositeSubmit", function () {
        userDB.displayAmount();
    });

    it("7.WithdrawLink", function () {
        userDB.getWithdrawl();
        browser.sleep(2000);
    });

    it("8.WithdrawAmount", function () {

        userDB.enterWithdrawlAmount(2000);
        browser.sleep(2000);

    });

    it("9.WithdrawSubmitButton", function () {
        userDB.withdrawlSubmit();
        browser.sleep(2000)

    });



});