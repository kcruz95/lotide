const assertEqual = require('./assertEqual');

/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
}
*/

const findKey = function(object, callback) { //scans the object & callback
  for (key in object) { //loops through obj properties for a key
    if (callback(object[key])) { // if the object array has a key, the key (object[key]) will be called back
      return true;
    }
  } return undefined; //else if no key is found, the fxn will return 'undefined'
};

let callback = findKey("noma");
if (callback) {
  console.log(`${findKey} found!`)
} else {
  console.log(undefined)
}
console.log(callback);

findKey({
  "Blue Hill": { stars: 1 }, //nested objects
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

//rohit mentor
/*
const findKey = function(object, callback) { //scans the object & callback
  for (key in object) { //loops through obj properties for a key
    if (key === object) { // if the object array has a key, the key (object[key]) will be called back
      return true;
    }
  } return undefined; //else if no key is found, the fxn will return 'undefined'
};

let callback = findKey("noma");
if (callback) {
  console.log(`${findKey} found!`)
} else {
  console.log(undefined)
}
console.log(callback);

findKey({
  "Blue Hill": { stars: 1 }, //nested objects
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
*/


//console.log(findKey);

//old code
//const findKey = function(object, callback) { //scans the object & callback 
  // for (key in object) { //loops through obj properties for a key
  //   if (callback(object[key])) { // if the object array has a key, the key (object[key]) will be called back
  //     return key;
  //   }
  // } return undefined; //else if no key is found, the fxn will return 'undefined'

  module.export = assertEqual;