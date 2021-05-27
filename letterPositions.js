const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
}

//pseudocode
/*
define a letterPositions variable with the funtion parameter(sentence)

declare a variable called results with an empty array

run a basic for C loop to calculate the array's length

use an if statement to push the results

return the results

log to the console the results when the string "hello" is run through it
*/

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i = i + 1) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [i];
    } else {
      result[sentence[i]].push(i);
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);