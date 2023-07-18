function without(source, itemsToRemove) {
  const withoutArray = source.filter((element) => { //new var w callback function
    return !itemsToRemove.includes(element); //filter so only elements not listed in itemsToRemove is in withoutArray
  });
  return withoutArray //return new array w specified items
}


module.exports = without;
