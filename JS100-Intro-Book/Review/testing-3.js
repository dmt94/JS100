function product(numOne, numTwo) {
  return numOne * numTwo;
}

let first = product(10, 4);

product(11, 11);

// PREDICATE FUNCTION EXAMPLE AND HOW IT CAN BE USED
const numbers = [1,2,3,4,5,6];

//predicate function
function isEven(number){
  return number % 2 === 0;
}
const evenNumbers = numbers.filter(isEven);
/*syntax makes sense because filter [returns] the elements of an array that 
meets the condition specified
in a callback function: function passed into another function as an argument, which is then invoked inside the outer function
to complete some kind of action

filter(function(element) { block });

*/ 

console.log(evenNumbers);

function multiply(a = 5) {
  return a * a;
}

console.log(multiply()); // 25
console.log(multiply(3)); // 9



//Missing Arguments
function divide(a = 5, b) {
  return b / a;
}

console.log(divide(4)); // NaN
console.log(divide(undefined, 10)); // 2
console.log(divide(2, 20)) // 10



function divide2(a, b = 20) {
  return b / a;
}

console.log(divide2(4)); // 5 
console.log(divide2(undefined, 10)); // NaN
console.log(divide2(10, undefined)); // 2
console.log(divide2(2, 20)) // 10



function multiply2(a, b) {
  return a * b
}


console.log(multiply2(5, 2));  // 10
console.log(multiply2(5));     // NaN !