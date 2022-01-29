// console.log("hello");
// console.log("hi");
// console.log("how do you do");
// console.log("Quite all right");

let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n");

function say(words) {
  console.log(`${words}, ${name}!`);
}

say("Hello");
say("Hi");
say("How are you");
say("I'm fine");