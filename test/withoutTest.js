const assert  = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("return array without lighthouse", () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"])
  });
});