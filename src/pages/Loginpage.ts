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
      // Set default timeout to 30 seconds for this navigation
      this.page.setDefaultTimeout(30000);
      
      await this.page.goto('https://practicetestautomation.com/practice-test-login/', {
        waitUntil: 'domcontentloaded',
        timeout: 30000
      });
      
      // Wait for username field to be visible as an additional check
      await this.elements.usernameInput.waitFor({ state: 'visible', timeout: 10000 });
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      console.error('Failed to navigate to login page:', errorMessage);
      throw new Error(`Navigation failed: ${errorMessage}`);
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
