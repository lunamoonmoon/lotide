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

module.exports = flatten;
