function eqArrays (oneArray, twoArray) { //create function
  if (oneArray.length !== twoArray.length) {
    return false //rtn false if arrays arent the same length
  } else {
    for (var i = 0; i < oneArray.length; i++) { //loop through each index in arrays
      if (oneArray[i] !== twoArray[i]) { //if index value of both arrays isnt equal
        return false //if arrays arent equal rtn false
      }
    }
    return true //if none of the above if conditions are met because the lengths and values are equal then rtn true
  }
};

module.exports = eqArrays;
