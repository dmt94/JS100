/*
1. Greet 1
How can we alter the function definition of greet so that 
the parameter greeting is assigned a default value of 'Hello' 
when no argument is passed to the function invocation?
*/
function greet(greeting = 'hello') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!
//////////////////////////////////////////////////////////////////
/*
2. Greet 2
Change the function greet from the previous exercise, 
so that it takes two arguments: a greeting 
with 'Hello' as default value, 
and a recipient with 'world' as default value. 
The behavior should then be as follows:

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!
*/

function newGreet(greet = 'Hello', recipient = 'world') {
  return `${greet} ${recipient}!!`
}

console.log(newGreet())
console.log(newGreet('Salutations'));
console.log(newGreet('Good morning', 'Launch School'));
//////////////////////////////////////////////////////////////////
/*
3. Greet 3
Now we are going to outsource the greeting and recipient to functions. 
Change the function greet from the previous exercise, 
so that it doesn't take any arguments, and 
instead calls the functions greeting and recipient defined below.
*/
function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet3() {
  return `${greeting()} ${recipient()}`;
}

console.log(greet3());
//////////////////////////////////////////////////////////////////
/*
4. Calculate BMI
Create a function that calculates a person's body mass index (BMI). 
It should take two parameters: someone's height (in cm) and weight (in kg). 
The formula for calculating the BMI is as follows:

bmi = weightInKilograms / heightInMeters**2;

Note that formula requires a height in meters, 
but the function takes the height in centimeters 
(1 meter is equivalent to 100 centimeters).

Return the result as a string rounded to two decimals. For example:

calculateBMI(180, 80); // "24.69"
*/

function bmi(height, weight) { //height is in cm and weight is in kg
  let mHeight = height / 100;
  let bmiCalc = weight / (mHeight ** 2);

  return bmiCalc.toFixed(2);
}

console.log(bmi(180, 80));
//////////////////////////////////////////////////////////////////
/*
5. Calculate Cat Age
Implement a function catAge that takes a number of 
human years as input and converts them into cat years. 
Cat years are calculated as follows:
    - The first human year corresponds to 15 cat years.
    - The second human year corresponds to 9 cat years.
    - Every subsequent human year corresponds to 4 cat years.
*/

function catAge(humanAge) {
  // 1 = 15 years 
  // 2 = 9 cat years 
  // each after = 4 cat years
  let catYears = 15;
  if (isNaN(humanAge)) {
    return `Input a number.`
  }
  else if (humanAge === 0) {
    return `You are 0 years old in cat years!`
  }
  else if (humanAge === 1) {
    return `You are ${catYears} years old in cat years!`
  }
  else if (humanAge === 2) {
    return `You are ${catYears + 9} years old in cat years!`;
  }
  else {
    return `You are ${(catYears + 9) + ((humanAge - 2) * 4)} years old in cat years!`;
  }
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32
//////////////////////////////////////////////////////////////////
/*
6. Remove Last Char
Create a function removeLastChar that takes a string as an argument, 
and returns the string without the last character.

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'
*/

function removeLastChar(string) {
  let a = string.split('');
  a.pop();
  return a.join('');
}

console.log(removeLastChar('ciao!'));
console.log(removeLastChar('bonjour'));

/* SUBSTRING .substring()
 > It takes a "start" and "end" index as input 
 and returns the part of the string that 
 ranges from the start index to the end index 
 (excluding the latter).
*/

function removeLastCharSub(string) {
  return string.substring(0, string.length - 1); //start at beginning and end with char before last
}

console.log(removeLastChar('ciao!'))

/////////////////////////////////////////////////////////////////
/*
7. Arrow Functions (Part 1)

Refactor the function below using arrow syntax. Line 9 should still log the same sentence.

const template = 'I VERB NOUN.';

function sentence(verb, noun) {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

console.log(sentence('like', 'birds'));
// logs: I like birds.
*/
const template = 'I VERB NOUN.';
const sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun) // function just used template, not change or reassign
//single line block
  // - does not need {} curly braces 
  // - does not need 'return'

console.log(sentence('like', 'birds'));

/////////////////////////////////////////////////////////////////
/*
8. Arrow Functions (Part 2)
The function initGame below returns an object. Refactor it using arrow function syntax.

let initGame = function () {
  return {
    level: 1,
    score: 0
  }
};

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);
*/

const initGame = () => ({ //need parenthesis 
    level: 1, 
    score: 0 
});
let game = initGame();
console.log('Level: ' + game.level);
console.log('Score: ' + game.score);

/* The reason is that the JavaScript engine 
does not interpret a statement 
starting with a brace as an object literal, 
but as a block statement. 
So if you want to force it to 
treat the statement as an object literal, 
you need to make sure that the statement 
doesn't start with a brace. 
The easiest way to do this, 
without changing the meaning or behavior of the statement, 
is by adding parentheses.
*/