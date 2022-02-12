/*
slice method -- extracts and returns a PORTION of the array
Two optional arguments are taken
(extraction begins, extraction ends) end is not included
*/

let fruits = ['mango', 'orange', 'banana', 'pear', 'apple']
console.log(fruits.slice(1, 3)) //=> fruits[1] and fruits[2], fruits[3] is not included
// element with the index (of the second argument) is NOT returned
// orange, banana

console.log(fruits.slice(2)) //=> fruits[2]-> all after; second argument defaults to rest of array
// banana, pear, apple (includes element at index 2)

console.log(fruits.slice()) // no arguments duplicates the array
