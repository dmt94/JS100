/*
ITERATE over an object's:
- KEYS
- VALUES
- BOTH


for/in loop
> iterates over all the keys in the object
> don't need an [initializer] [ending condition] or [increment clause]
> loop ITERATES over all the keys in the object
> [key] is assigned to a variable which you then use to 
ACCESS the object's [values]
*/
let person = {
  name: 'Kirei',
  age: 22,
  food: 'chicken sandwich',
  height: '5\'2',
}

for (let prop in person) {   //variable 'prop' is declared: variable prop receives a key from the object UNTIL object runs out of key-value pairs
  console.log(person[prop]); //prop is used inside the loop body to access and log the corresponding value
};            /* note: bracket notation [prop] is used bc 'prop' is a VARIABLE
               that CONTAINS a [property name]. Distinction is subtle. 
                > in the 2nd iteration of the loop, prop will be set to age
                > if 'person.prop' was used instead of 'person[prop]', 
                  this will evaluate to UNDEFINED
                  bc prop is NOT one of the property names in the person object.

                > We actually want 'person.age', but we can't use that since 
                we'll want a different property name during each iteration.

                > When we write person[prop], prop gets evaluated as a variable, so
                person[prop] gets evaluated as person['age'], and that 
                RETURNS the value of the desired property

for/in also iterates over the properties of an object's prototypes as well
*/
let belcher = { surname: 'Belcher', 
    haircolor: 'black', 
    eyecolor: 'brown',
    home: 'Ocean Avenue',
    relations: {
      landlord: 'Mr. Fischoeder',
      friends: 'Teddy',
    }
  };

let bobBelcher = Object.create(belcher);
bobBelcher.name = 'Bob';
bobBelcher.gender = 'male';
bobBelcher.age = 44;
bobBelcher.occupation = 'restaurant owner'

let lindaBelcher = Object.create(bobBelcher);
lindaBelcher.name = 'Linda';
lindaBelcher.gender = 'female';

let tinaBelcher = Object.create(lindaBelcher);
tinaBelcher.age = 12;
tinaBelcher.occupation = 'student';

//log check
console.log(bobBelcher); // logs what is modified/different from the prototype
console.log(lindaBelcher);
console.log(lindaBelcher.age);
console.log(tinaBelcher);
console.log(tinaBelcher.age);
console.log("");

for (let prop in bobBelcher) { //includes properties that this object inherited from its prototype
  console.log(bobBelcher[prop]);
}
console.log("");

/*  .hasOwnProperty method :
    takes the name of a property and RETURNS [true] if it is the name of one
    of the calling object's own properties, [false] if not
  */ 
//limit iteration to an object's own property -- doesn't include inherited properties
for (let prop in bobBelcher) { 
  if (bobBelcher.hasOwnProperty(prop)) { //if it has its own property
    console.log(bobBelcher[prop]); //logs values of its own property
  }
};

console.log("");
console.log(belcher);
console.log(tinaBelcher.relations);
tinaBelcher.relations.landlord = 'Jimmy Jr.';
console.log(tinaBelcher.relations);
console.log(belcher);


