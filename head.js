//copy of assertEqual function
const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);    
}
};

const head = function(array) {
  let first = array[0];
  console.log(first);
  return(first);
};

