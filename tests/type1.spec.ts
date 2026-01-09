interface LoginData {
  username: string;
  password: string;
}

const user: LoginData = {
  username: "tomsmith",
  password: "SuperSecretPassword!",
};

import { expect, test } from "@playwright/test";

test("Login using typed data", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  await page.fill("#username", user.username);
  await page.fill("#password", user.password);
  await page.click('button[type="submit"]');
  await expect(page.locator("#flash")).toContainText(
    "You logged into a secure area!"
  );
});
