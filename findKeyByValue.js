//function implementation
const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);    
}
};

function findKeyByValue(object, value) {
  for(let key in object) { //iterate through object key:values
    if(object[key] === value) {//if value input matches a keys value return the key
      return key;
    }
  }
}


//test
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

