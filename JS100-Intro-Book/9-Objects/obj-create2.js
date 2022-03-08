
let obj1 = {
  a: 1,
  b: 2
}

let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

console.log(obj2); //logs objects own properties

// for/in is good for objects, arrays, strings
for (let key in obj2) {
  console.log(key);  // for/in includes object's prototype properties
}

for (let key in obj2) {
  if (obj2.hasOwnProperty(key)) {
    console.log(key, '+', obj2[key]); // log key, value
  } //is this key its own property? returns true or false
}

let obj3 = {
  'object name': 'Turqoise', 
  gem: 'Sapphire',
  league: 'Mercury', 
  rank: 'Knight',
}


for (let key in obj3) {
  console.log(obj3[key]); //getting values from objects
}



let leagues = [
  'earth', 
  'venus', 
  'jupiter', 
  'mercury', 
  'mars',
  'pluto',
  'artemia',
  'uranus',
  'saturn',
];
// for/of is used on arrays and strings (not to be used on objects)
for (let val of leagues) {
  console.log(val);
}

