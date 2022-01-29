let rlSync = require('readline-sync');

let answer;
do {
  answer = rlSync.question("Do you want to do that again?\n");
} while (answer === 'y');

/* condition is at THE END of the loop in a do/while loop
When you run this code in a browser, 
it displays a Do you want to do that again? prompt. 
If you enter the lowercase letter y, 
it displays the prompt again. 
It repeats this process until you enter something other than y, 
at which point the loop ends and control 
moves to the first statement or expression after the loop.
*/
