function countOnly (allItems, itemsToCount) {
  const result = {};
  for (let myKey in itemsToCount) { //loop object keys
    if (myKey) { //if object key is truthy
      for (let i of allItems) { //loop through array
        if (i === myKey) { //if value matches object key
          if (!result[myKey]) {
            result[myKey] = 0;
          }
          result[myKey] += 1; //add keyvalue to object and or increase by 1
        }
      }
    }

  }
  return result;
}

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
}


module.exports = countOnly;
