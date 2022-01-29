let rlSync = require('readline-sync');

// FUNCTION EXPRESSION

// let add = (a, b) => a + b;
// let getNumber = (text) => { //converts input string to Number
//   let input = rlSync.question(text);
//   return Number(input);
// };

// let number1 = getNumber("Enter a number: ");
// let number2 = getNumber("Enter another number: ");
// console.log(add(number1, number2));





// ARROW FUNCTION VERSION

let add = (a, b) => a + b;
let getNumber = (text) => Number(rlSync.question(text));

let number1 = getNumber("Enter a number: ");
let number2 = getNumber("Enter another number: ");
console.log(add(number1, number2));