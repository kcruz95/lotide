const assertEqual = require('./assertEqual');
/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};
*/

const findKeyByValue = function(obj, val) { //scans the obj & returns the 1st key w/ a value
  //const keyArr = Object.keys(obj); //break obj into keys and values (key:value)
  for (let key of keyArr) {
    if (key === val)
      return key;
  }
  return false;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = assertEqual;