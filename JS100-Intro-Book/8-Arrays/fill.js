let pokemonList = [
  'pikachu',
  'snorlax',
  'mewtwo',
  'charmander',
  'lopunny',
  'sylveon',
  'shinx'
];

console.log(pokemonList.fill('ditto', 1, 6)); //end index is not included-- this is where it stops
console.log(pokemonList.fill('dialga')); // every element changes to this

let a = [5, 4, -3, 20, 17, -33, -4, 18]
//       |\  \  x   |  | \   x   x   |
//      [4,1, 4,   20, 16, 1,       18]

// Let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1
