import { test, expect } from '@playwright/test';

// Example Playwright test cases for popular sites


test('Amazon Search - Playwright book', async ({ page }) => {
  await page.goto('https://www.amazon.com');
  await page.fill('input#twotabsearchtextbox', 'Playwright book');
  await page.press('input#twotabsearchtextbox', 'Enter');
  // Wait for results container that Amazon uses
  await expect(page.locator('span[data-component-type="s-search-results"]')).toBeVisible();
});

test('Wikipedia Search and open article', async ({ page }) => {
  await page.goto('https://en.wikipedia.org');
  await page.fill('input[name="search"]', 'Playwright');
  await page.press('input[name="search"]', 'Enter');
  await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible();
});

test('The Internet - Checkboxes toggle', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  const checkboxes = page.locator('input[type="checkbox"]');
  // Toggle each checkbox and assert state changed
  const count = await checkboxes.count();
  for (let i = 0; i < count; i++) {
    const cb = checkboxes.nth(i);
    const before = await cb.isChecked();
    await cb.click();
    await expect(cb).toHaveJSProperty('checked', !before);
  }
});

test('Example.com - navigate to more info', async ({ page }) => {
  await page.goto('https://example.com');
  await page.click('text=Learn more');
  await expect(page).toHaveURL(/iana/);
});

