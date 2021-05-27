const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
}

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

//pseudocode
/*
define a countOnly fxn
the fxn should ONLY count truthy values
use a for..of loop
use irf/else
countOnly should only return an object to represent stats
*/

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    //console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  } return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false
});

  /* for (const item of allItems) {
    if (allItems[item]) {
      if (results[item]) { //if an item exists
        results[item] += 1;
      } else { //if not
        return results[];
        results[item] === ;
      }
    }
  }*/

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);