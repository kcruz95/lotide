const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(tail(['5']), '5'); 
  });
});

// const assertEqual = require('./assertEqual');
// // const assertEqual = function(actual, expected) {
// //   if (actual === expected) {
// //     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
// //   } else {
// //     console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
// //   }
// // };

// const tail = (array) => array.slice(1);


// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]);

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// module.exports = assertEqual;