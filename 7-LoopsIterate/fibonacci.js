/* Description: function uses RECURSION to calculate the nth number in the Fibonacci sequence
Each number in the sequence is the SUM of the PREVIOUS TWO NUMBERS in the sequence: 

fibonacci(0) = 0
fibbonaci(1) = 1
fibbonaci(2) = fibbonaci(1) + fibbonaci(0) = 1 + 0 = 1
fibbonaci(3) = fibbonaci(2) + fibbonaci(1) = 1 + 1 = 2


definitions:
fibonacci(0) = 0
fibbonaci(1) = 1
fibbonaci(n) = fibbonaci(n - 1) + fibbonaci(n - 2)      for all n >= 2

*/

function fibonacci(number) {
  if (number < 2) return number;  
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(10));
console.log(fibonacci(6));


/* recursive CALLS work their way down the tree
f(6) calls f(5) and f(4);
f(5) calls f(4) and f(3);
f(4) calls f(3) and f(2);
...
in the end, we reach the LOWEST LEVEL IN THE TREE which always 
has a 1 or 0 return value. ONCE it has reached these values (baseline condition) 
the code starts ADDING these return values and 
"PERCOLATE BACK UP" the tree. 
Once it works its way back to the top, it RETURNS THE FINAL RESULT
*/