let emptyArray = [];
emptyArray.length = 4;
console.log(emptyArray);      //outputs > [<4 empty items>]

emptyArray[0] = 'Jess';
console.log(emptyArray);      //outputs > ['Jess', <3 empty items>]

emptyArray[1] = undefined;    //declaring the value undefined at index 1
console.log(emptyArray);      //outputs > ['Jess', undefined, <2 empty items>]

let arrayKeys = Object.keys(emptyArray);  //keys of an array are the index values of its elements
console.log(arrayKeys);                   //outputs ['0', '1']
console.log(arrayKeys.length)             //outputs 2


let a = new Array(3);       //a different way to declare an array
console.log(a);
a[0] === undefined; /* (===)this is NOT a declaration: '===' is a strict equality operator that
returns true when the operands have the same TYPE and VALUE, returns false otherwise
comparison operators RETURN A BOOLEAN VALUE: [true] or [false]
*/

function arrayCheck(array) {
  return array[0] === undefined;
  }

console.log(arrayCheck(a)); //outputs true
