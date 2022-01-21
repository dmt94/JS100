/* for/in loops

> iterates over ALL ENUMERABLE PROPERTIES OF AN OBJECT, 
  INCLUDING PROPERTIES INHERITED FROM ANOTHER OBJECT
*/

// for/in OBJECT
let pokemons = { fire: 'charmander', water: 'squirtle', grass: 'bulbasaur' };
for (let key in pokemons) {
  console.log(key) //logs keys of object
}

for (let key in pokemons) {
  console.log(key, pokemons[key]); //logs each key with their respective values
}

//  for/in ARRAY
let arr = ['ninetales', 'chansey', 'articuno' ] ;
for (let index in arr) {
  console.log(index);
}

//when using for/in on an array, it iterates over the INDEX VALUES
// INDEX are the "KEYS" from the array. You can use INDEX to access values too

for (let index in arr) {
  console.log(index, arr[index]); //logs array elements/values with their respective index
}


////////////////////////////////////////////////////////////////////////////////////
// for/of loops >> iterates over the values in an array

let waterP = ['Primarina', 'Milotic', 'Palkia'];
for (let value of waterP) {
  console.log(value);
}

/*
for/of is similar to for/in, but it iterates 
over the values of any "iterable" collection. 
For our purposes, the only iterable collections 
are arrays and strings. 
*/

let str = "Pidgeotto";
for (let char of str) {
  console.log(char);
}

console.log("");

let fairyP = {
  psychic: 'Gardevoir', 
  rock: 'Diancie',
  grass: 'Whimsicott',
  water: 'Tapu Fini',
  dragon: 'Altaria',
  dark: 'Grimmsnarl'
};
//trying for/of in an object
      // for (let x of fairyP) {  
      //   console.log(x); //outputs as "TypeError: fairyP is not iterable"
      // }

