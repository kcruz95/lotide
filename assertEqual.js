/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("βββ Assertion Passed");
  } else {
    console.log("πππ Assertion Failed");
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

console.log(assertEqual);
*/

//πππ Assertion Failed: "Lighthouse Labs" !== "Bootcamp"
//βββ Assertion Passed: 1 === 1

//Template Literal Answer

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`βββAssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`πππAssertion failed: ${actual} !== ${expected}`);
  }
}

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

console.log(assertEqual);

module.exports = assertEqual;