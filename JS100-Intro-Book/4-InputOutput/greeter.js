let rlSync = require('readline-sync');
// let firstName = rlSync.question('What is your first name?\n');
// let lastName = rlSync.question('What is your last name?\n');



// console.log(`Hello, ${firstName} ${lastName}!`)

//INSTRUCTION
let getName = (question) => rlSync.question(question);

let firstName = getName('What is your first name?\n');
let lastName = getName('What is your last name?\n');
let theGreeting = `Hello ${firstName} ${lastName}!\n`;
console.log(theGreeting);


//MY VERSION
let fullName = () => {
  let firstName = rlSync.question('What is your first name?\n');
  let lastName = rlSync.question('What is your last name?\n');
  return `${firstName} ${lastName}`;
}

let greeting = () => {
  let phrase = `Hola, `;
  console.log(phrase + fullName() + '!');
}

greeting();




//SHORT VERSION
let get = (question) => rlSync.question(question);
let userFullName = () => {
  let firstName = get('What is your first name?\n');
  let lastName = get('What is your last name?\n');
  return `${firstName} ${lastName}`
}

console.log(`Hello, ${userFullName()}`);

