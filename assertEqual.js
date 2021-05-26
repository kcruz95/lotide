/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log("🛑🛑🛑 Assertion Failed");
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

console.log(assertEqual);
*/

//🛑🛑🛑 Assertion Failed: "Lighthouse Labs" !== "Bootcamp"
//✅✅✅ Assertion Passed: 1 === 1

//Template Literal Answer

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
}

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

console.log(assertEqual);