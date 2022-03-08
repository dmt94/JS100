let numbers = [1, 2, 3, 4]
let squares = [];
numbers.forEach(num => squares.push(num * num));


console.log(numbers);
console.log(squares);

numbers.forEach(num => squares.push(num * num));
/*
forEach() returns undefined, but it mutates the original
array with its callback function

array.forEach(function(element) {
  //block code that will execute once for each element
});
*/

console.log(squares);
/*
[
  1, 4, 9, 16,
  1, 4, 9, 16
]

Two copeies of the squares variable is created in one array
*/


const strings = ['10', '10', '10'];
const parseA = strings.map(parseInt);
const numbersA = strings.map(Number);

console.log(parseA);   // [ 10, NaN, 2 ]
console.log(numbersA); // [ 10, 10, 10 ]


console.log(parseInt("3", 2)); 
/* NaN bc second argument is radix
An integer between 2 and 36 that represents the radix 
(the base in mathematical numeral systems) of the string. 
Be careful—this does not default to 10! 
If the radix value is not of the Number type it will be coerced to a Number.

*/

let musicals = [];

musicals.length = 3;

console.log(musicals); // [ <3 empty items> ]
//if you try and assign an element to this array, whose length you changed,
// the new elements do not get initialized

musicals[1] = 'The Phantom of the Opera';
console.log(musicals);  // [ <1 empty item>, 'The Phantom of the Opera', <1 empty item> ]

musicals.forEach(musical => console.log(musical));