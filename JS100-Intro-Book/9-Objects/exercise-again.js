/*
Create a function that creates and returns a copy of an object. 
The function should take two arguments: 
the object to copy and an array of the keys that you [want] to copy. 
Do not mutate the original object.

The function should let you omit the array of keys argument 
when calling the function. If you do omit the argument, 
the function should copy all of the existing keys from the object.


I/O
input two arguments: object to copy, array of keys to copy
 - array argument is optional
 - if array is omitted, function should copy all of the existing keys from the object
output: 
 - a new object with [specified keys] (if array is given)
 - a new object with [all keys] in original object
 */

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(obj, array=Object.keys[obj]) {
  let copy = {};

  if (array) {
    array.forEach(function(key) {
      copy[key] = obj[key]; // setting key: value pair
    });
    return copy; 
  }
  
  else {
    return Object.assign(copy, obj);
  }
}

  
let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }