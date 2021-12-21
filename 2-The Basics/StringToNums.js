      //STRING -> NUMBER 

console.log(Number('1'));
console.log(typeof Number('1'));

//Number() constructor
let exampleNaN = Number('foo');
console.log(exampleNaN);

//parseInt() function
let exampleParse = parseInt('12');
console.log(exampleParse);

let num = '1200';
num = parseInt(num);
console.log(`num is a: ${typeof num}`);

let fraction = parseInt('3.134');
console.log(fraction);   // returns '3' number

//parseInt limit is ~300 digits => outputs infinity
let infin = parseInt('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')

console.log(infin);

//parseFloat() includes decimal 
let dec = parseFloat('12.45');
console.log(`dec is: ${dec}`);

let decWithLetters = parseFloat('12.45hello');
console.log(`dec is: ${decWithLetters}`);


      //NUMBER -> STRING

let newString = String(200);
console.log(`${newString} is a: ${typeof newString}`);
