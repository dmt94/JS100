/*
1. What VALUES do the following expressions evaluate to?
false || (true && false);
  > false


true || (1 + 2);
  > true


(1 + 2) || true;
  > 3


true && (1 + 2);
  > 3


false && (1 + 2);
  > false


(1 + 2) && true;
  > true


(32 * 4) >= 129;
  > false


false !== !true;
  > false


true === 4;
  > false


false === (847 === '847');
  > true


false === (847 == '847');
  > false


(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
  
          > !true = false
          >!(100/5) is a BOOLEAN VALUE operand
          > 20 is a number operand
          > These two operands have different types 
          > since a strict equality operator was used to compare the two operands, evaluates to 'false'
        > left side: 'false'

                                > 328/4 = 82, which is === 82
                                > true || false > true
                              > right side: 'true'
> false || true  
>final answer: true 


==========================================================================================


2. Write a function, evenOrOdd, that determines whether its argument is an even number. 
If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. 
For now, assume that the argument is always an integer.

------
answer
------
*/
function evenOrOdd(number) {
  let num = Number(number);
  if (num % 2 === 0) {
    console.log('even');
  }
  else console.log('odd');
}

evenOrOdd(11);

/*
==========================================================================================


3. Add a validation check to ensure that the argument is an integer. 
If it isn't, the function should issue an error message and return.
*/ 

function evenOrOddValid(number) {
  if (typeof number === 'number') {    //also Number.isInteger(number)
    if (number % 2 === 0) {
      console.log('even');
    }
    else console.log('odd');
  }
  else {
    console.log(`ERROR: Your input is NOT a number.`)
  }
}

evenOrOddValid(11);

/*
==========================================================================================


4. What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

------
answer
------
Output is:
Product2
Product3
Product not found!
*/



