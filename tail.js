//copy of assertEqual function
const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);    
}
};
const tail = function(array) {
  let rest = [];
  for(let i = 1; i < array.length; i++) { //loops through array input starting at second value
    rest.push(array[i]); //pushes to new array
  }
  console.log(rest);
  return(rest);
};

