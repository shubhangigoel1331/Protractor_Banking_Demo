/** AUTHOR - SUNDRAM MISHRA */

let userDashBoard = function(){

    let deposit=element(by.css('[ng-click="deposit()"]'));
    let depositAmount=element(by.model('amount'));
    let submitAmount=element(by.css('[type="submit"]'));
    
    let withdrawl=element(by.buttonText('Withdrawl'));
    let withdrawlamount=element(by.model('amount'));
    let withdrawButton=element(by.buttonText('Withdraw'));
    
    
    this.getDeposit=function(){
        deposit.click();
        browser.sleep(2000);
    };
    
    this.enterDepositAmount=function(rupee){
        expect(depositAmount);
        depositAmount.sendKeys(rupee);
        browser.sleep(2000);
    };
    
    this.displayAmount=function()
    {
        submitAmount.click();
        browser.sleep(2000);
    };
    
    this.getWithdrawl=function(){
        withdrawl.click();
        browser.sleep(2000);
    };
    
    this.enterWithdrawlAmount=function(rupee)
    {
        withdrawlamount.sendKeys(rupee);
        browser.sleep(2000);
    };

    this.withdrawlSubmit=function()
    {
        withdrawButton.click();
        browser.sleep(2000);
    };
    
    
    };
    
    module.exports = new userDashBoard();