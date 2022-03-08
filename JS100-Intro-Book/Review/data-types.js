/*
node js: runtime environment
Allows us to run JS file from Terminal

The REPL feature of Node is very useful in [experimenting with Node.js codes] and to [debug JavaScript codes].

REPL stands for Read Eval Print Loop
 > represents a computer environment like a Windows console or Unix/Linux shell 
 > command is entered and the system responds with an output in an interactive mode. 

Node.js or Node comes bundled with a REPL environment. 
*/


/*
Each data has their own methods
Each of their own methods allow you to manipulate the data, etc.

Different Data Types 
(7 primitive Values)
1. Boolean (true or false)
  - 2 literal values represent boolean
  - true or false
  - using comparison operators on an expression returns a boolean 

*/


function trueOrFalse() {
  return 3 > 2;  
}

console.log(trueOrFalse()); // true

/*
2. Null
  - represents INTENTIONAL absence of a value
  - emptiness or nothing
  - must be used EXPLICITLY
    > let nothing = null 
  - return value of 'null' indicates 'nothing' has been returned

3. Undefined
  - absence of value BUT can arise when declaring variables without an EXPLICIT value
  - can arise IMPLICITLY: 
    > declaration: let hunkle  >>> undefined
    > expression: let kirei = 'sassy' >>> undefined

4. Number
  - represents real # values
  - 1, 2, -3, 4.5, -6.77, 234891234

5. String
  - list of characters in a specific sequence. 
  - represents text data
  - 'kirei' "universe" `hunky`
*/

let myName = 'kirei'; 
myName = 'hunkle'; 
//you only declare ONCE (with let, const, or var), 
// to reassign value, just use [variable name = new value]
const LANGUAGE = 'Japanese';
const INTEREST_RATE = 0.0783;
// CANNOT reassign new value to a variable declared with const

// string -> array
let myNameChar = myName.split('');
console.log(myNameChar);

/* style convention for JS;
Always end statements with (;) except after {} curly braces

variable names:
variables declared with 'let': camelCase   (mutable)
variables declared with 'const': UPPERCASE (immutable) (can't reassign value)
*/

/*
6. BigInt
  - represents really big whole numbers
  - A BigInt is similar to a Number in some ways, however, 
  it cannot be used with methods of the built-in Math object and 
  cannot be mixed with instances of Number in operations.

7. Symbol
  - A “symbol” represents a unique identifier. A value of this type can be created using Symbol():


EVERYTHING THAT IS NOT A PRIMITVE TYPE ARE OBJECTS
(Object)
Objects include, but aren't limited to, the following types:
	• Simple Objects
	• Arrays
	• Dates
  • Functions

Arrays:
 - data structure , lots of built-in methods
 - ordered list of elements
 - ['3', 3, 'name', 27]
 - can have both number and string values 
 - can have other arrays / objects as elements
 - indexted lists (0 -> array.length)
 - array.length = shows how many elements are inside the array (useful property of the array)
*/
let pokemonList = ['pikachu', 'squirtle', 'bulbasaur', 'dragonair', 'lucario', 'togekiss'];

let firstPokemon = pokemonList[1]; 

//push method   (mutates the original array)
//push adds new element to the end of the array

pokemonList.push('lucario');

pokemonList[1] = 'jigglypuff';
console.log(pokemonList);

//concat method (does not mutate the original array, returns a new array)
//combines arrays array.concat(array1, array2)  , array.concat(element1, element2)
let newList = ['hoohoo', 'hunk'];
let newPokemonList = pokemonList.concat(newList);
console.log(newPokemonList);

//pop method
//pop removes THE LAST element, the expression returns the removed element (mutates original)
pokemonList.pop();
console.log(pokemonList);

 /*
Objects:
 - store a collection of key-value pairs / dictionaries
(creating an object using object literal syntax):
*/

// 4 key-value pairs
// the keys are always strings (even though it doesn't have the quotations around it)
// the values can be of any data type (number, other objects, arrays, strings, etc.)
let student = {
  name: 'Hunkle',
  age: 23,
  hobbies: ['doing projects', 'learning', 'gaining weight'],
  studies: 'data science',
  'university choices': ['UC Irvine', 'UC Davis', 'UC Berkeley', 'CSU Long Beach']
                //INDEX        0            1            2               3
                //LENGTH: amount of elements (4)
}
/*
Accessing properties of objects:
*/
//dot notation
let studentName = student.name;
//bracket notation
let uniChoices = student['university choices']; //extracted the array
//show H random Math.floor(Math.random() * uniChoices.length)

let lengthOfArray = uniChoices.length;

let randInt = Math.floor(Math.random() * uniChoices.length); // returns a random number from 0 - length of array

let theWinner = uniChoices[randInt];
//elements in an array start with index 0 > array.length

console.log(studentName);
console.log(uniChoices);
console.log(lengthOfArray); // 4
console.log(randInt);
console.log(theWinner);


//Object.keys
let studentKeys = Object.keys(student);

console.log(studentKeys);

//Object.values
//extracts values from every property in an object into ARRAY FORMAT
let studentValues = Object.values(student);

console.log(studentValues);

//Object.entries
//returns the keys and values of an object into nested arrays

/*let studentEntries = Object.entries(student);
console.log(studentEntries);
*/


