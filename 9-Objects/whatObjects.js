const { colors } = require("prompt");

let hunkle = [
  {colors: ['tan/brown', 'blue', 'green', 'earth tones', ['yellow', 'black', 'misc']]},
  {food: 'mom\'s homecooked meal'},
  {game: 'League of Legends'},
  {style: 'comfortable'},
  {ailment: 'night owl gamer'},
  {'fave mood': `¯\\_(ツ)_//¯`},
]

let hunkleColors = hunkle[0];
let colorValues = Object.values(hunkleColors);

// different ways to call using values saved into variables
let val = Object.values(hunkle[0]);
let array = Object.values(hunkle[0])[0];
let earthTones = Object.values(hunkle[0])[0][3];

let colorsNestedArray = array[4];
let misc = colorsNestedArray[2];



// console.log(hunkle);
// // console.log(hunkleColors);
// console.log(colorValues);

console.log(val); //outputs the arrays as a value [[ ]] , outer bracket indicate values, 1 value
console.log(array); //outputs the first array/value for the key colors (the first element(an object)) in 'hunkle' object
console.log(earthTones); //outputs the value/element at index 3 within the first array (array saved in variable 'array')

console.log(colorsNestedArray);
console.log(misc);


console.log(hunkleColors); //outputs the object 'colors' with its properties (an array); hunkleColors is hunkle[0]; outputs { }
console.log(hunkleColors[0]); //returns undefined because hunkleColors is an object--the first element in the 'hunkle', to get the value 'colors' within, you have to use Object.values
console.log(colorValues); /*color values used Object.values on hunkleColors, (which is hunkle[0]--see above), the appropriate method to call for an object.
colorValues outputs the VALUES of hunkleColors [[ ]] , outer bracket indicaes values, and inside [] shows there is one value
*/
console.log(colorValues[0]); /*outputs the actual array/first element value shown in colorValues
specifies which VALUE you want to access from colorValues
*/

console.log(colorValues[0][0]);    //outputs the first element inside array *array is the property of 'colors'*
console.log(colorValues[0][4]);    //outputs the last element--a nested array
console.log(colorValues[0][4][0]); //outputs the first element of the nested array element