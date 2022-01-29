/*
1. Write a function that returns the first element of an input array. 

For example:
first(['Earth', 'Moon', 'Mars']); // 'Earth'

What would you return if the input array was empty?
> undefined, if parameter is left empty
*/

let pokemon = ['alcremie', 'vulpix', 'vileplume', 'ditto'];
let empty = [];

function first(array) {
  return array[0];
}

console.log(first(pokemon)); // alcremie
console.log(first(empty));   // empty array > undefined
// console.log(first());        // TypeError: Cannot read properties of undefined (reading '0')

/////////////////////////////////////////////////////////////////
/* Last Element
2. Write a function that returns the last element of an input array. For example:
last(['Earth', 'Moon', 'Mars']); // 'Mars'
*/

let planet = ['venus', 'earth', 'jupiter', 'saturn'];

function last(array) {
  return array[array.length-1];
}

console.log(last(planet)); // saturn
/////////////////////////////////////////////////////////////////
/* 
3. Add + Delete
We are given the following array of energy sources.

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
Remove 'fossil' from the array, then add 'geothermal' to the end of the array.
*/

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy.shift();
energy.push('geothermal')
console.log(energy);

function addEndDelBeg(array, add) { 
  array.shift();
  array.push(add);
  return array
}

console.log(addEndDelBeg(energy, 'magic'));

/////////////////////////////////////////////////////////////////
/* 
4. Alphabet
Split the string alphabet into an array of characters.
*/
let alphabet = 'abcdefghijklmnopqrstuvwxyz';

console.log(alphabet.split(''));

//alternative 
let alphA = Array.from(alphabet);
// creates a new, shallow-copied Array instance from an array-like or iterable object.

/////////////////////////////////////////////////////////////////
/* 
5. Filter
Count the number of elements in scores that are 100 or above.
*/
let scores = [96, 47, 113, 89, 100, 102];

let count = scores.filter(num => num >= 100);

function howMany(array, numChoice) {
  return 'There are ' + array.filter(num => num >= numChoice).length + ' elements that are equal to or greater than ' + numChoice;
}

console.log(howMany(scores, 100));
/////////////////////////////////////////////////////////////////
/* 
6. Vocabulary
We've been given an array of vocabulary words grouped 
into sub-arrays by meaning. 
This is a two-dimensional array or a nested array. 
Write some code that iterates through the sub-arrays 
and logs each vocabulary word to the console.

*/
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc...

function nestedVoc(array) {
  let allVocab = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      allVocab.push(array[i][j]);
    }
    }
  return allVocab.join('\n');
}

console.log(nestedVoc(vocabulary));

// at array's index (0) are the vocabulary: {vocab: index...}
/////////////////////////////////////////////////////////////////
/* 
7. Equality
Predict the output of the below code. 
When you run the code, do you see what you expected? 
Why or why not?

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);
> primitive types are compared by their value, objects are not
> false, arrays are objects and objects will always return false in this case
because objects are compared using reference, 
JavaScript compares whether two objects are strictly 
equal by checking whether they are the same object, 
i.e. whether they reference the same location in memory. 
Since we constructed two array objects, one on line 1 and one on line 2, 
they don't have the same reference.

Note that if we alter our original code so that 
array2 references the same object as array1, our comparison logs true:

two object values are the same iff they refer
to the same underlying object

*/
/////////////////////////////////////////////////////////////////
/* 
8. Type
How can you check whether a variable holds a value that is an array? 
For example, imagine you start writing a function and 
want to check whether its argument is an array
*/
let pokemonA = ['arceus', 'togekiss', 'gardevoir'];
function checkArray(input) {
  if (Array.isArray(input)) {
    return `Your input is an array!`
  }
  else {
    return `Your input is not an array!`
  }
}

console.log(checkArray(pokemonA));
/////////////////////////////////////////////////////////////////
/* 
Travel
9. Write a function that checks whether or not a particular destination 
is included within destinations, without using the 
built-in method Array.prototype.includes().

For example: When checking whether 'Barcelona' is contained in destinations, 
the expected output is true, whereas the expected output for 'Nashville' is false.
*/
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Tokyo', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(city, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === city) {
      return `${city} is available in the list of destinations on page ${i}.`
    }
  }
  return `${city} is NOT available in the list of destinations.`
}

console.log(contains('Tokyo', destinations));
/////////////////////////////////////////////////////////////////
/* 
Passcode
10. We generated parts of a passcode and now want to combine 
them into a string. Write some code that [returns a string], 
with each portion of the passcode separated by a hyphen (-).

// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'
*/
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
let newP = passcode.join('-');
console.log(newP);
/////////////////////////////////////////////////////////////////
/* 
Checking items off the grocery list
11. Write code that removes the items from 'groceryList' 
one by one, until it is empty. 
If you log the elements you remove, 
the expected behavior would look as follows.
*/

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

function crossOff(array) {
  let arrayL = array.length
  let removed = [];
  for (let i = 0; i < arrayL; i++) {
    removed.push(array.pop());
  }
  return removed.join('\n');
}

console.log(crossOff(groceryList));
console.log(groceryList);

//shorter 
// while (groceryList.length > 0) {
//   let checkedItem = groceryList.shift();

//   console.log(checkedItem);
// }