// @ts-check
import { test as setup } from '@playwright/test';
import { testLoginFlow } from './commands/login-flow';

setup('authenticate and save state', async ({ page }) => {
//   await testLoginFlow(page);
  await page.goto('https://emailautomationiqtech.azurewebsites.net/login');
  await page.fill('[name="username"]', 'admin@gmail.com');
  await page.fill('#password', 'admin');
  await page.click('.signin');
  // Save cookies & localStorage
  await page.context().storageState({ path: 'auth.json' });
});
