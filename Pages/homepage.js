/** AUTHOR - SHUBHANGI GOEL */
let homepage=function(){

    let home=element(by.css('[ng-click="home()"]'));


    this.returnToHomePage=function(){
       home.click();
    
      };
     
    this.VerifyHomePage=function(){
       expect(browser.getCurrentUrl()).toEqual("https://www.way2automation.com/angularjs-protractor/banking/#/login");
     }
   
   
   };
   
   module.exports =new homepage();