function findKeyByValue(object, value) {
  for(let key in object) { //iterate through object key:values
    if(object[key] === value) {//if value input matches a keys value return the key
      return key;
    }
  }
}

module.exports = findKeyByValue;
