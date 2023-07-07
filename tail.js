const tail = function(array) {
  let rest = []; //define new array
  for (let i = 1; i < array.length; i++) { //loops through array input starting at second value
    rest.push(array[i]); //pushes to new array
  }
  return rest;
};

module.exports = tail;
