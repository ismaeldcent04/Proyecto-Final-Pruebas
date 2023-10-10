const { Builder, By } = require("selenium-webdriver");
const axios = require("axios");
const { expect } = require("chai");
const should = require("chai").should();
const driver = await new Builder().forBrowser("chrome").build();

describe("should", async () => {
  const token = await axios.post(
    "https://blog-api-mh0p.onrender.com/api/login",
    {
      username: "ismaeldcent04",
      password: "hulk2604",
    }
  );

  expect(token.status).to.be(200);
});
