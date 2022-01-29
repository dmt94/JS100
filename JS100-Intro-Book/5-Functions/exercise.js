/*
1. What does this code log to the console? 
Does executing the foo function affect the output? 
Why or why not?
-------

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
-------
ANSWER:
-------
- this code logs '1' into the console.
executing foo() does NOT affect the value assigned to bar
in line 6 because JS functions create an inner scope.
The bar variable on line 8 is not the same as the one on line 6.
In the end, foo() does not affect the final output.

In comparison to:
let bar = 1;
function foo() {
  bar = 2;
}

foo();
console.log(bar);

console.log would log '2' since 'bar' on line 22 is now
in scope within the function. So line 24 changes 
the global variable 'bar' to '2'.


========================================================================


4. What does the following code log to the console?
-------
function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');
-------
ANSWER:
-------
- The code would not log into the console because the statement 'return'
was written before console.log, thus terminating the function before it can
log anything.


========================================================================


5. What does the following code log to the console?
-------
function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');
-------
ANSWER:
-------
- This code also does not log anything because the function returns a value,
but doesn't *do* anythnig with it. It does not write it to the console.

*/




