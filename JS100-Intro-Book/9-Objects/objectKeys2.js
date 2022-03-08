let pritchett = {
  surname: 'Pritchett',
  residence: 'Los Angeles',
  family: {
    spouse: '',
    siblings: [],  //can leave empty for objects that inherit the prototype
    children: [],
    grandchildren: [],
  }
};

let claire = Object.create(pritchett);
claire.name = 'Claire';
claire.surname = 'Dunphy';
claire.family.spouse = 'Phil';
claire.family.siblings = ['Mitchell', 'Manny', 'Joe'];
claire.family.children = ['Haley', 'Alex', 'Luke'];
delete claire.family.grandchildren;

// console.log(claire);
console.log(claire.family);
// console.log("");
// console.log(pritchett);
// console.log(pritchett.family.spouse);

let mitchell = Object.create(claire);
mitchell.name = 'Mitchell';
mitchell.surname = 'Pritchett';
mitchell.family.spouse = 'Cam';
mitchell.family.siblings = ['Claire', 'Manny', 'Joe'];
mitchell.family.children = 'Lily';
mitchell.family.pet = 'Larry'; //can create nested objects

console.log(mitchell);
console.log(mitchell.family);
console.log(pritchett); 
/* nested object property values from the latest object that 
inherited the prototype carried over
at this point, we don't know yet and will 
refer back to nested objects */

for (let prop in pritchett) {
  if (pritchett.hasOwnProperty(prop)) {
    console.log(pritchett[prop]);
  }
}

////////////////objects with non-object values////////////////////////////
let apartment = {
  city: 'Irvine',
  luxury: true,
  bedroom: 2, 
  bathroom: 2, 
  patio: true,
  kitchen: 'modern',
  rent: 2900,
  units: ['ares', 'artemis', 'demeter',],
}

let orangeGrove = Object.create(apartment);
orangeGrove.rent = 2250; 
orangeGrove.bedroom = 1;
orangeGrove.bathroom = 1;
// orangeGrove.units[0] = 'hestia'; //when elments of existing arrays and objects are modified, change affects?
orangeGrove.units = ['strawberry', 'apple'];    //can modify existing
delete orangeGrove.units; // will delete the modification above, but prototype still exists until you delete prototype specifically
//can't delete 'units' property even if it wasn't modified

delete apartment.units; //deletes the prototype property directly

console.log(orangeGrove);
console.log(apartment);
console.log(orangeGrove.units); 
//if its prototype prop is deleted (line 69), 
//then calling on this inheritance will >> undefined 

let objKeys = Object.keys(orangeGrove);
s
//logs the key and the value <- using objectName[key]
function logValues(keyVariable, objectName) {
  keyVariable.forEach(key => { //forEach iterates over the keys
    console.log(key, objectName[key]) 
  })
};

logValues(objKeys, orangeGrove); //logs the VALUES of each key--in this case, only the modified properties are shown

//Object.keys returns that object's OWN keys, 
//for in loop can include values/ properties of its prototype
console.log("");
for (let key in orangeGrove) { //includes properties that this object inherited from its prototype
  console.log(key, orangeGrove[key]); //logs the values of the keys
}


