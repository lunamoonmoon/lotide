const takeUntil = function(array, callback) {
  let result = [];
  for(let i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      return result.slice(0, i);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

module.exports = takeUntil;
