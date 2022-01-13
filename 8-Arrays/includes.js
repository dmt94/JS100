/* 'includes' method determines whether an array includes a given element

Internally, 'includes' uses === to compare 'elements' of the array with the argument. 
That means we can't use includes to check for the existence of 
a nested array or an object unless we have the same object 
or array we're looking for
*/


let a = [1, 2, 3, 4, 5];
console.log(a.includes(2));         //outputs true


let inner = [11, 12];
let b = [9, 10, inner, 15];
console.log(b.includes(inner));     //outputs true
console.log(b.includes(11));        //outputs false
