const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArray((arrayOne, arrayTwo))) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

/* old code
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays ((arrayOne, arrayTwo))) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
}
*/