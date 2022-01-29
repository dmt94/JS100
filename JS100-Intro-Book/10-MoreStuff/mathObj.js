//square root
let num = 36; 
let sqr = Math.sqrt(num);

//pi
let pi = Math.PI;

//detgrees and radians

function degToRad(degrees) {
  return degrees * (Math.PI / 180);
};

function radToDeg(rad) {
  return rad / (Math.PI / 180);
};

//random int between two bounds
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}; //includes min and max


console.log(random(1, 10));

//Math.floor > returns the largest integer LESS THAN OR EQUAL TO a given number
console.log(Math.floor(5.9)); // > 5
console.log(Math.floor(5.02)); // > 5
console.log(Math.floor(5)); // > 5
console.log(Math.floor(-5.05)); // > -6


//Math.random > returns a FLOATING-POINT, 0-1
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}; // range is 0 to max-1

console.log(getRandomInt(3)); // > 0, 1, or 2 

