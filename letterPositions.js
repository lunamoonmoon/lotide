const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  sentence = sentence.toLowerCase();
  for(let i = 0; i < sentence.length; i++) { //iterate through sentence input
    if(results.hasOwnProperty(sentence[i]) && sentence[i] != " ") { //if key already exists and isn't a space
      results[sentence[i]].push(i); //assign index as value to key
    } else if(sentence[i ]!= " ") {
      results[sentence[i]] = [i]; //assign index as value to key
    }
  }
  return results;
};

module.exports = letterPositions;
