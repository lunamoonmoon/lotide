function eqArrays(oneArray, twoArray) { //create function
  if(oneArray.length !== twoArray.length) { //if array lengths are unequal
    return false
  } else {
    for(var i = 0; i < oneArray.length; i++) { //loop through each index in arrays
      if(oneArray[i] !== twoArray[i]) { //if index value of both arrays isnt equal
        return false
      }
    }
  }
};

//function implementation
const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);    
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let objArray1 = Object.keys(object1); //define vars to collect obj keys as an array
  let objArray2 = Object.keys(object2);
  if(objArray1.length !== objArray2.length) {
    return false; //if objects do not have the same amount of keys rtn false
  }
  for(let key in object1) {
    if(object1[key] !== object2[key]){
      return false;
    }
  }
  return true;
};

//rtn true when number of keys same and key:values pairs match in both objs

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const testObjects = eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(testObjects, true);

const longSleeveShirtObject= { size: "medium", sleeveLength: "long" };
const testObjects2 = eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(testObjects2, true);
