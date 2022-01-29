let array = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOfFive = 0; 

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
  }
}

console.log(indexOfFive);

let himymChars = ['Ted', 'Robin', 'Barney', 'Lily', 'Marshall'];
let indexRobin = 0;
let indexBarney = 0;

for (let i = 0; i < himymChars.length; i += 1) {
  if (himymChars[i] === 'Robin') {
    indexRobin = i;
    break; //'break' only works once
  }
  if (himymChars[i] === 'Barney') {
    indexBarney = i;
    break;
  }
}

console.log(indexRobin);
console.log(indexBarney);
