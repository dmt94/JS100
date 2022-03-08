let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
  /*
  reassigns the argument2 variable, but it doesn't mutate the string represented by qux. 
  unless you specifically use 'qux' variable and reassign it to some other string value, 
  then qux would return the new value (even outside this function) 
  because it is declared outside this scope
  */
}

bar(foo, qux); // you are passing a word as an argument in a function
// and this is reassigned inside the block scope of the function
// but string represented by 'qux' doesn't mutate

console.log(foo.a); //hi
console.log(qux); //hello


let newString = 'cupcakes';

{
  newString = 'birthday cake';
}

console.log(newString); 

function reassign(string) {
  string = 'carrots';
}

console.log(newString);


// let foo = {
//   a: 'hello',
//   b: 'world',
// };

// let qux = 'hello';

// function bar(argument1) {
//   argument1.a = 'hi';
//   qux = 'hi' 
// }

// bar(foo);

// console.log(foo.a);
// console.log(qux);