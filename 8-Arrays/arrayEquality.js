//hard code check
function equalityCheck() {
  return [1, 2, 3] === [1, 2, 3];
}

console.log(equalityCheck());                   // outputs false
/*
JS treats two arrays as EQUAL only when they are the "SAME ARRAY" = 
they must occupy the SAME spot in memory
*/

/* arraysEqual works best when ALL ELEMENTS IN BOTH ARRAYS ARE PRIMITIVE VALUES
If any pair of elements has a non-primitive value(an ARRAY or OBJECT):
For example, a nested array as an element won't return expected result
*/
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false; //C: immediately if length differs, they are not the same 
  for (let i = 0; i < arr1.length; i++) {        //C: each element must be equal, check using strict inequality operator
    if (arr1[i] !== arr2[i]) {                  
      return false;
    }
  }
  return true;                                   //C: if every element is equal
}

// checking when array is declared within a variable
let num = [5, 4, 3, 2, 1]; 
let countdown = num;

function equalityArray(first, second) {
  return first === second;
}

console.log(equalityArray(num, countdown));     // outputs true
/*
 Assigning 'countdown' to 'num' makes 'countdown' refer to the same array as 'num; 
 it doesn't create a new array, therefore that array occupies the SAME spot in memory
*/

