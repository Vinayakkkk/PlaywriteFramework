import { Page, expect } from '@playwright/test';
import { pageelements } from '../pages/elements/pageelements';

export class LoginPage {
  private page: Page;
  private elements: pageelements;

  constructor(page: Page) {
    this.page = page;
    this.elements = new pageelements(page);
  }
  
  async navigate() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/', {
      waitUntil: 'networkidle',
      timeout: 60000
    });
  }

  async login(username: string, password: string) {
    await this.elements.usernameInput.fill(username);
    await this.elements.passwordInput.fill(password);
    await this.elements.loginButton.click();
  }

  async verifyDashboard() {
    await expect(this.elements.dashboardHeader).toHaveText('Logged In Successfully');
  }

  async verifyInvalidLoginMessage() {
    await expect(this.elements.errorMessage).toContainText('Your username is invalid!');
  }
}
