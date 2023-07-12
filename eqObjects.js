const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let objArray1 = Object.keys(object1); //define vars to collect obj keys as an array
  let objArray2 = Object.keys(object2);
  if(objArray1.length !== objArray2.length) {
    return false; //if objects do not have the same amount of keys rtn false
  }
  for(let key in object1) {
    if(Array.isArray(object1[key])) { //check for arrays
      if(!eqArrays(object1[key], object2[key])) { //if arrays aren't equal
        return false;
      }
    } else {
      if(object1[key] !== object2[key]){ //if keys aren't equal
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;