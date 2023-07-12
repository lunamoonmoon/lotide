function countOnly(allItems, itemsToCount) {
  const results = {};
  for (let item of allItems) { //loop array of items
    if (itemsToCount[item]) {  //if object key:value is truethy
      if (results[item]) { //if this has been added to results array
        results[item] += 1; //increment
      } else {
        results[item] = 1; //if not add key:value to object with initial value of 1
      }
    }
  }
  return results;
};

module.exports = countOnly;
