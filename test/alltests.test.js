const { Builder, By } = require("selenium-webdriver");
const axios = require("axios");
const { expect } = require("chai");
const should = require("chai").should();

describe("Login should work", () => {
  it("should respond status ok=200", async () => {
    const token = await axios.post(
      "https://blog-api-mh0p.onrender.com/api/login",
      {
        username: "ismaeldcent04",
        password: "hulk2604",
      }
    );
    expect(token.status).to.equal(200);
  });
});

describe("Get all users should work", () => {
  it('should respond status ok=200"', async function () {
    const driver = new Builder().forBrowser("chrome").build();
    driver.get("https://blog-api-mh0p.onrender.com/api/users");
  });
});

describe("Get all blogs", () => {
  it('should respond status ok=200"', async function () {
    const driver = new Builder().forBrowser("chrome").build();
    driver.get("https://blog-api-mh0p.onrender.com/api/blogs");
  });
});

// async function runWithDriver(test) {
//   let driver = await new Builder().forBrowser("chrome").build();

//   try {
//     await test(driver);
//   } finally {
//     await driver.quit();
//   }
// }
