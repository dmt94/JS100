let rlSync = require('readline-sync');
/*
The greetingMessage variable is a global variable since 
it isn't part of a function definition.
Its declaration is at the global level, so its scope is GLOBAL.
*/
let greetingMessage = "Good Morning!";

function greetPeople() {
  console.log(greetingMessage);
}

greetPeople();

// FUNCTION ARGUMENTS

function userName() {
  let name = rlSync.question("What is your name?\n");
  return name
}

function greeting() {
  let greet = `Good morning`;
  return greet
}

function newGreeting(greeting, name) {
  let theGreeting = `${greeting}, ${name}!`;
  console.log(theGreeting);
}

//function composition
newGreeting(greeting(), userName());

