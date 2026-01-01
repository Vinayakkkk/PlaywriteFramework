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
    try {
      // Set a longer timeout for the page load
      this.page.setDefaultTimeout(30000);
      
      // Navigate to the page
      await this.page.goto('https://practicetestautomation.com/practice-test-login/', {
        waitUntil: 'domcontentloaded',
        timeout: 30000
      });

      // Wait for a key element to be visible
      await this.elements.usernameInput.waitFor({ state: 'visible', timeout: 10000 });
    } catch (error) {
      console.error('Navigation error:', error);
      throw error;
    }
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
