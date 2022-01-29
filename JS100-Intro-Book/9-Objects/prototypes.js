/*
objects can INHERIT from other objects

when object 'a' INHERITS from object 'b':
  > b is the prototype of a
  > prototype = 'original'

what this means? 
  > a has access to properties defined on b, 
  even though it doesn't define those properties itself

what you need to know at this point:
  > INHERITANCE lets ONE OBJECT use the PROPERTIES defined by
    another object and that PROTOTYPES * implement * inheritance
*/

// STATIC METHOD ///////////////////////////////////////////////
/*
The static method [Object.create] provides a simple way to create 
a new object that inherits from an existing object:
*/
let roboCat = {name: 'Smokey', model: '2022H', owner: 'Hunkle' };
let roboKitty = Object.create(roboCat);
// roboKitty.owner = ['Hunkle', 'Kirei']; //adds new properties 
console.log(roboKitty);           //=> {}
roboKitty.model = '2027TH';
roboKitty.owner = 'Kirei and Hunkle';
console.log(roboCat);
console.log(roboKitty);           //outputs what changed?
console.log(roboKitty.name);
console.log(roboKitty.owner);

/*
Object.create(prototype):
creates an INHERITANCE RELATIONSHIP from CHILD OBJECT to PARENT OBJECT

As seen above, although child object "roboKitty" doesn't explicitly define it,
it can use the properties in "roboCat" 
Other techniques and more later in CC
*/

let roboChicken = {name: 'Brooklyn', model: '99', residence: 'NYC'};
let roboEgg = Object.create(roboChicken); //static method Object.create
let nullCheck = {}; //typeof nullCheck => object


function checkReturn(variable) {
  if(variable === null || variable.length === 0) {
    return 'variable is null'
  }
  else {
    return variable
  }
  // return variable;                //=> roboEgg returns {}
};

console.log(roboChicken);
console.log(checkReturn(roboEgg)); //=> {}
console.log(checkReturn(nullCheck)); //=> {}
console.log(typeof roboEgg);
console.log(typeof nullCheck);
/*
NOTE: inheritance relationships will be explained in more detail later
*/





