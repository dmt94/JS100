/*
1. In the following code, 
what are the final length values 
for array1, array2, array3, array4, and array5?
*/

let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

/* ANSWER:
array1.length => 4
- The length is the highest index position that has a value (+ 1)
Highest index position is 3 in this array, plus 1 makes it 4.

array2.length => 5
- You can set the length of an array. Even if the highest index position 
that has a value assigned is 0, assigning a new length of 5 overrides that length. 
For now, you can think of the resulting array as having 5 elements 
of which the last 4 have a value of undefined. 
In actuality, the array still has only one element, 
but has 4 gaps at the end -- the gaps aren't real elements 
and take up very little memory. 

array3.length => 0
- Index positions must be non-negative integers starting from 0. 
Negative and non-integer indexes don't get taken into account 
when determining an array's length.

array4.length => 3
- Array gets truncated to the new length when an array is set to a 
length that is less than its current length. The updated length 
is 3, JS removes the last two elements leaving elements [1, 2, 3]

array5.length => 101
- since length is the highest index position + 1, the length is 101, 
given as the key of the array/index is declared to be 100 with a value of 3. 
This makes the previous empty array to now have 100 empty values (starting from index 0), 
with index 100 as 3. 
*/

////////////////////////////////////////////////////////////////////////////////////////

/*
2. log all the even values from myArray to the console
*/
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let evenOnly = myArray.filter(num => num % 2 === 0);
console.log(evenOnly);

////////////////////////////////////////////////////////////////////////////////////////

/*
3. log all the even values from newArray to the console
*/
let newArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
//for loop method
let evensOnly = []
for (let i = 0; i < newArray.length; i++) {
  for (let j = 0; j < newArray[i].length; j++) {
    if (newArray[i][j] % 2 === 0) {
      evensOnly.push(newArray[i][j]);       
    }
  }
}
console.log(evensOnly);               //neater display in array form, horizontally

//forEach method
newArray.forEach(function(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i]);         //displays in array form, vertically
    }
  }
})

////////////////////////////////////////////////////////////////////////////////////////

/*
4. we want to use the 'map' function to create a new array that contains 
one element for each element in the original array. 
If the element is an even value, then the corresponding element 
in the new array should contain the string 'even'; 
otherwise, the element in the new array should contain 'odd'.
*/

let toStringA = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let evenOrOdd = toStringA.map(function(num) {
  if (num % 2 === 0) {
    return `${num}: even`
  }
  else if (num !== 0) {
    return `${num}: odd`
  }
}
)
console.log(evenOrOdd);

////////////////////////////////////////////////////////////////////////////////////////

/*
5. Write a findIntegers function that takes an array argument and returns 
an array that contains only the INTEGERS from the input array. 
Use the filter method in your function.

Number.isInteger(value) => true or false, integer check
*/

let random = ['apple martini', NaN, undefined, 3.1415, 0, -4, 'lavender syrup', 2, 1000, -25, -9,];
let negative = [];
function findIntegers(array) {
  let numOnly = [];
  for (let i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i])) {
      numOnly.push(array[i]);
    }
    if (array[i] < 0) {
      negative.push(array[i])
    }
  }
  return numOnly;
}

console.log(findIntegers(random));
console.log(negative);

////////////////////////////////////////////////////////////////////////////////////////

/*
6. Use map and filter to first determine the lengths of all the elements in an array
of string values, then discard the EVEN values (keep the ODD values)

return elements with odd # lengths

array.filter(element => element);
let variable = array.map(function(element) {
  }
);

let variable = array.map(element => element);
*/
let arr = ['a', 'oh', 'bumfuzzle', 'gibberish', 'even', 'odd', 'orange'];

let length = arr.map(function(element) { //understand the diff between map and filter
  return element.length;
}
);
console.log(length);

let odd = length.filter(function(element) {
  return element % 2 !== 0;
}
);
console.log(odd);

//function version
function oddLengths(array) {
  let lengthOfArray = array.map(element => element.length);
  let oddOnly = lengthOfArray.filter(element => element % 2 !== 0);
  return oddOnly; 
}

console.log(oddLengths(arr));

////////////////////////////////////////////////////////////////////////////////////////

/*
7. Use reduce to compute the sum of the squares of all of the numbers in an array:
let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
*/
let numsA = [3, 5, 7];
function sumOfSquares(array) {
  let square = array.map(num => num * num);
  let sum = square.reduce((accumulator, num) => {
    return accumulator + num}, 0);
  return sum;
}
console.log(sumOfSquares(numsA));

// shorter version SOLUTION
function sumOfSquares2(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}
console.log(sumOfSquares2(numsA)); // => 83

////////////////////////////////////////////////////////////////////////////////////////

/* CHALLENGE!
8. Write a function similar to the oddLengths in exercise 6 using the reduce method.

reduce method effectively REDUCES the contents of an array to a single value
REDUCE DOES NOT MUTATE THE CALLER / ORIGINAL ARRAY
*/
let gibberish = ['beepbop', 'bop', 'bobo', 'pooboosoo', 'kirehunkle',];

function oddLengths(strings) {
  return strings.reduce((array, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      array.push(length);
    }
    return array;
  }, []);
}

console.log(oddLengths(gibberish));

////////////////////////////////////////////////////////////////////////////////////////

/*
9. Without using a for, while, or do/while loop, 
write some code that checks whether the number 3 appears inside 
the following arrays below

Return true or false depending on each result.
*/
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkForThree(array) {
  return array.includes(3);
}

console.log(checkForThree(numbers1));
console.log(checkForThree(numbers2));
console.log(checkForThree(numbers3));

////////////////////////////////////////////////////////////////////////////////////////

/*
10. Write some code to replace the value 6 in the following array with 606:
*/
let lastArray = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

//loop and map
let replacement = lastArray.map(function(element) {
  for (let i = 0; i < element.length; i++) {
    if (element[i] === 6) {
      element[i] = 606;
     } 
    //  console.log(element[i])
    }
    return element
  }
);
console.log(replacement);

//just loops to search
let replacedA = []
for (let i = 0; i < lastArray.length; i++) {
  for (let j = 0; j < lastArray[i].length; j++) {
    if (lastArray[i][j] === 6) {
      lastArray[i][j].replace(606);
    }
    replacedA.push(lastArray[i][j])
  }
}
console.log(replacedA);

//just assign to replace
lastArray[1][3] = 606;
console.log(lastArray);