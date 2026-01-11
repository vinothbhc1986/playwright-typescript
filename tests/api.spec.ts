import test, { expect } from "@playwright/test";

test("TypeScript type assertion with Comment", async ({ page }) => {
  type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  };

  const response = await page.request.get("https://jsonplaceholder.typicode.com/comments/1");

  const comment: Comment = await response.json();
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

  const response = await page.request.get("https://jsonplaceholder.typicode.com/albums/1");
  const album: Album = await response.json();
  expect(album.userId).toBe(1);
  expect(album.id).toBe(1);
  expect(album.title).toBeDefined();
});

test("TypeScript type assertion with Post", async ({ page }) => {
  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  const response = await page.request.get("https://jsonplaceholder.typicode.com/posts/1");
  const post: Post = await response.json();
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

  const response = await page.request.get("https://jsonplaceholder.typicode.com/photos/1")
  const photo: Photo = await response.json();
  expect(photo.albumId).toBe(1);
  expect(photo.id).toBe(1);
  expect(photo.title).toBeDefined();
  expect(photo.url).toBeDefined();
  expect(photo.thumbnailUrl).toBeDefined();
});

test("TypeScript interface with Dog API", async ({ page }) => {
  interface DogImage {
    message: string;
    status: string;
  }
  const response = await page.request.get("https://dog.ceo/api/breeds/image/random");
  const dogImage: DogImage = await response.json();
  expect(dogImage.message).toBeDefined();
  expect(dogImage.status).toBe("success");
});

test("TypeScript interface with Cat API", async ({ page }) => {
  interface CatFact {
    fact: string;
    length: number;
  }
  await page.goto("https://catfact.ninja/fact");
    const response = await page.request.get("https://catfact.ninja/fact");
  const catFact: CatFact = await response.json();
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
  const response = await page.request.get("https://api.adviceslip.com/advice");
  const adviceSlip: AdviceSlip = await response.json();
  expect(adviceSlip.slip.id).toBeDefined();
  expect(adviceSlip.slip.advice).toBeDefined();
});

test("TypeScript interface with Chuck Norris API", async ({ page }) => {
  interface ChuckNorrisJoke {
    value: string;
  }
    const response = await page.request.get("https://api.chucknorris.io/jokes/random");
  const chuckNorrisJoke: ChuckNorrisJoke = await response.json();
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
  const response = await page.request.get("https://randomuser.me/api");
    const randomUser: RandomUser = await response.json();
  expect(randomUser.results[0].name.first).toBeDefined();
  expect(randomUser.results[0].name.last).toBeDefined();
  expect(randomUser.results[0].email).toBeDefined();
  expect(randomUser.results[0].picture.large).toBeDefined();
});

test("TypeScript interface with Kanye Rest API", async ({ page }) => {
  interface KanyeQuote {
    quote: string;
  }
  const response = await page.request.get("https://api.kanye.rest/");
    const kanyeQuote: KanyeQuote = await response.json();
  expect(kanyeQuote.quote).toBeDefined();
});

test("TypeScript interface with Ron Swanson Quotes API", async ({ page }) => {
  interface RonSwansonQuote {
       array: string[];
    }
  const resp = await page.request.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes"); 
  const response = await resp.json();
 
    const ronSwansonQuote: RonSwansonQuote =  { array: response };
  expect(ronSwansonQuote.array[0]).toBeDefined();
          
  });


test("TypeScript interface with GitHub User API", async ({ page }) => {
  interface GitHubUser {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    type: string;
  }

    const resp = await page.request.get("https://api.github.com/users/octocat");
    const response = await resp.json();

  const user: GitHubUser = response;
  expect(user.login).toBe("octocat");
  expect(user.id).toBeDefined();
  expect(user.avatar_url).toBeDefined();
  expect(user.html_url).toContain("github.com");
  expect(user.type).toBe("User");
});

test("TypeScript interface with SpaceX latest launch", async ({ page }) => {
  interface Launch {
    name: string;
    date_utc: string;
    success: boolean | null;
  }

  const resp = await page.request.get("https://api.spacexdata.com/v4/launches/latest");
  const response = await resp.json();

  const launch: Launch = response;
  expect(launch.name).toBeDefined();
  expect(launch.date_utc).toMatch(/\d{4}-\d{2}-\d{2}/);
  expect(launch.success === null || typeof launch.success === "boolean").toBeTruthy();
});

test("TypeScript interface with PokeAPI - ditto", async ({ page }) => {
  interface Pokemon {
    name: string;
    id: number;
    sprites: { front_default: string | null };
  }

  const resp = await page.request.get("https://pokeapi.co/api/v2/pokemon/ditto");
  const response = await resp.json();

  const poke: Pokemon = response;
  expect(poke.name).toBe("ditto");
  expect(poke.id).toBeDefined();
  expect(poke.sprites.front_default).toBeDefined();
});

test("TypeScript interface with Open Library work", async ({ page }) => {
  interface Work {
    location: string;
    revision: number;
  }

  const res = await page.request.get("https://openlibrary.org/works/OL45883W.json");
  const work: Work = await res.json();
  expect(work.location).toBeDefined();
});

test("Playwright fetch POST to httpbin", async ({ page }) => {
  const resp = await page.request.post("https://httpbin.org/anything", {
    data: { hello: "world" },
  });

   const response = await resp.json();

  expect(response.json).toEqual({ hello: "world" });
  expect(response.method).toBe("POST");
});
