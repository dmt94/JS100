
//hunkle as an array
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

//check what 'hunkle' is / variable check:

function arrayCheck(variable) {
  if (Array.isArray(variable) === true) {
    return `TRUE: argument is an array.`
  }
  else return `FALSE: argument is NOT an array.`
}

function objectCheck(variable) {
  if (typeof variable === 'object' && !Array.isArray(variable) && variable !== null) {
    return 'TRUE: argument is an object exclusive, neither an array or null'
  }
  else return 'FALSE: argument is not exclusively an object.\n >Argument could be an array, null, or another data type.'
}

console.log(arrayCheck(hunkle));
console.log(objectCheck(hunkle));

//hunkleO as an object

let person = {
  name: 'Mari',
  age: 27, 
  'musical instrument': 'guitar',
  crystal: 'tiger\'s eye',
  phrase: 'persistance and peace',
  color: ['crimson', 'sapphire', 'onyx', 'white',],
}




/* object 'person' has 6 key-value pairs
KEY NAMES can be referred to as PROPERTIES, so
person has properties: name, age, musical instrument, crystal, phrase, and color

{}  : delimit the list of key-value pairs contained by the object ('hunkle')
(,) : each key-value pair ends with a comma
(:) : each key-value pair has a KEY:VALUE

values: of any pair can be any type


key-value pairs are also called OBJECT PROPERTIES
we can also use "PROPERTY" to REFER to the KEY NAME
we can talk about the name property for the person object without mentioning the value.
*/