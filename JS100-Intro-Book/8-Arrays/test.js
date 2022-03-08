

let arr = [];
arr.length = 3; 

let arr2 = arr.filter(element => element === undefined);
console.log(arr2); // []

let arr3 = arr.forEach(element => console.log(element));
console.log(arr3); // undefined

arr[1] = 3; //assigning 3 to the array at index 1
// arr.length ;
let arr4 = arr.forEach(element => console.log(element));
console.log(arr4); // forEach will always return undefined, but still logged 3

console.log(arr); 
// unset elements are treated as "missing", empty items
// [ <1 empty item>, 3, <1 empty item> ]

console.log(Object.keys(arr)); // ['1']
// The "keys" in an array are the index values of its elements
// 3 is located at index 1, as revealed in the array returned by Object.keys()

/*
Unset values are created when there are "gaps" in the array; 
they show up as empty items until you try to use their value:
*/
