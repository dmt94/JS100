/*
6. 
let a = 5;     //global
let b = false; //global

if (a > 4) {
  let b = true;
}

console.log(b);

> false, because declaring the variable "b" with "let" 
inside the conditional statement block
  makes it inaccessible after block ends
> although line 4 and line 7 used the same name for the variable, it is not the same
since "let" declaration was used in line 7
*/
let a = 5;     //global
let b = false; //global

if (a > 4) {
  b = true;
}

console.log(b); //true
//in this case the "b" is accessible because it is not declared with let inside scope. 
//"b" has been reassigned to a new value.
//////////////////////////////////////////////////////////////////////
/*
7. 
let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();

> logs 1
> The variable a declared in the let statement on line 1 i
s declared at the very top level of our code, 
so it is accessible from everywhere in the code, 
including from within the body of myFunction.
*/
//////////////////////////////////////////////////////////////////////
/*
8. 
let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

> logs 2
> in this case, the variable "b" is used as an argument 
for the function myFunction(b). 
Within the scope of the function, it uses the parameter 
to log its value 
> The "a" we reference within the function body, on line 4, 
therefore refers to whatever argument is passed to the function, 
in our case the value of b, which is then logged.
*/
//////////////////////////////////////////////////////////////////////
/*
9.  
const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

> TypeError: Assignment to constant
> Variables declared by const are "block scoped", 
similar to variables declared by let, 
but their [value cannot be changed] through [re-assignment]. 
Function attempts to reassign the value of "a" and so the TypeError was thrown.
*/
//////////////////////////////////////////////////////////////////////
/*
10.
const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);  

> {firstName: 'Jane', lastName: 'Doe'}
> permissible bc properties of an object can be reassigned 
even though the object itself is declared with 'const'
> The fact that const variables cannot be re-assigned 
does not mean that the value they hold is immutable. 
As we see in the example above, 
objects that are assigned to const variables can be mutated.

> One way to make an object immutable is by means of the Object.freeze() method. 
But it's important to note that this is a shallow freeze, 
meaning it only applies to the immediate properties of the object. 
If the value of those properties are objects themselves, they can still be mutated.
 > best not to use on objects with nested objects?
*/