var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../Tests/TestAddCustomer.js','../Tests/TestOpenAccount.js',
    '../Tests/TestCustomerSearch.js','../Tests/TestHomePage.js','../Tests/TestCustomerLogin.js','../Tests/TestTransactionManagement.js'],

     onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'tmp/screenshots'
      }).getJasmine2Reporter());
   }
}
