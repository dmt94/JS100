let mornings; 

console.log(mornings);     // >> undefined


console.log(1/-0);         // -Infinity
console.log(-1/-Infinity); // 0

console.log('10' / 2);     // 5
console.log('10' - 2);     // 8
console.log('10' * 2);     // 20
console.log('10' % 2);     // 0

let posToNum = parseInt('+130');
let negToNum = parseInt('-130');

console.log(posToNum); //130
console.log(negToNum); //-130

console.log(parseInt('12xyz'));    // 12
console.log(parseInt('abc12xyz')); // NaN

console.log(parseFloat('.123'));  // 0.123 
console.log(parseFloat('1.2.3')); // 1.2
console.log(parseFloat('..12'));  // NaN
console.log(parseFloat('22..2'));  // NaN

let isItNull = String(null);

let theType = typeof isItNull;


console.log(String(100));
console.log(String('okay')); //okay
console.log(typeof theType); // string (return value of typeof is a string)
console.log(typeof isItNull); // string

console.log(String(undefined)); //'undefined'
console.log(typeof String(undefined)); // string



let a = console.log('amoeba'); 
console.log(a);   //undefined bc console.log() function always returns undefinec
console.log(console.log('dance')); //display 'dance' and also returns undefined
//the expression inside the outer console.log function will still be evaluated
//and in this case, the function console.log() will display the value that its argument evaluates to

console.log(3); // 3
