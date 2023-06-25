function eqArrays(oneArray, twoArray) { //create function
  if(oneArray.length !== twoArray.length) { //if array lengths are unequal
    console.log(`🛑🛑🛑 Assertion Failed: ${oneArray} !== ${twoArray}`); //fail arrays are not equal
    return false
  } else {
    for(var i = 0; i < oneArray.length; i++) { //loop through each index in arrays
      if(oneArray[i] !== twoArray[i]) { //if index value of both arrays isnt equal
        console.log(`🛑🛑🛑 Assertion Failed: ${oneArray} !== ${twoArray}`); //fail arrays are not equal
        return false
      }
    }
    console.log(`✅✅✅ Assertion Passed: ${oneArray} === ${twoArray}`); //if none of the above if conditions are met because the lengths and values are equal then pass
    return true
  }
}

const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);    
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

//test
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

