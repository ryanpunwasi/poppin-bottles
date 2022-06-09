const chai = require("chai").assert;
const { assert } = require("chai");
const { calculateBottles } = require("../bottles");

describe("calculateBottles", () => {
  it("should return 55 with input 30", () => {
    const actual = calculateBottles(30);
    assert.equal(actual, 55);
  });

  it("should return 0 with input 0", () => {
    const actual = calculateBottles(0);
    assert.equal(actual, 0);
  });
});