const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
}

const countLetters = function (string) { //return an obj w/out tallying spaces
    const letterCount = {};
    for (let letter of string) {
      if (letter.match(/[a-z]/i)) { // if (letter !== " ") {//filtre out any spaces occurring in string
        if (letterCount[letter]) { //if the letter is counted, add one to the tally
          letterCount[letter] += 1;
        } else { //if the letter doesn't exist in the letterCount obj
          letterCount[letter] = 1;
        }
      }
    } return letterCount;
}

//test
// assertEqual(countLetters('Lighthouse in the house') ['l']);
// assertEqual(countLetters('Lighthouse in the house') ['h']);
// assertEqual(countLetters('Lighthouse in the house') ['e']);

console.log(countLetters('Lighthouse in the house'));
console.log(assertEqual(countLetters('Lighthouse in the house').L, 1));