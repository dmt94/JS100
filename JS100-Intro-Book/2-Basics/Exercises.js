// #1. concatenate first name and last name (two strings)
let firstName = 'Daevah';
let lastName = 'Taylaran';

let fullName = firstName + " " + lastName;
console.log(fullName);


/* #2. use arithmetic operators to determine the individual digits
of a 4-digit number like > 4936 */

let number = 4936; 

let ones = number % 10;
number = (number - ones ) / 10;

let tens = number % 10;
number = (number - tens ) / 10;

let hundreds = number % 10;
number = (number - hundreds ) / 10;

let thousands = number % 10;

console.log(ones);
console.log(tens);
console.log(hundreds);
console.log(thousands);


/* #3. Identify the data type for each of the following values: 

'true' = string
false = boolean
1.5 = number
2 = number
undefined = undefined
{ foo: 'bar' } = object


#4. Explain why this code logs '510' instead of 15
console.log('5' + 10)

Explanation: 
When the '+' operator is used in an expression that has at least one string,
Javascript implements an implicit type coercion by converting the
non-string operand to a string and concatenating the two strings
together like how string data types would combine together, which would in this case log '510'. 
Javascript would NOT combine the two operands in an arithmetic way (producing a sum value) of '15'.


#5. Refactor the code (console.log('5 + 10)) to use EXPLICIT COERCION so it logs 15 instead */

console.log(5 + 10);


/* #6. Use the template literal syntax along with the expression: Number('5') + 10 
to log the following sentence to the console:
The value of 5 + 10 is 15 */

console.log(`The value of 5 + 10 is ${Number('5') + 10} `);


/* #7. Will an ERROR occur if you try to access an array element with an index
that is greater than or equal to the length of the array?

Explanation:
No, there would NOT be an error. Javascript would return an UNDEFINED when you
use an index value that does not have a corresponding element.


#8. Create an array named NAMES that contains a list of PET NAMES. */

let petNames = [
  'asta',
  'butterscotch',
  'pudding',
  'neptune',
  'darwin',
];
console.log(petNames);


/* #9. Create an object named PETS that contains a list of PET NAMES and the
TYPE of ANIMAL */

let pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',
};

console.log(pets);


/* #10. What value does the following expression evaluate to?
'foo' === 'Foo'

> false, because case matters when comparing two strings
Note: difference in  '2' == 2 > true    '2' === 2 > false
*/


/* #11. What value does the following expression evaluate to? 
parseInt('3.1415')

>  3, because parseInt() function converts strings that begin with a digit
to its numeric equivalent, once it encounters a non-digit (like . ), 
it stops converting. parseInt() in this case, converted the first string
to their numeric equivalent '3' > 3, but ignored every character after it
 encountered the '.'


#12. What value does the following expression evaluate to? 
 '12' < '9'

> When you compare two strings, JavaScript performs a 
character-by-character comparison going from LEFT to RIGHT, 
so on the first comparison, 
it determines that '1' < '9', so '12'  (implicit coercion?)
must be less than '9'.'

if numbers were explicitly used, the expression would
evaluate as FALSE 
*/

