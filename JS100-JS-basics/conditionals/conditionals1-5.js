/*
Truthy vs Falsy
1. Recall all values that count as falsy in JavaScript.

In JavaScript, there are only eight values that are "falsy". 
1. false
2. null 
3. undefined
4. 0
5. NaN        (Not a Number)
6. '' or ""   (empty strings)
7. -0 (negative zero)
8. 0n (BigInt zero)

*/
////////////////////////////////////////////////////////////////////////
/*
Yes? No? Part 1
2. The code provided below will randomly initialize 
randomNumber to either 0 or 1 each time it is executed.

Write an if statement that logs 'Yes!' if randomNumber is 1, 
and 'No.' if randomNumber is 0.
*/
let randomNumber = Math.round(Math.random());

if (randomNumber === 1) {
  console.log(randomNumber, 'Yes!')
}
else {
  console.log(randomNumber, 'No.')
}
////////////////////////////////////////////////////////////////////////
/*
Yes? No? Part 2 (ternary operator)

condition ? exprIfTrue : exprIfFalse

3. Rewrite conditional into a ternary expression 
*/

console.log(randomNumber === 1 ? 'Yes!' : 'No.')

console.log(randomNumber ? 'Yes!' : 'No.') // 0 is falsy and so if expression returns 0, it counts as false
////////////////////////////////////////////////////////////////////////
/*
Check the Weather, Part 1
4. Initialize a variable weather with a string value being "sunny", "rainy", or anything else.

Write an if statement that logs:
  "It's a beautiful day!" if weather is assigned to the string "sunny",
  "Grab your umbrella." if weather is assigned to the string "rainy", and
  "Let's stay inside." otherwise.
*/
let weatherArray = [
  'sunny', 
  'rainy', 
  'stormy', 
  'windy',
  'perfect',
  'foggy',
  'snowy',
  'cloudy'
];
let weather = weatherArray[Math.floor(Math.random() * weatherArray.length)];

console.log(weather);

if (weather === 'sunny' || weather === 'perfect') {
  console.log("It's a beautiful day!");
}
else if (weather === 'rainy') {
  console.log("Grab your umbrella");
}
else {
  console.log("Let's stay inside");
}
////////////////////////////////////////////////////////////////////////
/*
Switch
5. determine what it will log to the console:

let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

- the string 'neigh' will be logged to the console, but so will
  'tweet tweet', and '*cricket*'
  The switch statement evaluates the provided expression (animal in our case) 
  and will execute the statement associated with the case that matches ('horse' is associated with the case 'horse'), 

  as well as the statements in all cases following the matching case 
  until reaching either the end of the switch statement or a break.

- in this case...haha, since there are no break statements in any of the cases, then 
there is a "fall through" behavior that occurs, 
which means it will also log the case statements below
the associated case 
*/
