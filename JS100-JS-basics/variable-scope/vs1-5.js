/*
1. var 
What will the following code log to the console and why? Don't run it until you have tried to answer.

console.log(greeting);

var greeting = 'Hello world!';

> undefined
> when a "var" variable is declared but not assigned a value, it is 
initialized to the value "undefined"
> All variables in JavaScript declared with var are hoisted, 
meaning they are virtually moved to the beginning of the scope. 
This means that our code snippet above behaves like the following one:

var greeting;

console.log(greeting); >> undefined
*/
///////////////////////////////////////////////////////////////////////////////////////////////////
/*
2. let

console.log(greeting);

let greeting = 'Hello world!';

> ReferenceError: Cannot access 'greeting' before initialization
> "let" variables are not accessible BEFORE they are declared
*/
///////////////////////////////////////////////////////////////////////////////////////////////////
/*
3. let declaration inside block scope

if (true) {
  let myValue = 20;
}

console.log(myValue);

> ReferenceError: myValue is not defined
> variables declared (with let or const) inside a block scope are not accessible in the global scope
///////////////////////////////////////////////////////////////////////////////////////////////////
/*
4. accessing variable declared with "let" inside function scope, conditional statement inside function block

function myFunction() {
  let a = 1;

  if (true) { //boolean value 'true' used as an argument makes this conditional statement run
    console.log(a);
  }
}

myFunction();

> will log 1
> variable 'a' is declared in the function definition and then accessed in the body of the if statement
*/

function myFunction() {
  let a = 1;

  if (true) { //boolean value 'true' used as an argument
    // same as saying: if (1 === 1) or some truth statement
    // since condition is met (true), block of code in this clause will execute
    console.log(a);
  }
}

myFunction();
///////////////////////////////////////////////////////////////////////////////////////////////////
/*
5. 

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);  //1 
    //since "a" is declared inside this conditional block, JS interprets this as trying to access 
      the "a" declared in line 83, not in line 77 (outside this conditonal block)
    let a = 2;  //let declaration using the same variable name declared outside of its scope is permissible
    console.log(a);  //2
  }
}

myFunction();

>ReferenceError: Cannot access 'magicTreat' before initialization will occur
> variables declared by "let" are NOT available until the code runs
> the "let" statement on line 83 creates a NEW VARIABLE "a", not available on line 80
> attempting to reference "a" before assigning it a value causes a ReferenceError 
> although the scope of "a" should be the entire block (conditional clause), 
  JS "hoists" the variables defined by "let" to the beginning, BUT
  in the process creates a "TEMPORAL DEAD ZONE", in which the variable EXISTS BUT DOES NOT HAVE A VALUE!
  NOT EVEN a value of UNDEFINED!! (more on this later)

*/

function bakery() {
  let magicTreat = 'galaxyBar'; 

  if('true' === 'true') {
    console.log(magicTreat); // CAN reference variables that are declared (in a scope outside this conditional scope) 
    // let magicTreat = 'chocolate unicorn' //ReferenceError will be thrown if a similar variable is again declared with LET inside this scope
    // console.log(magicTreat);
  }
}

bakery();

function hildasCharms() {
  let chocoPotion = 'newt flavored'; 

  if('true' === 'true') {
    console.log(chocoPotion);
    chocoPotion = 'dark cherry'; //in this case, 'chocoPotion' has been reassigned to a different value 
    console.log(chocoPotion);
  }
  console.log(chocoPotion); 
  //dark cherry, can be accessed within the scope of where the variable was initially declared,
  // in this case, "let chocoPotion..." statement was declared inside this function.
}

hildasCharms();
//console.log(chocoPotion): cannot access variables declared with "let" or "const" inside other blocks