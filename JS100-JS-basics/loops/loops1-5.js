/*
Loop and Log
1. Add some code inside of the [for loop] below that logs the 
current value of i to the console on each iteration. 

Before you run the code: What sequence of numbers do you expect to be logged?
> expect even numbers (10 and under) in ascending order 
*/

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
console.log("");
///////////////////////////////////////////////////////////////////////////
/*
Countdown
2. The code below logs the numbers from 1 to 10. 
Change it, so that it instead logs the numbers from 10 to 1 
in decreasing order, and then logs 'Launch!'
*/
for (let i = 10; i >= 1; i -= 1) {
  console.log(i);
  if (i === 1) {
    console.log('Launch!');
  }
}
///////////////////////////////////////////////////////////////////////////
/*
Triple Greeting
3. Write a loop that logs greeting three times.
*/
let greeting = 'Aloha';
//for loop
for (let i = 1; i <= 3; i++) {
  console.log(greeting);
}
//while loop
let count = 1;
while (count <= 3) {
  console.log(greeting)
  count += 1;
}
///////////////////////////////////////////////////////////////////////////
/*
Take Two
4. Write a for loop that iterates over all numbers from 1 to 100, 
and outputs the result of multiplying each element by 2
*/

for (let i = 1; i <= 100; i++) {
  console.log(i * 2);
  }

//////////////////////////////////////////////////////////////////////////
/*
Looping over Array Elements
5. Using the code below as a starting point, 
write a while loop that logs the elements of array at each index,
and terminates after logging the last element of the array.
*/
let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log('index', index, ':', array[index])
  index += 1;
}