const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);    
  }
};

function eqArrays(oneArray, twoArray) { //create function
  if(oneArray.length !== twoArray.length) { //if array lengths are unequal
    console.log(`🛑🛑🛑 Assertion Failed: ${oneArray} !== ${twoArray}`); //fail arrays are not equal
    return false
  } else {
    for(let i = 0; i < oneArray.length; i++) { //loop through each index in arrays
      if(oneArray[i] !== twoArray[i]) { //if index value of both arrays isnt equal
        console.log(`🛑🛑🛑 Assertion Failed: ${oneArray} !== ${twoArray}`); //fail arrays are not equal
        return false
      }
    }
    console.log(`✅✅✅ Assertion Passed: ${oneArray} === ${twoArray}`); //if none of the above if conditions are met because the lengths and values are equal then pass
    return true
  }
}


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  sentence = sentence.toLowerCase();
  for(let i = 0; i < sentence.length; i++) { //iterate through sentence input
    if(results.hasOwnProperty(sentence[i]) && sentence[i] != " ") { //if key already exists and isn't a space
      results[sentence[i]].push(i); //assign index as value to key
    } else if(sentence[i ]!= " ") {
      results[sentence[i]] = [i]; //assign index as value to key
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1])
