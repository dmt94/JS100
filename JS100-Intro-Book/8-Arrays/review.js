let array = [1, 4, 3];
array[array.length+1] = 10;

// array[array.length+1] = 11;

// console.log(array); // [ 1, 4, 3, 10, <1 empty item>, 11 ]


console.log(array); // [ 1, 4, 3, <1 empty item>, 10 ]


const array2 = ['blueberries', 'strawberries', 'cherries'];
array2[1] = 'coconut';

console.log(array2); // [ 'blueberries', 'coconut', 'cherries' ]
// array2 = ['blueberries']; // TypeError: Assignment to constant variable



const colors = Object.freeze(['red', 'blue', 'turqoise', 'brown', 'silver']);
// colors[2] = 'pink';

console.log(colors); //TypeError: Cannot Assign to "read only property" [element] of object 'object type'


const animals = Object.freeze(
  {
    cat: ['Garfield', 'Tom', 'Cheshire Cat', 'Schrödinger'], 
    dog: 'Brian',
    rabbit: 'Bugs Bunny',
    fox: 'Naruto'
  }
);

let schro = animals.cat[3];
animals.cat[3] = 'Neko';
console.log(animals.cat[3]); //Neko (Object.freeze only works one level deep)

// animals.dog = 'Scooby';
console.log(animals.dog); // TypeError: Cannot assign to read only property 'dog' of object '#<Object>'


let newA = 'a'.concat('beautiful', ['peace', 'stillness', 'magic']); //if caller is not an array
//can work with strings, but mostly used to concatenate arrays together
let arrayA = ['a'].concat('beautiful', ['peace', 'stillness', 'magic']); //if caller is an array
let emptyA = [].concat('beautiful', ['peace', 'stillness', 'magic']); //if caller is an empty array
//combines all the arguments together into an array, in the order of how it appears in the argument
let objA = [].concat('gym', {music: 'Taylor Swift', fashion: 'Gucci'}, ['pink', 'green']);


let objLit = {
  music: 'SZA', 
  color: 'Evergreen Fog'
}

// let objA2 = objLit.concat('gym', ['moon', 'stars'], { m: 'The Weeknd' });
//cant have an object as a caller for the concat() method

let stringObj = 'a'.concat('beautiful', {music: 'Taylor Swift', fashion: 'Gucci'});

 
console.log(newA); // abeautifulpeace,stillness,magic      returns string
console.log(arrayA); // [ 'a', 'beautiful', 'peace', 'stillness', 'magic' ]     returns array
console.log(emptyA); // [ 'beautiful', 'peace', 'stillness', 'magic' ]
console.log(objA); // 
console.log(stringObj); // abeautiful[object Object]


console.log(String(tryFunc())); 
// 'software developer'
// if there is a return value that can be coerecd into a string, then that is what it will return


function tryFunc() {
  let career = 'software developer';
  let objLit = {
    music: 'SZA', 
    color: 'Evergreen Fog'
  }
  let testArray = ['sunny', 'windy', 'snowy'];
  return testArray;
}

/*
String(function());
if function returns undefined, undefined => 'undefined' 
Also works with object, array, etc. => 'object'
if function returns a value that is a string or can be coerced into a string => 'string representation of that value'  
*/

let newConcat = tryFunc().concat('beautiful', {music: 'Taylor Swift', fashion: 'Gucci'});

console.log(newConcat);