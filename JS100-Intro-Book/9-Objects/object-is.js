/* Object.is() determnines whether two values are the same value

return value: Boolean (true or false) indicating whether or not
the two arguments are the same value
*/

let a = 'hello';
let b = 'universe';
let c = 'universe';

console.log(Object.is(a, b)); //false >> same type (String), but not the same value
console.log(Object.is(c, b)); //true >> same type (String), and value 'universe' === 'universe'

let arrayEx = [1, 2, 3, 4, 5];
let arrayEx2 = [1, 2, 3, 4, 5];

console.log(Object.is(arrayEx, arrayEx2)); 
//false >> although both arrays look like they have the same array, they
//do NOT reference THE SAME object in memory

let anotherArray = ['stay', 'present', 'stay', 'still'];

let anothArray2 = anotherArray;
let anothArray3 = anotherArray;

console.log(Object.is(anothArray2, anothArray3)); 
//true >> both values reference the same object! 

let objEx = {
  name: 'Maries', 
  status:'Studying', 
  mood: 'OK', 
  learning: 'JavaScript'
}

let anotherObject = {
  name: 'Agni',
  status: 'Gym Leader', 
  pokemon: 'Cinderace',
  location: 'Firestorm Mountain',
  specialty: 'Fire', 
  badge: 'Breathing Badge',
}

let anotherObjectCopy = Object.assign({}, anotherObject); // returns a copy of second argument

console.log(Object.is(objEx, anotherObject)); //false 
console.log(Object.is(anotherObject, anotherObjectCopy)); 
// false, a new object was created that have the same properties as its argument
// this does NOT mean that this value references the SAME object as its argument


console.log('null, null = ' + Object.is(null, null));  // true
console.log('undefined, undefined = ' +Object.is(undefined, undefined));  // true

console.log('NaN, NaN = ' + Object.is(NaN, NaN));  // true, if using strict equality operator (===), NaN is not equal to NaN
console.log('-0, +0 = ' + Object.is(-0, +0));  // false, if using strict equality operator (===), -0 === 0
console.log(-0 === 0); // true

console.log("");
console.log(Object.is('a' === 'a', 3 === 3)); // true, two comparison expressions that both evaluate to true



