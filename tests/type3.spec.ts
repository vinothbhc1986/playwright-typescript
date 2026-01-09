//playwright typescript real time examples

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

import { test, expect } from "@playwright/test";
test("TypeScript type assertion example", async ({ page }) => {
  await page.goto("https://jsonplaceholder.typicode.com/posts/1");
  const response = await page.evaluate(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    return res.json();
  });

  const post: Post = response;
  expect(post.userId).toBe(1);
  expect(post.id).toBe(1);
  expect(post.title).toBeDefined();
  expect(post.body).toBeDefined();
});

test("Another test example", async ({ page }) => {
  await page.goto("https://example.com");
  await expect(page).toHaveTitle(/Example Domain/);
  const heading = page.locator("h1");
  const headingText: string = (await heading.textContent()) || "";
  expect(headingText).toBe("Example Domain");
  await expect(page.locator("h1")).toHaveCount(1);
});

test("check typescript", async ({ page }) => {
  await page.goto("https://example.com");
  const title: string = await page.title();
  expect(title).toBe("Example Domain");
});
