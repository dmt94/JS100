/*
1. In the following code snippet, find all violations of 
the style guide. Rewrite it so that it conforms with the guide.

let ice_cream_taste = 'chocolate'
let ice_cream_density = 10

while(ice_cream_density > 0)
{
    console.log('Drip...');
    ice_cream_density -= 1;
}

console.log('The '+ ice_cream_taste +' ice cream melted.');
*/

let iceCreamTaste = 'chocolate'; //proper naming convention for variable name includes using camelCase
let iceCreamDensity = 10;       //semi-colon 

while (iceCreamDensity > 0) {
    console.log('Drip...');
    iceCreamDensity -= 1;
} //don't need a semi-colon after curly brace

console.log('The ' + iceCreamTaste + ' ice cream melted.'); //spaces before and after operators like "+"

/* 
> use camelCase for variable names
> end all statements with a semicolon
> indent lines with two spaces
> use spaces between keywords (like while)
  - opening parentheses
  - between closing parentheses
  - curly brackets
> put the opening curly brackets of the whie block on same line {
> put spaces before and after operators like "+"
*/
////////////////////////////////////////////////////////////////////////////////////
/*
2. Which primitive data types are defined in JS
- String data type
- Number data type
- Boolean data type
- Undefined data type
- Null data type (even though its "type" is considered an "Object"/non-primitve)
- Symbol  (ES6)
- BigInt  (ES9)

REMEMBER: primitive types are IMMUTABLE
*/
////////////////////////////////////////////////////////////////////////////////////
/*
3. Largest Number
determine how we can find the largest numeric value that can be represented in JavaScript. 
Write a line of code that returns this value.

Number.MAX_VALUE: 
- represents the maximum numeric value representable in JS
- returns an exponential notation: 1.79E+308 
- Values larger than MAX_VALUE are represented as Infinity

MAX_VALUE:
- property of Number

MAX_SAFE_INTEGER:
-  It has a value of 9007199254740991 and is the largest number that 
can be processed and compared with precision.
*/


let maxValJavaS = Number.MAX_VALUE

function isBig(num) {
  return (num > 500000 ? 'Num is greater' : 'Num is not greater')
}

console.log(isBig(maxValJavaS));
////////////////////////////////////////////////////////////////////////////////////
/*
4. Arithmetic Operator Precedence
Find the MDN documentation on operator precedence, 
and use it to find out which result the expression 
4 * 5 + 3 ** 2 / 10 evaluates to.

6 / 3 / 2   
> division "left-associative", so it goes from left to right

2 ** 3 ** 2
> exponentiation is "right-associative", so it goes from right to left

a = b = 5
> assignment operators are "right-associative", so this is a = (b = 5);

()
** (right to left)
*
/
%
+
-

*/

let mathEx = 4 * 5 + 3 ** 2 / 10; // 20.9?
            //20       9 / 10 
            // 20 + 0.9
          // ** > * > / > +
console.log(mathEx); // exact, 20.9
console.log(Math.floor(mathEx)); // returns largest integer less than or equal (argument)
console.log(Math.round(mathEx)); // returns value rounded to nearest integer of (argument)
////////////////////////////////////////////////////////////////////////////////////
/*
5. Date
Date.now() returns: 
- Date.now() method returns a number value that represents
the milliseconds elapsed since Jan 1, 1970 00:00:00 UTC

-this way of representing a point in time is called Unix time or epoch milliseconds. 
Chances are high that you will encounter and use Unix time 

- For a computer to have any comprehension of now, 
it must determine how many seconds have elapsed since then -- 
and the earliest then is called the "epoch," or the theoretical time the clock began ticking.
      >> the Unix epoch is midnight on Jan 1, 1970 (convenient)
*/
////////////////////////////////////////////////////////////////////////////////////
/*
6. 
Date 
- the Date class is JS API for working with dates and times. 
- a date object is created with the Date() constructor
- with no arguments, Date() returns a Date object that
represents the CURRENT DATE AND TIME
*/
let today = new Date(); 

today.getYear(); // returns 122
/* deprecated: returns the year in the specified date according to local time - 1900
 - does not return full years 
*/
today.getFullYear(); // returns 2022
// returns the year of the specified date according to local time
////////////////////////////////////////////////////////////////////////////////////
/*
7. How many arguments does the Array.prototype.join() method expect? 
What happens if you call it with less or more arguments?

> join() method returns a new string by concatenating all the elements in an array,
separated by commas or a specified separator string.
  - if there is only one element in the array, then join() will return that item 
  without using separator

*/

let harryHouse = ['Gryffindor'];
let hogHouse = ['Hufflepuff', 'Gryffindor', 'Ravenclaw', 'Slytherin']; 
console.log(hogHouse.join()); //no argument = separates elements with a comma (,)
console.log(hogHouse.join(' ')); //separates elements with a space
console.log(hogHouse.join(' + ')); //separates elements with a space w character in between
console.log(harryHouse.join()); //no separator, return element
console.log(hogHouse.join('', 'z', ',')); 
/* only the first argument will be taken into account if 
there are more than one argument -- Any excess arguments passed 
to the method upon invocation are ignored.
*/
////////////////////////////////////////////////////////////////////////////////////
/*
8. Find out how we can join two or more strings together.

(``)Using backticks is my favorite way of concatenating strings.
  They enable string interpolation:
  - it can merge expressions with strings. Useful for when string values are long
and must be packed into a variable. Also useful when modifying how 
you would like to present the final statement, like adding other string 
characters or expressions.
*/

let stringOne = "I was sorted into Ravenclaw."; 
let stringTwo = "I wanted to be in Gryffindor.";
let stringThree = "I'm relieved I wasn't sorted into Slytherin...";

let statement = `${stringOne}, but ${stringTwo}!\nStill though, ${stringThree}`;

let alternaTwo = "I wanted to be in Slytherin."
let alternaThree = "Dumbledore will hear from my mother..."
//.concat()
let concWay = stringOne.concat(' ', alternaTwo, '\n', alternaThree);
//stringOne is the "calling string", (' ', alternaTwo) are method parameters

let concWay2 = ''.concat(stringOne, '\n', `${alternaTwo.replace('.', '!!!!!')}`, '\n', alternaThree);
                                //can use string interpolation as a method parameter
                                //can invoke other methods in these parameters

console.log(concWay);
console.log("")
console.log(concWay2);

////////////////////////////////////////////////////////////////////////////////////
/*
9. SyntaxError

Fix code:

let speedLimit = 60;
let currentSpeed = 80;

if (currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}


SyntaxError: Unexpected token &&:
occur when a specific language construct was expected, 
but something else was provided. This might be a simple typo.
  - not enough brackets in this case
*/

let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}
////////////////////////////////////////////////////////////////////////////////////
/*
10. TypeError
let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}

>> TypeError: tweet.length is not a function

What caused error: 
.length is a property that is called without the use of parenthesis.
.length is not a string method.
Since the return expectation when implementing [.length] on a string
is a NUMBER, but we tried to invoke .length() as a function
by adding the parenthesis, there is a type mismatch and a TypeError occurs.

Anything that defines a behaviour is a function. = method
Anything that defines an attribute or characteristic that doesn’t require computation is a property.

*/

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}

