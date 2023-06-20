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

//function implementation
const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);    
}
};

assertArraysEqual(["Lighthouse Labs", "Bootcamp"], ["Lighthouse Labs", "Bootcamp"]);


function middle(array) {
  let results = [];
  let i = "";
  if(array.length > 3) {
    if(array.length % 2 === 0) {
      i = array.length / 2;
      results.push(i);
      i = array.length / 2 + 1;
      results.push(i);      
    } else {
      i = array.length / 2 + 0.5;
      results.push(i);
    }
  }
  console.log(results);
  return results;
}
