const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true when passed 2 of the same arrays", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
  });
  it("returns false when array is not in the same order", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
  });
  it("returns true when arrays contain matching string values", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
  });
  it("returns false when arrays are not strictly equal", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 
  });
});
