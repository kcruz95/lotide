const assertEqual = require('./assertEqual');

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } for (let i = 0; i < arrayOne.length; i = i + 1) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  } return true;
};

/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
}
*/

/*
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

  return correct;
  */


module.exports = assertEqual;