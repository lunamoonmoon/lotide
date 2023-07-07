const eqArrays = require('./eqArrays');

//function implementation
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
      console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);    
  }
};

module.exports = assertArraysEqual;
