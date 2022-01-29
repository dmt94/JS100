/*
6. Continue
write a for loop that loops over the elements of the array cities 
and logs the length of each string to the console. 
If the element is null, skip forward to the next iteration 
without logging anything to the console.
*/

let cities = [
  'Istanbul', 
  'Los Angeles', 
  'Tokyo', 
  null, 
  'Vienna', 
  null, 
  'London', 
  'Beijing', 
  null
];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === null) {
    continue
  }
  else {
    console.log(cities[i].length)
  }
}
//////////////////////////////////////////////////////////////////////
/*
7. And on and on and on
Modify so that code stops after FIRST ITERATION:

for (let i = 0; ; i += 1) {
  console.log("and on");
}
*/
for (let i = 0; i < 1; i++) {
  console.log("and on");
}

//break 
for (let i = 0;; i ++) {
  console.log("and on");
  break;
}
/* Like the initialization block, 
 the condition block is also optional. 
 If you are omitting this expression, 
 you must make sure to break the loop in the body 
 in order to not create an infinite loop.
 */
//////////////////////////////////////////////////////////////////////
/*
8. That's Odd
Write a while loop that logs all odd natural numbers between 1 and 40.
*/
num = 1;

while (num <= 40) {
  if (num % 2 !== 0) {
    console.log(num)
  }
  num += 1;
}
//////////////////////////////////////////////////////////////////////
/*
9. Finding Nemo
Loop over the elements of the array fish, logging each one. 
Terminate the loop immediately AFTER logging the string 'Nemo'.
*/
let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

let index = 0;
while (index <= fish.length){
  console.log(fish[index]);
  if (fish[index] === 'Nemo') {
    break
  }
  index += 1;
}
//////////////////////////////////////////////////////////////////////
/*
10. Do...While
What is the difference between the following two code snippets? 
Check the MDN documentation on while and do...while.

let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}
> Will not run at all beacuse it does not meet the 'while condition'
 of the counter being  over 0
*************************

let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

> Will run at least once even though the while condition is not met 

*/

let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

/* Both statements execute the given block as 
long as the condition evaluates to true. 
The difference is that the [condition] in a [while statement] 
is checked [[before]] executing the block, 

while the [condition] in a [do...while statement] 
is checked [[after]] the block has been executed. 

So the block in a do...while statement will 
always be executed at least once, 
even if the condition is not satisfied.

Therefore the second code snippet logs 'Woooot!' 
once, while the first code snippet does not log anything.
*/