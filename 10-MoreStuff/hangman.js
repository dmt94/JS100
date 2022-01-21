let rlSync = require('readline-sync');
// let user = rlSync.question("Type your guess");

function charArray(string) {
  charA = []
  for (let char of string) {
    charA.push(char);
  }
  return charA; //array is returned
}

let array1 = ['cherry', 'apple', 'orange'];
let randIndex = Math.floor(Math.random() * array1.length);
let randElement = array1[randIndex];
let randCharArray = charArray(randElement);
let randCharArrayLength = randCharArray.length;
let underscore = randCharArray.map(char => '_');

// let user = rlSync.question("Type your guess:\n");

function guess(word) {
  word = word.toLowerCase();
  wordCharArray = charArray(word);
  return wordCharArray; //array is returned
}

// let userGuess = guess(user);

// console.log(underscore);
// console.log(randCharArray);
// console.log(userGuess);

// for (let i = 0; i < randCharArray.length; i++) {
//   let char = randCharArray[i];
//   for (let j = 0; j < userGuess.length; j++) {
//     if (char === userGuess[j]) {
//       console.log(char); //actual values 
//       console.log(i); //index of values 
//       underscore[i] = char;
//       console.log(underscore);
//     }
//   }
// }

// let count = 5;
// function keepAsk() {
//   while (count !== 0) {   
//     let user = rlSync.question("Type your guess:\n");
//     let userGuess = guess(user);

//     for (let i = 0; i < randCharArray.length; i++) {
//       let char = randCharArray[i];
//       for (let j = 0; j < userGuess.length; j++) {
//         if (char === userGuess[j]) {
//           console.log(char); //actual values 
//           console.log(i); //index of values 
//           underscore[i] = char;
//           console.log(underscore);
//         }
//       }
//     }
//   }
// }

// keepAsk()




//

//hangman
let hangManWords = ['Tina', 'Louise', 'Gene'];
let randInt = Math.floor(Math.random() * hangManWords.length)
let belcherKid = hangManWords[randInt];

function userGuess() {
  let guessChar = rlSync.question("Type a letter\n").toLowerCase();
  if (guessChar.length > 1 || !isNaN(guessChar) || guessChar === ' ') {
    console.log('Make sure you type ONE letter. No numbers or spaces');
    return userGuess();
  }
  else return guessChar;
}

let userLetter =  userGuess();

let regex = /e/;
console.log(regex.test(belcherKid));
console.log(belcherKid);