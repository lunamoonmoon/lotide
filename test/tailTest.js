const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns Labs for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert(tail(["Hello", "Lighthouse", "Labs"]), "Labs");
  });
  it("returns Labs when given 3 strings", () => {
    assert(tail(["Yo Yo", "Lighthouse", "Labs"]), "Labs");
  });
  it("returns empty array when array only has one index", () => {
    assert(tail(["pikachu"]), []);
  });
    it("returns empty array when array is empty", () => {
    assert(tail([]), []);
  });
});
