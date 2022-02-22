let louiseB = {
  louAcc: 'pink bunny hat', 
  louShirt: 'green', 
};   // note: declarations return undefined

let tinaB = {
  tinAcc: 'black-rimmed glasses', 
  tinShirt: 'blue', 
};

let geneB = {
  geneAcc: 'blue keyboard', 
  geneShirt: 'yellow',
};

let obj = Object.assign('okay'); //needs at least one argument

let firstGen = ['pikachu', 'charmander', 'bulbasaur', 'squirtle']; 
let secGen = ['cyndaquil', 'chikorita', 'totodile'];
let thirdGen = ['torchic', 'treecko', 'mudkip']; 

Object.assign(firstGen, secGen, thirdGen); 

console.log(firstGen); // using arrays for an Object.assign's arguments return:
[ 'torchic', 'treecko', 'mudkip', 'squirtle' ]
// console.log(Array.isArray(obj));

const pokemonOne = {
  type: 'water',
  name: 'mudkip',
  evolution2: 'marshtomp'
}

const pokemonTwo = {
  type: 'fire',
  name: 'torchic'
}

const pokemonThree = {
  type: 'grass',
  name: 'treecko'
}

console.log("")
let merge = Object.assign({}, pokemonOne, pokemonTwo, pokemonThree);
console.log(merge);
console.log(pokemonOne);
console.log(pokemonTwo);
console.log(pokemonThree);
//the properties of the object passed as the method's FIRST argument will be overwritten
// by the properties of the last object in its argument if they share the same key. 