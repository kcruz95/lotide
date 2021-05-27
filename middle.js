// test/assertion fxns

const eqArrays = function(array1, array2) {
  let correct = true;
  if (array1.length !== array2.length) {
  return false;
  } for (let i = 0; i < array1.length; i++) {
  if (array1[i] !== array2[i]) {
  return false; 
  }
  } return true;
  };

  const assertArraysEqual = function(arrayOne, arrayTwo) {
    if (eqArrays ((arrayOne, arrayTwo))) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
    }
  }

  // actual fxn

  /* pseudo code
define a variable for the middle index/indices (by dividing the array in two)

write an irf/else statement for the following possibilities
- if an array has two indices or less
- if an array has more than two and has an odd number of indices (one middle)
- if an array has more than two and has an even number of indices (two middles)

  */

  const middle = function(array) {
    let midInd = Math.floor(array.length /2); //Math.floor rounds down, Math.ceil rounds up
    let result = [];
    if (array.length > 2) {
        // only two indices in the array [0] & [1] so no middle
        if ((array.length % 2)) {
        result.push(array[midInd]);
        // if the array is even so there is a middle index
      } else {
        result.push(array[midInd - 1], array[midInd]);
      }
    } return result;
  }

  // test code

console.log('first case', middle([2, 4]));
console.log('second case', middle([2, 4, 6]));
console.log('third case', middle([2, 4, 6, 8]));