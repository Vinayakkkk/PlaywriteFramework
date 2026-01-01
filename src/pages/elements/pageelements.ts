import { Page, Locator } from '@playwright/test';

export class pageelements {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get usernameInput(): Locator {
    return this.page.locator('input[name="username"]');
  }

  get passwordInput(): Locator {
    return this.page.locator('input[name="password"]');
  }

  get loginButton(): Locator {
    return this.page.locator('#submit');
  }

  get errorMessage(): Locator {
    return this.page.locator('#error');
  }

  get dashboardHeader(): Locator {
    return this.page.locator('.post-title');
  }
}
