/*
1. What does this code log to the console? Why? 
let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

--------
Answer: 
--------
- [1, 4, 3]

array2 will log the mutated array, because
array1 and array2 reference the same array,
modifying either variables will change the other

assignment of an array to another array doesn't create
a new array--it COPIES a reference from the original array
into the target array

//////////////////////////////////////////////////////////////////////////////////////////

2. What do the following error messages and stack trace tell you?

$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)

--------
Answer: 
--------
- the file name of the program is exercise2.js, and the error occured
on line 4, column 15 of the program. The ^ indicates where the error is in the code,
in this case, it is the argument list for console.log

- the output of the program reveals that a ReferenceError exception
occured and that the name 'greeting' is not defined, it is further revealed
that the code is in the 'hello' function

- line 32 reveals that 'hello' was called from line 13 of the program in an 
anonymous function (global-level of the program)

- rest of output comes from running the code in node and is not 
useful to explain in this case

//////////////////////////////////////////////////////////////////////////////////////////

3. Write some code to output the square root of 37
*/
let sqr = Math.sqrt(37);
console.log(sqr);

//////////////////////////////////////////////////////////////////////////////////////////
/*
4. write some code to find and display the 
largest numeric value in the list:

  LIST               MAX
 1,  6,  3,  2        6
-1, -6, -3, -2       -1
2,  2                 2
*/

let listA = [1, 6, 3, 2];
let listB = [-1, -6, -3, -2];
let listC = [2, 2];

console.log(Math.max(...listA)); //...before array variable
console.log(Math.max(...listB));
console.log(Math.max(...listC));
console.log(Math.max(2, 2)); //less numbers/comparisons

//////////////////////////////////////////////////////////////////////////////////////////
/*
5. What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

--------
Answer: 
--------
- This function splits a string into arrays. 
Then it would reverse the order
of the elements. It would then output the length 
of the return value's length, which would be the lenght of an array
This new array is returned.
*/

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}
// console.log(doSomething('okay'));
// console.log(doSomething('okay is fine i guessed'));

// console.log('hello'.split('')); //splits into characters 
// console.log('hello i am goose'.split('')); //splits into characters

//////////////////////////////////////////////////////////////////////////////////////////
/*
6. Write a function that searches an array of strings 
for every element that matches the regular expression 
given by its argument. The function should return 
all matching elements in an array        (map returns new array)

example:
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/));      // => ['laboratory', 'flab', 'elaborate']
*/

let pokemons = [
  'butterfree',
  'spearow',
  'clefable',
  'arcanine',
  'jigglypuff',
  'rapidash',
  'lapras',
  'igglybuff'
]

function allMatches(regEx, array) {
  let found = array.filter(function(val) {
    if (regEx.test(val) === true) {
      return val
    }
    // return regEx.test(val)
  })
  return found
}

console.log(allMatches(/igg/, pokemons));

//////////////////////////////////////////////////////////////////////////////////////////
/*
7. What is exception handling and what problem does it solve?

------
ANSWER
------
- Exception handling is a process that deals with errors in a 
manageable and predictable manner. It uses the try/catch statement 
to catch exceptions that the code in the try block raises, 
and lets the programmer deal with the problem in a way that 
makes sense and perhaps prevents a catastrophic failure or nasty bug.
*/

//////////////////////////////////////////////////////////////////////////////////////////
/*
8. Write a function named isNotANumber that 
returns true if the
value passed to it as an "argument" is NaN
returns false if not NaN
*/

function isNotANumber(check) {
  if (check !== check) {
    return true 
  }
  else {
    return false
  }
}
console.log(isNotANumber(NaN)); //> true

//////////////////////////////////////////////////////////////////////////////////////////
/*
9. Without using Object.is, write a function that will 
return true if the argument is -0, 
and false if it is 0 or any other number.
*/

function negativeZero(zeroCheck) {
  if (1/zeroCheck === -Infinity) {
    return true
  }
  else {
    return false
  }
}

console.log(negativeZero(-0)) //> true

function isNegativeZero(value) {
  return 1 / value === -Infinity;
}

console.log(isNegativeZero(0)) //> false

function isNegativeZero2(value) {
  return (value === 0) && (1 / value === -Infinity);
}
// While this is a little more complex, 
// it clearly shows that we're only interested in numbers that are 0 (or -0), 
// which also helps eliminate unwanted division operations, 
// which may be needed for performance reasons.

console.log(isNegativeZero2(-0)) //> true

//////////////////////////////////////////////////////////////////////////////////////////
/*
10. What gets returned by y++? 

let y = "5"
y++

------
ANSWER
------
- JS coerces string into a Number value.
after coercion, it then increments to 6. 
Return value is 5 since y++ returns original value, not the incremented value

NOTE: x++ is not the same as x = x + 1
*/

let y = "5"

console.log(y++); // returns 5 ; although value still got incremented, the return value is still the original
console.log(y = y + 1) // returns 7; y++ coerced "5" into a Number AND icnremented it, so this new expression outputs 7
                      // 5 > 5++ > 6 > 6 + 1 > [7]