import { test, expect } from "@playwright/test";

test("wikipedia search bar example", async ({ page }) => {
  await page.goto("https://www.wikipedia.org/");

  await page.fill("input[name='search']", "Playwright");
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(/Playwright/);
});

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');

  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});
