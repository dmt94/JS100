/*
1. access the name of the person
*/
let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

//dot notation
let persoName = person.name;
console.log(persoName);

//bracket notation
let nameBrack = person['name'];
console.log(nameBrack);

/*
2. Which of the following values are valid keys for an object?
  1 
  '1' 
  undefined 
  'hello world' 
  true
  'true' 

Answer: all of them are "valid";
JS coerces the non-string values to strings: 1 and '1' would be the same key
So are 'true' and true. Be weary of not using strings as keys beforehand.

///////////////////////////////////////////////////////////////////////////

3. create an object that behaves as an array in a for statement. 
The object should contain at least 3 elements. 
You should place your code between the braces in the let statement:
*/
let myArray = {
  0: 'fairy',
  1: 'grass',
  2: 'fire',
  length: 3
};

//in this case myArray.length calls on the property of myArray
for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

/* difference from a real array:
- doesn't support array methods like forEach, filter, push,etc.
- length property can't be modified by adding or deleting elements
*/

///////////////////////////////////////////////////////////////////////////
/* 
4. Create an array from the [keys] of the object obj below, 
with all of the [keys] converted to uppercase. 
Your implementation must NOT mutate obj.
*/
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
//just logging
objKeys.forEach(key => console.log(key.toUpperCase()));

//mapping => pushing mutated keys to an declared array
let upperKeys = objKeys.map((key) => key.toUpperCase());
console.log(obj);
console.log(upperKeys);

///////////////////////////////////////////////////////////////////////////
/* 
5. Create a new object named myObj that uses myProtoObj as its prototype.
*/

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj); 

///////////////////////////////////////////////////////////////////////////
/* 
6. Which of the following values are primitive values? 
Which are objects? Which are neither?

"foo" = String; primitive
3.1415 = Number (floating-point); primitive
[ 'a', 'b', 'c' ] = Object (Array)
false = Boolean; primitive
foo = Identifier; neither
    > !!!!! Identifiers are used to name things that have values, 
    such as variables and functions, 
    but they are not values by themselves. 
    Thus, they are neither primitive values nor objects.

function bar() { return "bar"; } = Object (Function)
undefined = Undefined; primitive
{ a: 1, b: 2 } = Object literal

///////////////////////////////////////////////////////////////////////////
/* 
7. Add a qux property with value 3 to the myObj 
object we created in the previous exercise. 

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj); 
myObj.qux = 3;

      Now, examine the following code snippets:

let objKeys = Object.keys(myObj);           Object.keys and Object.values are object specific
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

      Do these two snippets produce the same output? Why or Why not?

> NO, they do not bc using Object.keys limits the forEach method to only using
the child object's own properties
however, using [for in] without Object.keys iterates 
over all the keys of the myObj (the child object),
including prototype object
*/
myObj.qux = 3;
for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}
///////////////////////////////////////////////////////////////////////////
/*
9. What does the following program log to the console? Why? */
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);
/*
Objects are mutable, so calling foo.a will log 'hi' after function is called
However, the variable reassignment in line 155=> argument1.a = 'hi'
doesn't mutate the original object, but assigning its existing 'a' property to a new value 'hi'

Strings and other primitives are not mutable
line 156=> reassigns argument2, but it can't mutate the string represented by qux
original value of qux is preserved
*/

///////////////////////////////////////////////////////////////////////////
/*
10. How many primitive values are there 
in the following expression? Identify them. 
How many objects are there in the expression? 
Identify those objects.

[1, 2, ["a", ["b", false]], null, {}]
 
primitive values: 6 
- 1 (number)
- 2 (number)
- "a" (string)
- "b" (string)
- false (boolean)
- null (even though it's type is an "object", it really isn't)

object: 4
- whole array [1, 2, ["a", ["b", false]], null, {}]
- ["a", ["b", false]]
- ["b", false]
- {}

*/
///////////////////////////////////////////////////////////////////////////
/* Write some code to replace the value 6 in the following object with 606:
You don't have to search the object. 
Just write an assignment that replaces the 6.
*/

let obj2 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj2.bar[3].xyz = 606;

console.log(obj2);