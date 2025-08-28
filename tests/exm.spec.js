// login.spec.js
const { test, expect } = require('@playwright/test');

test('Login flow test', async ({ page }) => {
  console.log("🎭 Running Playwright Test...");

  await page.goto("https://emailautomationiqtech.azurewebsites.net/", {
    waitUntil: "networkidle"
  });
  await page.goto('https://apps.powerapps.com/play/e/3ae9393f-4a41-e2c3-ba0e-11a0029cf1a3/a/e3896055-5f2f-4d3e-a38f-6596e05b0c62?tenantId=701766e0-5785-4e08-969d-87bbce0d356b&hint=5f0ae712-a9e0-40f5-b8bd-93d1a2e8f50a&sourcetime=1755792419043&source=portal');
  await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().locator('div:nth-child(2) > .canvasContentDiv.container_1vt1y2p > .container_1f0sgyp > div:nth-child(4) > .appmagic-borderfill-container > .appmagic-border-inner > .react-knockout-control > .appmagic-label').click();
  await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('button', { name: 'Desk', exact: true }).click();
  await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByLabel('Item 34').getByRole('button', { name: '29' }).click();

  console.log("✅ Playwright Test Successfully Completed");
});
