// more typscript with playwright tests

import { expect, test } from "@playwright/test";
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

test("API test with TS type", async ({ page }) => {
  await page.goto("https://jsonplaceholder.typicode.com/users");
  const results: User[] = await page.evaluate(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
  });

  const body: User = results[0];

  expect(body.id).toBeDefined();
  expect(body.name).toBeDefined();
  expect(body.username).toBeDefined();
  expect(body.email).toBeDefined();
  expect(body.address.street).toBeDefined();
  expect(body.address.suite).toBeDefined();
  expect(body.address.city).toBeDefined();
  expect(body.address.zipcode).toBeDefined();
  expect(body.address.geo.lat).toBeDefined();
  expect(body.address.geo.lng).toBeDefined();
  expect(body.phone).toBeDefined();
  expect(body.website).toBeDefined();
  expect(body.company.name).toBeDefined();
  expect(body.company.catchPhrase).toBeDefined();
  expect(body.company.bs).toBeDefined();
});

test("more real world tests with playwright", async ({ page }) => {
  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }

  await page.goto("https://fakestoreapi.com/products/1");
  const response = await page.evaluate(async () => {
    const res = await fetch("https://fakestoreapi.com/products/1");
    return res.json();
  });

  const product: Product = response;
  expect(product.id).toBe(1);
  expect(product.title).toBeDefined();
  expect(product.price).toBeDefined();
  expect(product.description).toBeDefined();
  expect(product.category).toBeDefined();
  expect(product.image).toBeDefined();
  expect(product.rating.rate).toBeDefined();
  expect(product.rating.count).toBeDefined();
});

test("TypeScript interface with Todo", async ({ page }) => {
  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  await page.goto("https://jsonplaceholder.typicode.com/todos/1");
  const response = await page.evaluate(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return res.json();
  });

  const todo: Todo = response;
  expect(todo.userId).toBe(1);
  expect(todo.id).toBe(1);
  expect(todo.title).toBeDefined();
  expect(todo.completed).toBeDefined();
});
