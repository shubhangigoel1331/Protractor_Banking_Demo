/** AUTHOR - SHUBHANGI GOEL */

let homepage=require('../Pages/homepage')


describe('Return to Home Page', () => {
    it('should return to homepage', () => {
        // expect(loginButton).toEqual('Bank Manager Login');
        homepage.returnToHomePage();
        homepage.VerifyHomePage();
        browser.sleep('3000');
    });
});