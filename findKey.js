function findKey(object, callback) {
  for(let key in object) { //iterate through object key:values
    if(callback(object[key])) {//if callback is true
      return key;
    }
  }
}

module.exports = findKey;
