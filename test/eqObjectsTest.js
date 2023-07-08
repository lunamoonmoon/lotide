const assert    = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("return true when both objects have the same key values", () => {
    assert.deepEqual(eqObjects({ color: "red", size: "medium" }, { size: "medium", color: "red" }), true)
  });
  it("return false objects non matching key values", () => {
    assert.deepEqual(eqObjects({ size: "medium", sleeveLength: "long" }, { color: "red", size: "medium" }), false)
  });
});
