const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("return position of the letter e", () => {
    assert.deepEqual(letterPositions("hello").e, [1])
  });
});

