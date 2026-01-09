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

test("TypeScript type assertion with Comment", async ({ page }) => {
  type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  };

  await page.goto("https://jsonplaceholder.typicode.com/comments/1");
  const response = await page.evaluate(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments/1");
    return res.json();
  });

  const comment: Comment = response;
  expect(comment.postId).toBe(1);
  expect(comment.id).toBe(1);
  expect(comment.name).toBeDefined();
  expect(comment.email).toBeDefined();
  expect(comment.body).toBeDefined();
});

test("TypeScript interface with Album", async ({ page }) => {
  interface Album {
    userId: number;
    id: number;
    title: string;
  }

  await page.goto("https://jsonplaceholder.typicode.com/albums/1");
  const response = await page.evaluate(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums/1");
    return res.json();
  });

  const album: Album = response;
  expect(album.userId).toBe(1);
  expect(album.id).toBe(1);
  expect(album.title).toBeDefined();
});

// test not posts
test("TypeScript type assertion with Post", async ({ page }) => {
  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

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

test("TypeScript interface with Photo", async ({ page }) => {
  interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }

  await page.goto("https://jsonplaceholder.typicode.com/photos/1");
  const response = await page.evaluate(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos/1");
    return res.json();
  });

  const photo: Photo = response;
  expect(photo.albumId).toBe(1);
  expect(photo.id).toBe(1);
  expect(photo.title).toBeDefined();
  expect(photo.url).toBeDefined();
  expect(photo.thumbnailUrl).toBeDefined();
});

// test with another website with typings

test("TypeScript interface with Dog API", async ({ page }) => {
  interface DogImage {
    message: string;
    status: string;
  }
  await page.goto("https://dog.ceo/api/breeds/image/random");
  const response = await page.evaluate(async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    return res.json();
  });

  const dogImage: DogImage = response;
  expect(dogImage.message).toBeDefined();
  expect(dogImage.status).toBe("success");
});

test("TypeScript interface with Cat API", async ({ page }) => {
  interface CatFact {
    fact: string;
    length: number;
  }
  await page.goto("https://catfact.ninja/fact");
    const response = await page.evaluate(async () => {
    const res = await fetch("https://catfact.ninja/fact");
    return res.json();
  });

  const catFact: CatFact = response;
  expect(catFact.fact).toBeDefined();
  expect(catFact.length).toBeDefined();
});
test("TypeScript interface with Advice API", async ({ page }) => {
  interface AdviceSlip {
    slip: {
      id: number;
      advice: string;
    };
  }
  await page.goto("https://api.adviceslip.com/advice");
  const response = await page.evaluate(async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    return res.json();
  });

  const adviceSlip: AdviceSlip = response;
  expect(adviceSlip.slip.id).toBeDefined();
  expect(adviceSlip.slip.advice).toBeDefined();
});

test("TypeScript interface with Chuck Norris API", async ({ page }) => {
  interface ChuckNorrisJoke {
    value: string;
  }
  await page.goto("https://api.chucknorris.io/jokes/random");
    const response = await page.evaluate(async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    return res.json();
    });

  const chuckNorrisJoke: ChuckNorrisJoke = response;
  expect(chuckNorrisJoke.value).toBeDefined();
});

test("TypeScript interface with Random User API", async ({ page }) => {
  interface RandomUser {
    results: {
      name: {
        first: string;
        last: string;
      };
      email: string;
      picture: {
        large: string;
      };
    }[];
  }
  await page.goto("https://randomuser.me/api");
  const response = await page.evaluate(async () => {
    const res = await fetch("https://randomuser.me/api");
    return res.json();
  });
    const randomUser: RandomUser = response;
  expect(randomUser.results[0].name.first).toBeDefined();
  expect(randomUser.results[0].name.last).toBeDefined();
  expect(randomUser.results[0].email).toBeDefined();
  expect(randomUser.results[0].picture.large).toBeDefined();
});
// don't use bored api, check with another one
test("TypeScript interface with Kanye Rest API", async ({ page }) => {
  interface KanyeQuote {
    quote: string;
  }
  await page.goto("https://api.kanye.rest/");
  const response = await page.evaluate(async () => {
    const res = await fetch("https://api.kanye.rest/");
    return res.json();
  });
    const kanyeQuote: KanyeQuote = response;
  expect(kanyeQuote.quote).toBeDefined();
});

test("TypeScript interface with Numbers API", async ({ page }) => {
    interface NumberFact {
    text: string;
    number: number;
    found: boolean;
    type: string;
  }
  await page.goto("http://numbersapi.com/42?json");
  const response = await page.evaluate(async () => {
    const res = await fetch("http://numbersapi.com/42?json");
    return res.json();
  });
    const numberFact: NumberFact = response;
  expect(numberFact.text).toBeDefined();
  expect(numberFact.number).toBe(42);
  expect(numberFact.found).toBeDefined();
  expect(numberFact.type).toBeDefined();
});