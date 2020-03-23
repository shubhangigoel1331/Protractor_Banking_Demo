/** AUTHOR - SAKSHI JAIN */

let OpenAccount = function(){
    
   let Open_Account_button=element(by.buttonText('Open Account'));
   let Click_Select_Name=element(by.id('userSelect'));
   let Click_Select_Currency=element(by.id('currency'));
   let Process_button=element(by.buttonText('Process'));

this.Open_Account=function()
{
    Open_Account_button.click();
};

this.Select_Name=function()
{
    Click_Select_Name.click();
};

this.CustomerName=function()
{
    var Name=element(by.css('[value="4"]')).click();
    expect(Name.getText()).toEqual("Albus Dumbledore");
};

this.Select_Currency=function()
{
    Click_Select_Currency.click();
};

this.CurrencyName=function(Cmoney)
{
    var money=element(by.cssContainingText('option',Cmoney)).click();
    expect(money.getText()).toEqual(Cmoney);
};

this.Process_Name=function()
{
    Process_button.click();
};

};

module.exports=new OpenAccount();