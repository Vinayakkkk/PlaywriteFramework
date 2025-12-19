import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { setWorldConstructor } from '@cucumber/cucumber';
import { LoginPage } from '../pages/Loginpage';

export class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  loginPage!: LoginPage;

  async init() {
    this.browser = await chromium.launch({ headless: true,args: ['--disable-web-security', '--disable-features=IsolateOrigins'] });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    this.loginPage = new LoginPage(this.page);
  }

  async close() {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);


