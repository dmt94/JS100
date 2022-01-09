/* 1. Modify the age.js program you wrote in the exercises for the Input/Output chapter. 
The updated code should use a for loop to display the future ages. */
let rlSync = require('readline-sync');
let userAge = Number(rlSync.question("How old are you?\n"));
let newAge = 0;


//short and simple version, function with maxYears prompt
function userChoice() {
  let maxYears = Number(rlSync.question("Until how many years into the future do you want to look ahead? \n (Type multiple of 10.) >>  "));
  if (maxYears < 10 || maxYears % 10 !== 0) {
    console.log('Type a number that is a multiple of 10. Try again.\n')
    return userChoice();
  }
  for (let years = 10; years <= maxYears; years += 10) {
    console.log(`In ${years} years, you will be ${userAge + years} years old !`);
  }
}

userChoice();


/* 2. Write a function that computes and 
returns the factorial of a number by using a for loop. 
The factorial of a positive integer n, signified by n!, 
is defined as the product of all integers between 1 and n, inclusive:

n!    Expansion   Result
------------------------
1!       1          1
2!       1*2        2
3!       1*2*3      6
------------------------
*/
//my answer:
function factorial(integer) {
  for (let val = integer - 1; val > 0; val--) {
    integer = integer * val;
  }
  return integer;
}

console.log(factorial(5));

//solution answer:
function factor(integer) {
  let result = 1;
  for (let val = integer; val > 0; val -= 1) {
    result *= val;
  }
  return result;
}
console.log(factor(5));


/* 3. The following code causes an infinite loop 
(a loop that never stops iterating). Why?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
-------
ANSWER:
-------
The counter is assigned to 1 inside the conditional part of the 
while loop. The loop body contains 'console.log(counter)',
which ensures that it will keep logging '1' in an infinite loop.
The loop condition of "counter = 1" never becomes false 
because no statement inside the loop body triggers its execution.

*/



/* 4. Does the following code produce an error? Why or why not? 
What output does the code send to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}
-------
ANSWER:
-------
The code doesn't produce an error since all 3 components of the for loop are optional. 
In this code, we omit the "next value" component; 
however, this isn't a problem here since we 
increment the loop variable on line 2.

code outputs:
1
2
3
4
5
*/


/* 5. The following code uses a randomNumberBetween function 
to generate a number between its first and second arguments. 
It uses a while loop to try to generate a number greater than 2. 
Refactor the code so that you don't need to 
call randomNumberBetween from two different locations, lines 113 and 117. 
Do not change the arguments you pass to randomNumberBetween.

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = randomNumberBetween(1, 6);
tries += 1;

while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
-------
ANSWER
-------
*/
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let tries = 0; tries += 1;) {
  let result = randomNumberBetween(1, 6);
  console.log(`Trial ${tries} is ${result}`);
  if (result > 2) {
     console.log(`It took ${tries} ${(tries > 1) ? 'tries' : 'try'} to get a number greater than 2. \nThe random number is: ${result}`)
     break
  }
}


/* 6. Reimplement the factorial function from exercise 2 using recursion. 
Once again, you may assume that the argument is always a positive integer. */

function randomFactorial(integer) {
  if (integer === 0) {
    return 1;
  }
  newInt = integer - 1;
  return integer * randomFactorial(newInt);
}

console.log(randomFactorial(4));