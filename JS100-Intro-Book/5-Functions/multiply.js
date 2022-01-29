let rlSync = require('readline-sync');

function multiply() {
  let firstNumber = Number(rlSync.question(`Enter the first number:\n`));
  let secondNumber = Number(rlSync.question(`Enter the second number:\n`));
  return `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`;
}

console.log(multiply());