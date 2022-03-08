// function divide(a, b = 10) {
//   return b / a;
//   }
  
//   console.log(divide(2)); // 5
//   console.log(divide(undefined, 10)); // NaN
//   console.log(divide(10, undefined)); // 1
//   console.log(divide(2, 20)) // 10

//   function combine(stringOne = 'Hello', stringTwo) {
//     return stringOne + ' ' + stringTwo;
//   }

//   console.log(combine('World')); // World undefined
//   console.log(combine('World')); // World undefined


//   function combine2(stringOne, stringTwo = 'Universe') {
//     return stringOne + ' ' + stringTwo;
//   }

//   console.log(combine2('Good Day'));     // Good Day Universe
//   console.log(combine2('Good Morning')); // Good Morning Universe


//   /*
//   More block scopes
//   */

// const a = 'foo';
// if (1 === 1) {
//   const a = 'bar';
// }

// console.log(a);    // => 'bar'


// console.log('3' + 3 + 10 + 11); // 331011
// // using + arithmetic, JS coerces the number to a string when other operands contain at least one string

// console.log('3' < 10); //true
// // using comparison operators, JS coerces the string to a number

// console.log('3' === 3); //false
// //unless using a strict equality/inequality operator

// console.log('okay' == 'OKAY'); //false 
// // non-strict equality/inequality are still case-sensitive : lowercase and uppercase have diff values 


// console.log('okay' < 'okayy'); //true 

// let aNumber = 100;
// if (aNumber) {
//   console.log(typeof aNumber);
// }
// else {
//   console.log("this is not true");
// }


// let foo = null;
// let bar = 'qux';
// let isOk = foo || bar;
// console.log(typeof isOk); 
// // logical operator is used
// // string, it is a "truthy value still", but it is NOT  boolean value


// let newCompare = '0' < 10
// console.log(typeof newCompare); 
// // boolean, a comparison operator is used


let a = 5; 
// console.log(--a); // 4
console.log(a--); // 5 
console.log(a); // 4


let totallySpies = [
  'freeze bracelet', 
  'fountain pen microphone', 
  'laser lipstick', 
  'butterfly barrette bomb'
];
for (let i = 0; i < totallySpies.length; i++) {
  console.log(totallySpies[i]);
}

console.log(i);