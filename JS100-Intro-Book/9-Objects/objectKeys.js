/*
The Object.keys static method returns an 
[object's keys] as an [array].
      object's keys are it's properties/property name
You can iterate over that array using 
any technique that works for arrays
*/

let person = {
  name: 'Louise',
  surname: 'Belcher',
  age: 9,
  occupation: ['student', 'part-time worker at Bob\'s Burgers'],
  'trademark look': 'pink bunny hat',
  residence: 'Ocean Avenue',
  'family business': 'Bob\'s Burgers',
  family: {
    parents: {
      mother: 'Linda Belcher',
      father: 'Bob Belcher',
    },
    siblings: {
      sister: 'Tina Belcher',
      brother: 'Gene Belcher',
    }
  }
}

let personKeys = Object.keys(person); 
/*since Object.keys returns keys as if it is an array,  
you can use array methods on it
*/
console.log(personKeys);
personKeys.forEach(key => {
  console.log(person[key])
})

console.log(Array.isArray(personKeys)); //check if indeed personKeys is an array
console.log("");

/*
Note that Object.keys returns the object's own keys: 
it does NOT include any keys from the prototype objects 
   >> wont include similar properties and values with 'person' object
*/

let person2 = Object.create(person);
person2.name = 'Tina';
person2.age = 13;
person2['trademark look'] = 'eyeglasses and bob haircut with bangs';

person2.family.siblings.sister = 'Louise';
/* BECAUSE the value for the first level key 'family' is an object--
we are dealing with nested objects, Object.keys might not go through these nests
*/
console.log(`Tina's siblings are: ${person2.family.siblings}`); // will refer to siblings as [object Object]
/* update still occured, but the Object.keys method will not be able to 
reach this level, likewise, it is also not included when returning the object's value
*/
console.log(person2.family.siblings); // will display the values for sibling in format: { sister: 'Louise', brother: 'Gene Belcher'}

let person2Keys = Object.keys(person2);

console.log(person2);
console.log(person2Keys);

person2Keys.forEach(key => {
  console.log(person2[key])
});

console.log("\n");

//still won't "show" if you log person2 because 'Gayle' is still part of a nested object. 
//the value of the key 'family' is an object, but the modification does exist
person2.family.aunt = 'Gayle'; 

person2NewKeys = Object.keys(person2);  //made new after 'Gayle' addition
console.log(person2); 

function logValues(keyVariable, objectName) {
  keyVariable.forEach(key => {
    console.log(objectName[key])
  })
};

logValues(person2NewKeys, person2);
console.log(person2.family); //the addition of 'aunt Gayle' will show
console.log(person2);


/*
ULTIMATELY, to access an object's property, you have to use dot notation.
So, in the case of nested objects, you'd have to access it this way
*/
person2FamilyKeys = Object.keys(person2.family);
console.log(person2FamilyKeys); //logs property names/keys
console.log("");

person2FamilyKeys.forEach(key => { 
  console.log(person2.family[key]) //logs values of the names/keys of person2FamilyKeys
});


/*
you should only rely on the iteration order when you know 
that all of the keys will be alphabetic.
*/