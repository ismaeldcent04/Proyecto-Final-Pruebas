// const { Builder, By } = require("selenium-webdriver");
// const axios = require("axios");
import { Ensure, contain, equals } from "@serenity-js/assertions";
import { actorCalled, Cast, engage } from "@serenity-js/core";
import {
  CallAnApi,
  GetRequest,
  LastResponse,
  Send,
  PostRequest,
} from "@serenity-js/rest";
// const { expect } = require("chai");
// const should = require("chai").should();

describe("Get all users status", () => {
  const baseURL = "https://blog-api-mh0p.onrender.com/api/";

  before(() => {
    engage(
      Cast.where((actor) => actor.whoCan(CallAnApi.at(baseURL))) // 1) Add ability
    );
  });

  describe("status endpoint", () => {
    it("returns 200 OK when users endpoint is up", async () => {
      await actorCalled("Apisitt").attemptsTo(
        Send.a(GetRequest.to("users")), // 2) Send request
        Ensure.that(LastResponse.status(), equals(200)) // 3) Verify response
      );
    });
  });
});

describe("Get user by id status", () => {
  const baseURL = "https://blog-api-mh0p.onrender.com/api/";

  before(() => {
    engage(
      Cast.where((actor) => actor.whoCan(CallAnApi.at(baseURL))) // 1) Add ability
    );
  });

  describe("status endpoint", () => {
    it("returns the user specified by the id", async () => {
      await actorCalled("Apisitt").attemptsTo(
        Send.a(GetRequest.to("users/64e7c50889bf8a40e4bf036a")), // 2) Send request
        Ensure.that(LastResponse.status(), equals(200)), // 3) Verify response
        Ensure.that(
          LastResponse.body(),
          equals({
            username: "juandcent",
            name: "Juan Dicent",
            blogs: [],
            id: "64e7c50889bf8a40e4bf036a",
          })
        )
      );
    });
  });
});

describe("Create users status", () => {
  const baseURL = "https://blog-api-mh0p.onrender.com/api/";

  before(() => {
    engage(
      Cast.where((actor) => actor.whoCan(CallAnApi.at(baseURL))) // 1) Add ability
    );
  });

  describe("status endpoint", () => {
    it("returns 200 OK when user is created or registered", async () => {
      await actorCalled("Apisitt").attemptsTo(
        Send.a(
          PostRequest.to("users").with({
            username: "pedro0456",
            name: "pedro Dicent",
            password: "123456",
          })
        ),
        Ensure.that(LastResponse.status(), equals(201)),
        Ensure.that(LastResponse.body().name, equals("pedro Dicent"))
      );
    });
  });
});

describe("Get all blogs status", () => {
  const baseURL = "https://blog-api-mh0p.onrender.com/api/";

  before(() => {
    engage(
      Cast.where((actor) => actor.whoCan(CallAnApi.at(baseURL))) // 1) Add ability
    );
  });

  describe("status endpoint", () => {
    it("returns 200 OK when blogs endpoint is up", async () => {
      await actorCalled("Apisitt").attemptsTo(
        Send.a(GetRequest.to("users")), // 2) Send request
        Ensure.that(LastResponse.status(), equals(200)) // 3) Verify response
      );
    });
  });
});

describe("Get blogs by id status", () => {
  const baseURL = "https://blog-api-mh0p.onrender.com/api/";

  before(() => {
    engage(
      Cast.where((actor) => actor.whoCan(CallAnApi.at(baseURL))) // 1) Add ability
    );
  });

  describe("status endpoint", () => {
    it("returns the blog specified by the id", async () => {
      await actorCalled("Apisitt").attemptsTo(
        Send.a(GetRequest.to("blogs/64e8fd0bb5c403dc9c8fb4ac")), // 2) Send request
        Ensure.that(LastResponse.status(), equals(200)),
        Ensure.that(
          LastResponse.body(),
          equals({
            title: "Messu here we go",
            url: "fabrizioromano.com",
            likes: 9,
            user: "64e8f5bb8dce403b74804623",
            author: "Fabrizio Romano",
            id: "64e8fd0bb5c403dc9c8fb4ac",
          })
        ) // 3) Verify response
      );
    });
  });
});

describe("Log in status", () => {
  const baseURL = "https://blog-api-mh0p.onrender.com/api/";

  before(() => {
    engage(
      Cast.where((actor) => actor.whoCan(CallAnApi.at(baseURL))) // 1) Add ability
    );
  });

  describe("status endpoint", () => {
    it("returns 200 OK when user is authenticated or logged in", async () => {
      await actorCalled("Apisitt").attemptsTo(
        Send.a(
          PostRequest.to("login").with({
            username: "ismaeldcent04",
            password: "hulk2604",
          })
        ),
        Ensure.that(LastResponse.status(), equals(200))
      );
    });
  });
});
// describe("Login", () => {
//   it("should respond status ok=200", async () => {
//     const token = await axios.post(
//       "https://blog-api-mh0p.onrender.com/api/login",
//       {
//         username: "ismaeldcent04",
//         password: "hulk2604",
//       }
//     );
//     expect(token.status).to.equal(200);
//   });
// });

// describe("Get all users", () => {
//   it('should respond status ok=200"', async function () {
//     const driver = new Builder().forBrowser("chrome").build();
//     driver.get("https://blog-api-mh0p.onrender.com/api/users");
//   });
// });
// describe("Create users", () => {
//   it('should respond status ok=200"', async function () {
//     const driver = new Builder().forBrowser("chrome").build();
//     driver.get("https://blog-api-mh0p.onrender.com/api/blogs");
//   });
// });

// describe("Get all blogs", () => {
//   it('should respond status ok=200"', async function () {
//     const driver = new Builder().forBrowser("chrome").build();
//     driver.get("https://blog-api-mh0p.onrender.com/api/blogs");
//   });
// });

// describe("Create blogs", () => {
//   it('should respond status ok=200"', async function () {
//     const driver = new Builder().forBrowser("chrome").build();
//     driver.get("https://blog-api-mh0p.onrender.com/api/blogs");
//   });
// });

// describe("Update blogs", () => {
//   it('should respond status ok=200"', async function () {
//     const driver = new Builder().forBrowser("chrome").build();
//     driver.get("https://blog-api-mh0p.onrender.com/api/blogs");
//   });
// });

// async function runWithDriver(test) {
//   let driver = await new Builder().forBrowser("chrome").build();

//   try {
//     await test(driver);
//   } finally {
//     await driver.quit();
//   }
// }
