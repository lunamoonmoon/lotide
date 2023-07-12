function without(source, itemsToRemove) {
  let withoutArray = []; //declare new array
  for(let i = 0; i < source.length; i++) { //loop through list
    withoutArray.push(source[i]); //push source value to new array created
    for(let j = 0; j < itemsToRemove.length; j++) { //loop array input of items to remove
      if(source[i] === itemsToRemove[j]) {
        withoutArray.splice(i, 1); //remove item as per input
      }
    }
  }
  return withoutArray; //return new array without specified items
};

module.exports = without;
