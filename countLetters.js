//function implementation
const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);    
}
};

function countLetters(sentence) {
  let count = {}; //declare object
  sentence = sentence.toLowerCase();
  for(let i of sentence) { //iterate through sentence input
    if(count.hasOwnProperty(i) && i != " ") {
      count[i]++;
    } else if(i != " ") {
      count[i] = 1;
    }
  }
  console.log(count)
  return count; //return count object of each letter and how many times it appears in input sentence
}

//test
console.log(countLetters("Lil Labs"))
