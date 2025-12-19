import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import mydata from '../testdata/mydata.json';

Given('user is on login page', async function (this: CustomWorld) {
  await this.loginPage.navigate();
  
});

When('user enters valid credentials', async function (this: CustomWorld) {
  await this.loginPage.login(
  
    mydata.validUser.username,
    mydata.validUser.password
    
  );
});

Then('user navigates to dashboard page', async function (this: CustomWorld) {
  await this.loginPage.verifyDashboard();
});

When('user enters invalid credentials', async function (this: CustomWorld) {
  await this.loginPage.login(
    mydata.invalidUser.username,
    mydata.invalidUser.password
  );
});

Then('error messege should be displayed', async function (this: CustomWorld) {
  await this.loginPage.verifyInvalidLoginMessage();
});


