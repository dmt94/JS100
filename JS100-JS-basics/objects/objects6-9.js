/*
Is it true?
6. We are experimenting with some code to get 
more comfortable working with objects. 
Run the snippet below and explain why "It's true!" is never output.

> for/in iterates over all enumerable properties
of an object including any properties inherited from another object
> key names are always strings and 'true' != true, 
the true condition in the for/in loop is not the same as the key
*/
let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) { 
  if (prop === 'true') { //changed true to 'true'
    console.log("It's true!");
  }
}
/////////////////////////////////////////////////////////////////////////////
/*
Car Keys
7. Write code that stores all of the vehicle property names 
in an array called keys.
*/
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let carKeys = [];
for (let keys in vehicle) {
  carKeys.push(keys);
}
console.log(carKeys);
/////////////////////////////////////////////////////////////////////////////
/*
Convert an object to a nested array
8. Convert the person object into a nested array nestedPerson, 
containing the same key-value pairs.

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
*/
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let personNest = Object.entries(person);

console.log(personNest);

//for/in version:
let nestedPerson = [];

for (let property in person) {
  nestedPerson.push([property, person[property]]);
}
/////////////////////////////////////////////////////////////////////////////
/*
...and vice versa
9. Write code that does the reverse, 
starting from a nested array of pairs and building an object.

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
*/
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Object.fromEntries()
// transforms key-value pairs into an object
console.log(Object.fromEntries(nestedArray));

// for loop and pushing to OBJECT
let personOne = {};

for (let i = 0; i < nestedArray.length; i++) {
  let pair = nestedArray[i];

  personOne[pair[0]] = pair[1];
}

console.log(person);
// { title: 'Duke', name: 'Nukem', age: 33 }

