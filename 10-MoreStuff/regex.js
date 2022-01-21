let rlSync = require('readline-sync');
/* regular expression -- regex :
 sequence of characters that you can use 
 to test whether a string matches a given pattern


 RegExp objects can invoke METHODS
 the method [test] returns a boolean value
 based on whether a string argument matches the regex
*/

//determine whether string "bobcat" containts letter "o"
let one = /o/.test('bobcat') 

//determine whether string "bobcat" containts letter "l"
let two = /l/.test('bobcat') 

console.log(one); //true
console.log(two); //false

/* You can use these boolean values to perform some operation 
depending on whether a match occurs:
*/

//TEST
if (/b/.test('bobcat')) {
  // this branch executes since 'b' is in 'bobcat'
  console.log("Yes, it contains the letter 'b'");
} else {
  // this branch does not execute since 'bobcat' contains 'b'
  console.log("No, it doesn't contain the letter 'b'");
}

//MATCH
/*
Boolean values sometimes don't provide enough information about a match. 
That's when the [match] method for strings comes in handy. 
This method takes a regex as the argument 
and returns an array that describes the match.
*/

let bobCat1 = "bobcat".match(/x/)         // no match => "null"
let bobCat2 = "bobcat".match(/[bct]/g)    // Global match
let bobCat3 = "bobcat".match(/b((o)b)/)   // singular match with groups


console.log(bobCat1); // > null : no match occurs
console.log(bobCat2); // > [ 'b', 'b', 'c', 't' ]
console.log(bobCat3); // > [ 'bob', 'ob', 'o', index: 0, input: 'bobcat', groups: undefined ]


//regex test to check
//letterCheck
function letterCheck() {
  if (/e/.test("gene")) {
    console.log('letter found')
  }
  else {
    console.log('letter not found')
  }
}

letterCheck();


//using /g with test >> confusing
let regex = /e/g;
let str = "eel";
console.log(regex.test(str)); // > true
console.log(regex.test(str)); // > true
console.log(regex.test(str)); // > false

