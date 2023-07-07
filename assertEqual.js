//function implementation
//function compare actual value to expected value based on input
const assertEqual = function(actual, expected) {
  if (actual === expected) { //if values are a strict match log pass
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else { //if values are not strictly equal then log fail
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
