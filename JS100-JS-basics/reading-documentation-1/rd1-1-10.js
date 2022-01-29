/*
1. What is an excellent destination when looking for JS documentation?
- MDN Web Docs (the Mozilla Developer Network):
  > shares in-depth documentation on how to use 
  programming languages such as HTML, CSS, and JavaScript.

  > There are in-depth tutorials and reference of 
  JS built-in objects and their properties and methods, 
  operators, and more.

  > It is an excellent resource, because it is constantly updated,
  detailed, and includes specifics like browser compatibility info.

/////////////////////////////////////////////////////////////////////
2. JS method for converting a string data type to lowercase 
*/
let aloha = 'Aloha, World!';
let lowerString = aloha.toLowerCase();

console.log('Aloha, World'.toLowerCase());
console.log(lowerString)
/////////////////////////////////////////////////////////////////////
/*
3. Is there a method to capitalize a string, 
for example turning 'mountain' into 'Mountain'?
- There is no "built-in method" for capitalizing a string, but we can
create a method that can return a capitalized string like:
*/
function capitalize(word) {
  let a = word.toLowerCase().split('')
  a[0] = a[0].toUpperCase()
  return a.join('')
}

console.log(capitalize('mOnkkEYbusinESS'));

function cap(word) {
  word = String(word);
  return word.toLowerCase().replace(word[0],word[0].toUpperCase());
}

console.log(cap('howiMETyourMother'))
console.log(cap(234325))

/////////////////////////////////////////////////////////////////////
/*
4. Locate the documentation for the Array built-in object on MDN.
How can we access the element 'and' in the array ?
*/
let britishStaple = ['fish', 'and', 'chips'];
console.log(britishStaple[1]);

function find(array, word) {
  let index = [];
  let count = 0;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === word) {
      count = count + 1;
      index.push(i)
    }
  }
  if (count === 0) {
    return `"${word}" is not found in the array`
  }
  else if (count === 1) {
    return `"${word}" is found at index ${index[0]}`
  }
  else if (count > 1) {
    return `"${word}" is found at indexes:\n${index.join('\n')}`
  }
}

console.log(find(britishStaple, 'and'));
/////////////////////////////////////////////////////////////////////
/*
5. What happens if we take the array ['fish', 'and', 'chips'] 
and try to access the element at index position 10? 
Try this in your JavaScript console.
  > Attempting to access an element at an index 
  that is out of the bounds of the array will return undefined.
*/
console.log(britishStaple[10]); // undefined

/////////////////////////////////////////////////////////////////////
/*
6. What are the return values of the statements on 
lines 92 to 94? Refer to the MDN documentation about 
the Array object for help.
*/
let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

console.log(trees[trees.length - 1]); //returns 'palm tree'
console.log(trees.pop());             //returns 'palm tree'
                                      /* invoking the .pop method on an array will mutate that original array,
                                       removing the last element in that array/
                                       The RETURN VALUE of the expression itself "array.pop()"
                                       is the LAST ELEMENT-- the element removed 
                                       */
console.log(trees[trees.length - 1]); //returns 'sequoia'

/////////////////////////////////////////////////////////////////////
/*
7. Look up the MDN documentation for the typeof operator. 
What is its return value? Determine what the 
following statements will return:

> The operator "typeof" will return a lowercase string value
that indicates the data type of its operand's value
in the format : typeof value
where value can be typically represented by a literal 
(string literal, numeric literal, boolean literal, etc.)
or some variable that represents a literal

typeof 23.5; 
> number
typeof 'Call me Ishmael.';
> string
typeof false;
> boolean
typeof 0;
> number
typeof null;
> object
  > this is debated to be an early JavaScript error
  ECMAScript standards consider null as a primitive value 
typeof undefined;
> undefined
*/
/////////////////////////////////////////////////////////////////////
/*
8. Return Values 
*/
let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length > 140; //value is an expression

typeof tweet; 
/*since the value of this variable is a string, 
invoking the typeof method on this variable
will return: string
*/

typeof words;
/*invoking the .split('') method on a variable whose value is a string
transforms that variable into an array type (which is considered an 'object')
Therefore, typeof will return: object 
*/

typeof isValid;
/*Since a comparison operator is used in this expression,
the return value becomes a boolean type,
therefore invoking typeof for this variable will return: boolean
*/

let check = Array.isArray(words); //checks if this object type is an array or not
console.log(typeof check);        //boolean; bc Array.isArray() method returns a boolean value

/////////////////////////////////////////////////////////////////////
/*
9. Method Chaining
*/
let tweet2 = 'Starting to get the hang of it... #javascript #launchschool';

//what will these statements evaluate to? 
console.log(tweet2.split(' '));  
/* this statement will evaluate to an array, splitting
 the string into individual elements, because of the ' ' 
 delimiter. if the delimiter was '' then the string will be
 split into individual characters, space will be considered 
 as an element/char
 */
console.log(tweet2.split(' ').reverse());
/* this statement will first transform the string into an array
then reverse the order of the element from the tweet2 array format
 */
console.log(tweet2.split(' ').reverse().join(' '));
/* this statement will first transform the string into an array
then reverse the order of the element from the tweet2 array format
and then finally return the array as a string (keeping the reverse format prior)
The method .join(' ') concatenates the elements from the reverse array back into a string
using the paramter in .join(' ') as a divider. In this case, each element
include a space in between for each element.
 */

/*split() is a method and a "method call"
divides a String into an ordered list of substrings,
puts these substrings into an array, and returns the array (MDN)
the division is indicated by the paramter in the method call ('')
*/
/////////////////////////////////////////////////////////////////////
/*
10. Equality
In your JavaScript console, execute the following two lines of code 
to check whether their return values differ and if so, how. 
Take a look at the MDN documentation on 
equality comparisons to read about how == and === differ.

== and === are relational operators, they test for a relationship
between two values and return a boolean value based on if
that relationship (in this case, equality) exists
they both check whether two values are the same,


== : standard / abstract equality operator / loose equality operator
the == operator is a non-strict equality operator, that while comparing
two operands, may COERCE both or either operands before comparing.
If for example comparinga string literal that can be parsed as a number with an actual number literal 
"8" vs 8. 

=== : strict equality operator
the === operator is a strict equality operator (identity operator)
that will not coerce either of its operands. Both operands must be of equal
data type and value for it to return true. 

*/
'8' == 8;
/* This will return true, because the non-strict equality operator is used here 
and both operands have similar values that allows coercion to occur before making a comparison
WHEN DEALING WITH A STRING AND A NUMBER, THE == COERCES THE STRING VALUE >> NUMBER

*/
'8' === 8; 
/* This will return false, because the strict equality operator is used here
both operands have similar values and are NOT of the same data type.
the one on the left of the operator is a string type and the one on its right is a number type
*/