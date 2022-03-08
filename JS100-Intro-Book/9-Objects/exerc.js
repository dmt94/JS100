/* 
Create a function that creates and returns a copy of an object.
The function should take two arguments:
1. the object to copy and 
2. an array of the keys that you [want] to copy (optional)
Do not mutate the original object.

The function should let you omit the array of keys argument
when calling the function. If you do omit the argument,
the function should copy all of the existing keys from the object.
*/

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function objCopy(obj, arr) {
  let newObj = {}
  if (arr) {
    for (let val of arr) {
      newObj[val] = obj[val]
    }
    return newObj;
  }
  else {
    return Object.assign(newObj, obj);
  }
}

let newObj = objCopy(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = objCopy(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = objCopy(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }