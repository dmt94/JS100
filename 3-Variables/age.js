let age = 27;
let greeting = `Hello! I'm guessing you are ${age} years young :)`

function predict() {
  console.log(`
  In 10 years, you will be ${age + 10}.
  In 20 years, you will be ${age + 20}.
  In 30 years, you will be ${age + 30}.
  In 40 years, you will be ${age + 40}.
  
  No time better than the present :) 
  `)
}

predict()


/* 

3. What happens when you run the program below? Why?
{
  let foo = 'bar';
}

console.log(foo);
----------------------------------------------------
answer: 
it will output an error since foo is out of scope.
'let' creates variables with block scope...this limits
the visbility of the variable to the block.
foo was declared and initialized beforehand INSIDE the block
and is not accessible outside the block.


||||||||||||||||||||||||||||||||||||||||||||||||||||||


4. What happens when you run the program below? Why?
const NAME = 'Kirei';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Kichan';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
----------------------------------------------------
answer: 
Lines 37-39 will output their respective statements with 'Victor' 
as the value for the variable NAME, but
there will be an ERROR on line 41 because the variable NAME
was declared with const. Declaring a variable as a constant
means that the variable cannot be reassigned after its declaration.
You must use declare using a 'let' or 'var':

let name = 'Hunks';
console.log('Magandang Araw, ' + name); =>  Magandang Araw, Hunks


||||||||||||||||||||||||||||||||||||||||||||||||||||||


5. What does this program log to the console? Why?
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
----------------------------------------------------
answer:
program will output 'bar'
line 64 initializes a variable named 'foo' with the value 'bar'
line 65 starts a block, which creates a new scope for let variables
new variable also named 'foo' in line 66 is declared--which
shadows(hides) the variable from line 64. 
This second variable gets initialized to 'qux', but it goes out
of scope on line 67 when the block ends.
This brings foo from line 64 back into scope, 
therefore line 68 logs the value of 'bar',
the value of foo from line 64.


||||||||||||||||||||||||||||||||||||||||||||||||||||||


6. Will this program produce an error when run? Why or why not?
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
----------------------------------------------------
answer:
No, this program will not produce an error when it runs.
These two variables are separate entities, because
declaring const for the variable FOO 
inside the block scope makes it inaccessible after block ends.
The variable FOO that exists in the global scope (line 89) 
however IS accessible and the one accessed by console.log(FOO).
*/

