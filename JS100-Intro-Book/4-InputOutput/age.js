let rlSync = require('readline-sync');
// let age = Number(rlSync.question("How old are you?\n"));

// function predict() {
//   console.log(`
//   You are ${age} years young :)

//   In 10 years, you will be ${age + 10}.
//   In 20 years, you will be ${age + 20}.
//   In 30 years, you will be ${age + 30}.
//   In 40 years, you will be ${age + 40}.
  
//   No time better than the present :) 
//   `)
// }

// predict()

/* 1. Modify the age.js program you wrote in the exercises for the Input/Output chapter. 
The updated code should use a for loop to display the future ages. */

let userAge = Number(rlSync.question("How old are you?\n"));
let newAge = 0;
//age-centric function
  // function predict() {
  //   for (let newAge = 0; newAge <= 100; addition += 10) {
  //     newAge = userAge + addition
  //     if (newAge === userAge) {
  //       continue
  //     }
  //     console.log(`You will be ${newAge} in ${addition} years`)
  //   }
  // }

  // console.log(`You are ${userAge} years old today)`)
  // predict();
  function predict() {
    for (let years = 10; newAge <= 100; years += 10) { 
      newAge = userAge + years
      if (newAge >= 100) {continue} //if you don't want value to exceed 100
      console.log(`You will be ${newAge} in ${years} years`)
    }
  }

  console.log(`You are ${userAge} years old today)`)
  predict();


//short and simple version: (the solution) clean cut years-centric
//initialize        
for (let years = 10; years <= 50; years += 10) {
  console.log(`In ${years} years, you will be ${userAge + years} years old !`);
}

console.log(' ');

//short and simple version, function with maxYears prompt
function userChoice() {
  let maxYears = Number(rlSync.question("Until how many years into the future do you want to look ahead?\n"));
  for (let years = 10; years <= maxYears; years += 10) {
    console.log(`In ${years} years, you will be ${userAge + years} years old !`);
  }
}

userChoice();
