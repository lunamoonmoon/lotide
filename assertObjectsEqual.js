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


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(actual == expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);    
}
};


//test
const shirtObject = { color: "red", size: "medium" };
const longSleeveShirtObject= { size: "medium", sleeveLength: "long" };
const testObjects2 = eqObjects(shirtObject , longSleeveShirtObject); // => false
assertObjectsEqual(testObjects2, true);

