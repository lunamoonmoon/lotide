function without(source, itemsToRemove) {
  const withoutArray = source; //declare new array
  for(let i = 0; i < withoutArray.length; i++) { //loop through list
    for(let j = 0; j < itemsToRemove.length; j++) { //loop array input of items to remove
      if(withoutArray[i] === itemsToRemove[j]) {
        withoutArray.splice(i, 1); //remove item as per input
      }
    }
  }
  return withoutArray; //return new array without specified items
}

module.exports = without;
