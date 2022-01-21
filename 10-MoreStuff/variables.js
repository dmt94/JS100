/* Developers sometimes talk about [references] instead of [pointers]. 
At LS, we use both terms interchangeably. 
You can say that a [[variable]] "points to" or "references" an [object] in [memory], 

and you can also say that the [pointers] stored in [[variables]] are [references]. 

JS doesn't make a distinction between references and pointers
*/



//PRIMITVE VALUES 
let count = 1; // mem address: 0x1234, value: 1 
count = 2;     // mem address: 0x1234, value: 2

// a variable named "count" is declared and "initialized" to a VALUE of 1 (primitive value)
// variable "count" is reassigned to a new VALUE of 2 (primitive value)

// variable > allocated to a spot somewhere in [memory] to hold its VALUE
// With (most) PRIMITIVE VALUES, the actual VALUE of the variable gets stored in this [memory]

// [count] variable may end up at address 0x1234 in the comp's [memory], 
// and that [memory] at that address gets set to 1, and then 2


/*WHAT HAPPENS HERE? 
 > every time a JS program creates a new variable: 
    > JS picks a spot somewhere in [its memory] to [hold] its VALUE 
    > actual VALUE of the variable is STORED in this allocated memory

 > every time code on line 13 runs, JS creates a brand new variable
 > if that function gets called many times, 
 you may end up with many different count variables-- all stored in diff locations in memory
 JS discards these variables and their values when it no longer needs them
*/

let a = 5; 
let b = a; 
a = 8;  //reassignment of the variable "a" to new value of 8 
// came AFTER variable "b" is declared and initialized to variable "a", which points to value 5

console.log(a);
console.log(b);

// a and b point to different memory locations. 
// When we assign a value to either variable, 
// the value gets stored in the appropriate memory location
// If you later change one of those memory locations, 
// it does not affect the other memory location, 
// even if they started off with the same value. 
// Therefore, the variables are independent when they contain primitive values.


///////////////// O B J E C T /////////////////////////////////////////////////////////


/*
[obj address] doesn't change, 
but its [value] changes to the address of the [[object]] currently assigned 
to the [variable].
*/

let obj = { a: 1 }; // [obj] mem address: 0x1248, value: 0x40011fe0 > [[object]] mem addr: 0x40011fe0, value: { a: 1 }
obj = { b: 2 };     // [obj] mem address: 0x1248, value: 0x40012000 > [[object]] mem addr: 0x40012000 value: { b: 2 }
obj.c = 3;          // [obj] mem address: 0x1248, value: 0x40012000 > [[object]] mem addr: 0x40012000 value: { b: 2, c: 3 }
 

                                                  //value at mem address is a pointer to the actual [[object]], can change
                                                  //value changes to the address of the [[object]] currently assigned to the variable
  
                    // [obj] always have the same address


///////////////// A R R A Y /////////////////////////////////////////////////////////
/* arrays in JS, are objects
*/

let c = [1, 2];
let d = c; // although d has the same 'pointer value' as c, it is stored in a diff memory location (@ d location)
c = [3, 4] // thus when c is reassigned, we're not changing d -- it still points to the original array

console.log(c);  // => [3, 4]
console.log(d);  // => [1. 2]

