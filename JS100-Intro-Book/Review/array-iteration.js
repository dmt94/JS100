//map() creates a new array, as a result of calling a function on every element in the calling array

let array1 = [1, 4, 9, 16];

// pass a function to map; simple arrow notation
let map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

//map block
let map2 = array1.map(function(num) {
  let newNum = num * 10; 
  return newNum + 1; 
});

console.log(map2);









//filter() returns new array with all elements that pass the condition created in the function

let colors = [
  'sunrise', 
  'indigo', 
  'navy', 
  'evergreen', 
  'raspberry',
  'onyx',
  'ruby', 
  'mocha', 
  'rose',
  'grey',
  'lavender',
];

//simple arrow notation
let fourLetterColors = colors.filter(color => color.length === 4);

console.log(fourLetterColors);


//multiple line function
let newColors = colors.filter(function(color) {
  if (color[0] === 'r') {
    console.log('check');
    }
  else {
    console.log('skip');
   }
   return color[0] === 'r'; //return value 
  }
);

console.log(newColors);








//regular for loop

let kireiNicknames = [
  'kichan',
  'kirei',
  'kichi',
  'goosey',
  'buttattack',
  'squeezy'
];

for (let i = 0; i < kireiNicknames.length; i++) {
  if (kireiNicknames[i][0] === 'k') {
    continue;
  }
  else {
    console.log(kireiNicknames[i]);
  }
}



//exception handling
let names = ['misty', 'brock', 'ash', null, 'may'];

names.forEach(name => {
  try {
    console.log(`${name}'s name has ${name.length} letters in it.`);
  } catch (exception) {
    console.log('Something went wrong.');
  }
}); // => misty's name has 5 letters in it.
    //    brock's name has 5 letters in it.
    //    ash's name has 3 letters in it.
    //    Something went wrong
    //    may's name has 3 letters in it.
