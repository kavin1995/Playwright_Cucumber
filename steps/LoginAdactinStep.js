const {When, Then, setDefaultTimeout} = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/LoginPage');

let lp =new LoginPage();
setDefaultTimeout(60 * 1000);

When('User is on  login page',async()=>{
    await lp.navigate();
})
When('User enter the username',async()=>{
    await lp.enterUsername();
})
When('User enter the password',async()=>{
    await lp.enterPassword();
})
When('User click on login button',async()=>{
    await lp.clickOnLoginBtn();
})
Then('User verify the title',async()=>{
    await lp.verifyTitle();
})
