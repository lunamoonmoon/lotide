const assertObjectsEqual = require("../assertObjectsEqual");
const eqObjects = require('../eqObjects');

const shirtObject = { color: "red", size: "medium" };
const longSleeveShirtObject= { size: "medium", sleeveLength: "long" };
const testObjects2 = eqObjects(shirtObject , longSleeveShirtObject); // => false
assertObjectsEqual(testObjects2, true);
