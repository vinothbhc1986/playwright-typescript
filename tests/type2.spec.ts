type LoginResponse = {
  token: string;
};

import { expect, test } from "@playwright/test";

test('API test with TS type', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/login', {
    data: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }
  });

  const body: LoginResponse = await response.json();
  expect(body.token).toBeDefined();
});
