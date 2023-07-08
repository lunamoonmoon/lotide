const assert    = require('chai').assert;
const countOnly = require('../countOnly');

//test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#eqObjects", () => {
  it("return 1 count of the name Jason", () => {
    assert.strictEqual(result1["Jason"], 1)
  })
  it("return undefined as array does not contain this name", () => {
    assert.strictEqual(result1["Karima"], undefined)
  })
  it("return2 counts of the name Fang", () => {
    assert.strictEqual(result1["Fang"], 2)
  })
});
