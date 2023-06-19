//function implementation
const assertEqual = function(actual, expected) {
  if(actual === expected) {
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

function flatten(array) {
  let flatArray = [];
  for(let i = 0; i < array.length; i++) {
    if(Array.isArray(array[i]) === true) {
      let x = array[i];
      for(let j = 0; j < x.length;j++) {
        flatArray.push(array[i][j]);
      }
    } else {
      flatArray.push(array[i]);
    }
  }
  console.log(flatArray);
  return flatArray;
}

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
