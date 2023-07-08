const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns empty array when only given 1 value", () => {
    assert(middle([1]), []);
  });
  it("returns empty when only 2 values", () => {
    assert(middle([1, 2]), []);
  });
  it("returns 2 for [1, 2, 3]", () => {
    assert(middle([1, 2, 3]), [2]);
  });
  it("return 3 for [1, 2, 3, 4, 5]", () => {
    assert(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("return 2 middle values, 2 and 3, when given an even array", () => {
    assert(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("return 3, 4 for [1, 2, 3, 4, 5, 6]", () => {
    assert(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
