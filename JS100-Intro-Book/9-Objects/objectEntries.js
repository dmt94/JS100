/*
Object.entries returns: an array of NESTED ARRAYS
 > returns an ARRAY of NESTED arrays , [key, value] format for each element
each nested array has two elements: object's keys and its corresponding values
*/

let person = {name: 'Bob', age: 44, restaurant: 'Bob\'s Burgers', };
let pEntries = Object.entries(person);

console.log(pEntries); // [ ['name', "Bob's Burgers"], ['','']... ]

let personTwo = Object.create(person);
personTwo.age = 13;
personTwo.family = 'Linda';
personTwo.name = 'Tina'; 
let pTwoEntries = Object.entries(personTwo);
let moreNest = Object.entries(personTwo.family); // keys are index, values are characters

console.log(pTwoEntries);
console.log(moreNest);

//for in loop    each val : the INDEX of the entry pair array
for (val in pEntries) { 
  console.log(val, pEntries[val]); 
  /* entries: logs the INDEX of each entry pairs 
  AND pEntries[val]: the VALUES of those indexes
                        (each element in the entry, 
                        the key-value pair in an array format) */
}

//for each       each val : an entry pair ARRAY
pEntries.forEach(val => {
  console.log(val);     //logs each array [key, value]
})



