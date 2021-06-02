const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};


//The function should return as TRUE if BOTH objects have identical keys & values (key:value)

// const eqArrays = require('./eqArrays'); is the non eS6 version of ln 13
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  } return true;
};
*/

//import eqArrays from './eqArrays' is the non eS6 version of ln 13 but still unsure of how to use

const eqObjects = function(object1, object2) {
  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);
  console.log(obj1);
  console.log(obj2);
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (let theKey of obj1) {
    console.log(theKey);
    console.log(object1[theKey]);
    console.log(object2[theKey]);
    if (Array.isArray)(object1[theKey]);
    console.log('hello');
  const results = eqArrays(object1[theKey], object2[theKey]);
    if (results !== true) {
        return false;
    }
  } if (object1[theKey] !== object2[theKey]) {
    return false;
  }
}; //console.log(Array.isArray(object1[theKey]));
return true;

//FXN IMPLEMENTTION

const assertObjectsEqual = function(actual, expected) {
  
}

/*
const eqArrays = require('./eqArrays');//hoisted. Use to refer to ln 16 & ln 17 

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) { //**Object.keys() returns an array of an object's keys (refer to key:value) in the same order as a loop**
    for (key in object1) { //for...in...loops loop the properties of an object
      if(Array.isArray(object1[key])) {//Array.isArray method determines if the passed value is an Array
        if (!(eqArrays(object1[key], object2[key])))
        return false;
      }
      else if ((typeof object1[key] === 'object') && (typeof object2[key] === 'object')) {
        if (!(eqObjects(object1[key], object2[key])))
        return false;
      } else if (object1[key] !== object2[key]){ //both are NOT identical
      } return false;
    } return true;
  } return false;
};

*/

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

module.exports = assertEqual;
module.exports = eqArrays;