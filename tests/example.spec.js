// @ts-check
import { test, expect } from '@playwright/test';
import { testLoginFlow } from './commands/login-flow';

test('test login flow', async ({ page }) => {
  await testLoginFlow(page);
});
