const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) { //both arguements are the same
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
}

//sample test code
// const obj1 = {
//   value1: ['purple', 'green', 'yellow'],
//   value2: ['blue', 'pink', 'orange']
// };

// const obj2 = {
//   value1: ['purple', 'green', 'yellow'],
//   value2: ['blue', 'pink', 'orange']
// };


console.log(`Example label: ${inspect(actual)}`);

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArray((arrayOne, arrayTwo))) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const obj1 = Object.keys(object1); 
  const obj2 = Object.keys(object2);
  //console.log(obj1);
  //console.log(obj2);
  if (obj1.length !== obj2.length) { //if not the same
    return false;
  }
  for (let theKey of obj1) {
    //console.log(theKey);
    //console.log(object1[theKey]);
    //console.log(object2[theKey]);
    if (Array.isArray)(object1[theKey]); //if object1 is an array
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