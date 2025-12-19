import { Page, expect } from '@playwright/test';

  export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  

  private usernameInput= () =>this.page.locator('#username')
  private passwordInput= () =>this.page.locator('#password')
  private loginButton = () => this.page.locator('#submit');
  private errorMessage = () => this.page.locator('#error');
  private dashboardHeader = ()=> this.page.locator('//h1[normalize-space()="Logged In Successfully"]');

  async navigate() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/',{
      waitUntil: 'networkidle',
      timeout: 60000
      
    });
  }

   async login(username: string, password: string) {
    await this.usernameInput().fill(username);
    await this.passwordInput().fill(password);
    await this.loginButton().click();
  }

   async verifyDashboard() {
    await expect(this.dashboardHeader()).toHaveText('Logged In Successfully');
  }

  async verifyInvalidLoginMessage() {
    await expect(this.errorMessage()).toContainText('Your username is invalid!');
  }
}
