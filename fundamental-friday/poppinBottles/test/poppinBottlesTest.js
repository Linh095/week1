const assert = require("chai").assert;
const poppingBottles = require("../poppingBottles");

describe("Poppin Bottles", function() {
  it ("should return a total of 15 bottles with an investment of $10", function() {
    const totalBottles = 15;
    const result = poppingBottles(5, 5, 5);
    assert.isTrue(result);
  });

  it ("should return a total of 35 bottles with an investment of $20", function() {
    const totalBottles = 35;
    const result = poppingBottles(10, 10, 10);
    assert.isTrue(result);
  });

  it ("should return a total of 55 bottles with an investment of $30", function() {
    const totalBottles = 55;
    const result = poppingBottles(15, 15, 15);
    assert.isTrue(result);
  });

  it ("should return a total of 75 bottles with an investment of $40", function() {
    const totalBottles = 75;
    const result = poppingBottles(20, 20, 20);
    assert.isTrue(result);
  });
});