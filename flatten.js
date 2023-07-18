function flatten(array) {
  let flatArray = []; //new var
  for (let i = 0; i < array.length; i++) { //loop array
    if (!Array.isArray(array[i])) { //if index of array is not an array
      flatArray.push(array[i]); //if index is flat push to flatArray
    } else {
      flatArray = flatArray.concat(flatten(array[i])); //call own function for recursion in case of multiple nested arrays then add to flatarray
    }
  }
  return flatArray;
}

module.exports = flatten;
