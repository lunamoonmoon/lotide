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


const takeUntil = function(array, callback) {
  let result = [];
  for(let i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      return result.slice(0, i);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}


//test
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

