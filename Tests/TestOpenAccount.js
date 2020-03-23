/** AUTHOR - SAKSHI JAIN */

let OpenAccount = require('../Pages/OpenAccount')
describe('Open New Account', () => {

it('should Click on Open Account button ', () => {
OpenAccount.Open_Account();
browser.sleep(2000);
});


it('should select Customer Name', () => {
OpenAccount.Select_Name();
browser.sleep(2000);
OpenAccount.CustomerName();
browser.sleep(2000);
});


it('should select Currency', () => {
OpenAccount.Select_Currency();
browser.sleep(3000);
OpenAccount.CurrencyName('Rupee');
browser.sleep(2000);
});


it('should Click on Process button ', () => {
OpenAccount.Process_Name();
browser.driver.switchTo().alert().accept();
browser.sleep(2000);
});
});


