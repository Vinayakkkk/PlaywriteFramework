import { Page, expect, Locator } from '@playwright/test';

export class LoginPage {
  // Locators
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;
  private readonly dashboardHeader: Locator;

  constructor(private readonly page: Page) {
    // Initialize locators in constructor
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('#submit');
    this.errorMessage = page.locator('#error');
    this.dashboardHeader = page.locator('.post-title');
  }
  
  async navigate() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/', {
      waitUntil: 'networkidle',
      timeout: 60000
    });
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyDashboard() {
    await expect(this.dashboardHeader).toHaveText('Logged In Successfully');
  }

  async verifyInvalidLoginMessage() {
    await expect(this.errorMessage).toContainText('Your username is invalid!');
  }
}
