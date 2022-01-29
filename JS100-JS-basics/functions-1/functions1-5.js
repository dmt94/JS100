/*
Sum
1. Write the function sum, such that it accepts 
two arguments and returns the sum of its arguments. 
You may assume that the function arguments will always be numbers.
*/

function sum(num1, num2) {
  return (num1 + num2); 
}

console.log(sum(22, 10)); // 32
//////////////////////////////////////////////////////////////////////
/*
Log Quote
2. Write a function that logs Brendan Eich's quote 'Always bet on JavaScript.' 
to the console. What is the return value of the function?
*/
function brendanEichQuote() {
  console.log('Always bet on JavaScript');
}

brendanEichQuote();
/* logs:  Always bet on JavaScript.
 Return value is undefined, because the 
 result of evaluating console.log() is undefined 
 since console.log does not explicitly return something. 
 It has the side effect of printing to the console.
 */
//////////////////////////////////////////////////////////////////////
/*
Cite the Author
3. Implement a function cite that takes two string arguments: 
the author of the quote and what they said. 
It then logs the quote to the console, as in the following example.

cite('Brendan Eich', 'Always bet on JavaScript.');
>> Brendan Eich said: "Always bet on JavaScript."
*/

function cite(author, quote) {
  console.log(`${author} said: "${quote}"`);
}

cite('Brendan Eich', 'Always bet on JavaScript.');

//////////////////////////////////////////////////////////////////////
/*
Squared Number
4. Write a function that accepts a single argument, a number, 
and returns the result of multiplying its argument 
by an exponent of 2 (also known as squaring the number).
*/

function squaredNumber(number) {
  return (number ** 2);
}

console.log(squaredNumber(3)); // 9
//////////////////////////////////////////////////////////////////////
/*
Display Division
5. Determine the output that the following code will log to the console.

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;
> no output, since function was not called in the format it should be: multiplesOfThree()
*/
function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    // console.log(dividend + ' / ' + divisor + ' = 3'); 
    /*true that the dividend is multiples of 3 and so 
    this expression would always evaluate to 3, but 
    this is not evaluated to 3, just a string format
    */
    console.log(dividend + ' / ' + divisor + ' = ' + (dividend / divisor)); 
    divisor += 1;
  }
}

multiplesOfThree(); // To invoke the function, we should append parentheses to the function name