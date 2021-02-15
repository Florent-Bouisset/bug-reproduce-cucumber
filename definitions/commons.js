const Then = require("@cucumber/cucumber").Then;

Then("I am lucky", async function () {
  const randomNumber = Math.random();
  if (randomNumber < 0.3) {
    // I am lucky
  } else {
    throw new Error("You are not lucky this time");
  }
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

Then("I run a step of my test", async function () {
  await sleep(500);
});
