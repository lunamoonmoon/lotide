const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns Labs for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns Labs when given 3 strings", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns empty array when array only has one index", () => {
    assert.deepEqual(tail(["pikachu"]), []);
  });
    it("returns empty array when array is empty", () => {
    assert.deepEqual(tail([]), []);
  });
});
