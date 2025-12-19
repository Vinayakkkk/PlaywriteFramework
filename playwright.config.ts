import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30000,
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  }
});
