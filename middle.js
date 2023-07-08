function middle(array) {
  let results = [];
  let i = "";
  if(array.length > 2) {
    if(array.length % 2 === 0) {
      i = array.length / 2;
      results.push(i);
      i = array.length / 2 + 1;
      results.push(i);      
    } else {
      i = array.length / 2 + 0.5;
      results.push(i);
    }
  }
  console.log(results);
  return results;
}

module.exports = middle;
