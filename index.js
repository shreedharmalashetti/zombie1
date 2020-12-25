

const Browser = require('zombie');
const browser = new Browser();
const url = 'http://www.cropsurvey.karnataka.gov.in/';


/*browser.fetch(url)
  .then(function(response) {
    console.log('Status code:', response.status);
    if (response.status === 200)
      return response.text();
  })
  .then(function(text) {
    //console.log('Document:', text);
  })
  .catch(function(error) {
    console.log('Network error');
  });
  


//const para = await browser.text('p')
//const body = await browser.body;
//stnst location = await browser.location;
//console.log(para)
//console.log(location)

 browser.visit(url)
 .then(()=>{
   return true;
 })
 .then(()=>{
   browser.pressButton('[type="submit"]')
 })
 .then(()=>{
   browser.clickLink('[href="CropSurveyDetails/frmnagovtaquiredd.aspx"]')
   return true;
 })
 .then(()=>{
   console.log('hello world')
   return browser;
 })
 .then((browser)=>{
   console.log(browser.location.href)
 })
 .catch((err)=>{
   console.log(err)
 })

*/

browser.visit(url,()=>{
  browser.pressButton('[type="submit"]',()=>{
    browser.clickLink('[href="CropSurveyDetails/frmnagovtaquiredd.aspx"]',()=>{
      console.log(browser.text('h3'))
    //  console.log(browser.html('[name="ddlDistrict"]'))
      browser.select('[name="ddlDistrict"]','Bagalkote',()=>{
      browser.select('[name="drpTaluk"]','Jamakhandi',()=>{
        
     })
     })
    })
  })
})

       
         
           
 