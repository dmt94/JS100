//Method Chaining

let str = 'Hunkle Pidgeot';
let names = str.toUpperCase().split(' ').reverse().join(', ');
console.log(names);

/*
toUpperCase() = returns 'HUNKLE PIDGEOT'
split(' ') = is called on the returned string above, >to array ['HUNKLE', 'PIDGEOT']
reverse() = returns a new array ['PIDGEOT', 'HUNKLE']
join(', ') = join the elements of the new returned array above with a comma ', ' and space
    >> PIDGEOT, HUNKLE
*/

//main takaway: you can call a method on the return value of another method

//other variations
let word = 'peace';
let char = word.toUpperCase()
               .split(' ')
               .reverse();
console.log(char); // > [ 'PEACE' ]


let rev = word.split(' ').reverse(); //reverse is an array method, so rev needs to return as an array first
console.log(rev); //>only has one element, 'peace' in the array, so ?? [ 'peace' ]



//split string to chars > individual elements in an array

let split = word.split(',');
console.log(split); // > [ 'peace' ]


function charArray(string) {
  charA = []
  for (let char of string) {
    charA.push(char);
  }
  return charA; //array is returned
}
// console.log(charArray("hello")) // > [ 'h', 'e', 'l', 'l', 'o' ]

let array1 = ['cherry', 'apple', 'orange'];
let randIndex = Math.floor(Math.random() * array1.length);
let randElement = array1[randIndex];
let randCharArray = charArray(randElement);
let randCharArrayLength = randCharArray.length;
let underscore = randCharArray.map(char => '_');
console.log(underscore);
console.log(randCharArray);

function guess(word) {
  word = word.toLowerCase();
  wordCharArray = charArray(word);
  return wordCharArray; //array is returned
}

let userGuess = guess('okaYYy');

console.log(typeof userGuess);         // object
console.log(Array.isArray(userGuess)); // true

//compare two arrays (userGuess) vs (randCharArray)
// if they have a similar value = reveal value 
        // > change _ to similar value  (underscore > value)
        // > map index of underscore > index of value
        // log update 
// if no similar value = lose one life point (3 max)

//...will continue in another file



