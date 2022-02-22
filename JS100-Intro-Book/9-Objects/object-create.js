const gymLead = {
  name: 'Agni',
  status: 'Gym Leader', 
  pokemon: 'Cinderace',
  location: 'Firestorm Mountain',
  specialty: 'Fire', 
  badge: 'Breathing Badge',
}

const iceGymLead = Object.create(null); //creates an empty object
//argument needs to be null or an existing object that will act as its prototype

console.log(Object.create(gymLead));

const windGymLead = Object.create(gymLead);
windGymLead.name = 'Temari';
windGymLead.pokemon = 'Noivern';
windGymLead.location = 'Sand Kingdom';
windGymLead.specialty = 'Wind';
windGymLead.badge = 'Cave Badge';
console.log(windGymLead); //logs object's own properties

console.log(Object.keys(windGymLead)); // did not include prototype properties

for (let key in windGymLead) {
  console.log(key, windGymLead[key]);  // key , values of windGymLead including its inherited properties
}
//inherited properties go last, its own properties go first in order of assignment


//anonymous object? 
// const psychicGymLead = Object.create({name: 'sophia', age: 22});
// psychicGymLead.name = 'Raven';

// console.log(psychicGymLead);


function inheritFrom(obj) {
  let newObj = Object.create(obj);
  return newObj;
}

let check = inheritFrom(gymLead);
let emptyObj = {};

check.color = 'white';

// console.log(inheritFrom(gymLead)); // {} empty object
let arr = []
for (let key in check) {
  console.log(key, check[key]); //lists its prototype's key-value pair
  arr.push(key);
}
console.log(arr); // would include its inherited properties and its own properties