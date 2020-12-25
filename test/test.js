var expect = require('chai').expect,
Browser = require('zombie'),
browser = new Browser();

describe('Loads pages', function(){
        // this.timeout(5000)

    it('Google.com', function(done){

        browser.visit("http://www.cropsurvey.karnataka.gov.in/",  ()=> {
         //  expect(browser.text("title")).to.equal('Google');
        // console.log( browser.text('.gb_4 gb_5 gb_je gb_5c'))
      browser.pressButton('LoginbtnLogin');
      console.log(browser.text('b'));
          
        });
          done();
    });

});