/////////////////////////////////////////////////////////////////////////////
/*
Cloning a Person
10. Write a function [clone] that takes an [object] as [argument] and 
[returns a shallow copy ] of that argument. 
  > A shallow copy returns a [new] object 
    that is a copy of the original object. 

However, only the object itself and any properties 
with primitive values are duplicated. 
Properties that are themselves objects are copied 
"by reference" -- that is, only a pointer to the object is copied.
*/
function clone(obj) {
  let copy = {};
  let objA = Object.entries(obj)
  for (let i = 0; i < objA.length; i++) {
    let pair = objA[i];
    copy[pair[0]] = pair[1];
  }
  return copy;
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false

console.log(clonedPerson);

//simple Object.assign
/*
function clone(obj) {
  return Object.assign({}, obj)
}
There are different ways to clone an object. 
The arguably easiest one is to use the Object.assign method. 
Note that this method only creates a shallow copy, 
which means that if you mutate one of the values in person, 
they will be mutated in clonedPerson as well. For example:
*/