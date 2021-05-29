const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArray((arrayOne, arrayTwo))) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  } return true;
};

const without = function(source, itemsToRemove) {
let returnArray= [];
  for (i =0; i < source.length; i = i + 1) {
    let element = false;
    for (j = 0; j <itemsToRemove.length; j = j + 1) {
      if (source[1] === itemsToRemove[j]) {
        element = true;
      }
    } if (element === false) {
      returnArray.push(source[i]);
    }
  } return returnArray;
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);