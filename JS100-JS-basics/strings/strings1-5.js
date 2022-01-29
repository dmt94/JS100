/*
1. Determine length of string
*/
let droids = "These aren't the droids you're looking for.";
console.log("These aren't the droids you're looking for.".length);
console.log(droids.length);

//////////////////////////////////////////////////////////////////
/*
2. ALL CAPS
*/
let confetti = 'confetti floating everywhere';
let capFetti = confetti.toUpperCase(); 
console.log(capFetti);

//////////////////////////////////////////////////////////////////
/*
3. Repeat
Implement a function repeat that repeats an input string 
a given number of times, as shown in the example below; 

without using the pre-defined string method String.prototype.repeat().

repeat(3, 'ha'); // 'hahaha'
*/
//just logging
function repeat(number, string) {
  while (number > 0) {
    console.log(string);
    number -= 1; 
  }
}

repeat(3, 'ha');

//return, attach to a string
function returnRepeat(number, string) {
  let start = '';  //need to attach to something outside the loop, and then return this structure
  while (number > 0) {
    start += string //repetition is in the attachment 
    number -= 1; 
  }
  return start
}
//////////////////////////////////////////////////////////////////
/*
4. Multiline String
A pirate I was meant to be!
Trim the sails and roam the sea!

How can you assign this string to a single variable, preserving the line break?
*/
let pirateRhyme = `A pirate I was meant to be! 
Trim the sails and roam the sea!`; // backticks preserve linebreaks

let pirateEscape = "A pirate I was meant to be!\nTrim the sails and roam the sea!";


let pirateTab = "A pirate I was meant to be!\tTrim the sails and roam the sea!";

console.log(pirateEscape);
console.log(pirateTab);
//////////////////////////////////////////////////////////////////
/*
5. Given strings like the following, how can you check 
whether they're equal irrespective of whether the characters 
they contain are upper or lower case?
*/
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

function equalCheck(firstS, secondS) {
  if (firstS.toLowerCase() === secondS.toLowerCase()) {
    return 'They are equal!'; 
  }
  else {
    return 'They are NOT equal';
  }
}

console.log(equalCheck(string1, string2));
//////////////////////////////////////////////////////////////////
/*
6. Write code that checks whether the string byteSequence contains the character 'x'.
*/
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

function checkFor(string, letter) {
  let index = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      index.push(i);
    }
  }
  if (string.includes(letter)) {
    return "The letter \"" + letter + "\" is found at index: " + index.join(" , ")
  }
  else {
    return `Letter "${letter}" was not found in the string...`
  }
}

console.log(checkFor(byteSequence, 'x'));
//////////////////////////////////////////////////////////////////
/*
7. Blank? V1
Write a function that checks whether a string is empty or not. For example:
isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true
*/

function isBlank(string) {
  return !string ? true : false //!string makes string falsey
}

console.log(isBlank('mars'));
console.log(isBlank(' '));
console.log(isBlank(''));
//////////////////////////////////////////////////////////////////
/*
8. Blank? V2
Change your isBlank function from the previous exercise to 
return true if the string is empty or [only contains whitespace]. 
For example:

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true
*/

function isBlank2(string) {
  return !string || string.trim().length === 0 ? true : false
}

//.trim() removed the whitespaces...shrinking them down to (length === 0)

console.log(isBlank2('mars')); // false
console.log(isBlank2(' '));   // true
console.log(isBlank2(''));     // true

/////////////////////////////////////////////////////////////////
/*
9. Capitalize Words
Write code that capitalizes the words in the string 'launch school tech & talk', 
so that you get the string 'Launch School Tech & Talk'.
*/

function capitalizeFirst(string) {
  let sArray = string.split(' ')
  return sArray.map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');
}

console.log(capitalizeFirst('launch school tech & talk'));