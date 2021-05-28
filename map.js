const map = function(array, callback) {
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
}

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays ((arrayOne, arrayTwo))) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
}

const eqArrays = function(arrayOne, arrayTwo) {
  // let correct = true;
  if (arrayOne.length !== arrayTwo.length) {
  return false;
  } for (let i = 0; i < arrayOne.length; i++) {
  if (arrayOne[i] !== arrayTwo[i]) {
  return false; 
  }
  } return true;
  };

  // return correct;

  // example 1
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

// example 2
const array1 = [4, 8, 16, 32];
const map1 = array1.map(x => x / 2);
console.log(map1);