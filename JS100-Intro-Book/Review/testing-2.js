let rlSync = require('readline-sync'); 

let numOne = rlSync.question("Type a number?\n");
let numTwo = rlSync.question("Type another number?\n");

console.log(numOne + numTwo);

function saySomething() {
  console.log('Have a blessed day.');
}

console.log(saySomething());