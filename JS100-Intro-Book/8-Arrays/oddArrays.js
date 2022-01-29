let flowers = ['lavender', 'daisy', 'iris', 'lily', 'violet', 'hyacinth', 'hydrangea',];

console.log(typeof flowers); // => object; Arrays are objects

function typeCheck(data) {
  return typeof data;
}

let arrayCheck = Array.isArray(flowers);
console.log(arrayCheck); // => outputs True if argument is an array

/* If you change an array's length property to a new, smaller value, 
the array gets truncated;
JavaScript removes all elements 
beyond the new final element. */

let blueShades = ['cerulean', 'sapphire', 'sky-blue', 'aquamarine',];
console.log(`The length of blueShades is: ${blueShades.length}`)
console.log(blueShades);
blueShades.length = blueShades.length-1; //truncates the blueShades array
console.log(blueShades);

/* If you change an array's length property to a new, 
larger value, the array expands to the new size. 
The new elements do not get initialized, 
which leads to some strange behavior:
*/

let empty = [];
empty.length = 3;
console.log(empty);            // > outputs: [ < 3 empty items >]

let firstElement = empty[0];
console.log(firstElement);    // > outputs: undefined

let elementsOfEmpty = empty.forEach(element => console.log(element));
console.log(elementsOfEmpty); // > outputs: undefined; forEach outputs undefined

let undef = empty.filter(element => element === undefined);
console.log(undef);           // > outputs: [] 

// adding an element to the empty array
empty[1] = 3;                 // the value of 3 is given at index[1]
console.log(empty);           // outputs: [ <1 empty item>, 3, <1 empty item> ]
console.log(`The length of "empty array" is: ${empty.length}`);         // outputs: The length of "empty array" is 3
let emptyWithNewValue = empty.forEach(element => console.log(element)); // outputs: 3
console.log(emptyWithNewValue);                                         // outputs: undefined; forEach outputs undefined

let keysOfEmptyWithNewValue = Object.keys(empty);                       // This is after '3' is given at index[1]
console.log(keysOfEmptyWithNewValue);                                   // outputs: ['1']

/*
NOTE: In general, JavaScript treats unset array elements as missing, 
but the length property includes the unset elements.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let num = [1, 2, 3];
console.log(num);

num[-3] = 4;
console.log(num);                  //outputs: [ 1, 2, 3, '-3': 4 ]

num[3.1415] = 'pi';
console.log(num);

num['not a num'] = 'peace';       //outputs: [ 1, 2, 3, '-3': 4, '3.1415': 'pi', 'not a num': 'peace' ]
console.log(num);

/*
These "elements" aren't true elements; 
they are properties on the array object, 
which will be discussed later. 
Only index values (0, 1, 2, 3, and so on) 
count toward the length of the array.
*/

console.log(num.length);              //outputs: 3

/*
Since arrays are objects, you can use the Object.keys method 
to return an array's keys -- its index values -- as an array of strings. 
Even negative, non-integer, and non-numeric indexes are included.
*/

let keysOfNum = Object.keys(num);      //outputs: [ '0', '1', '2', '-3', '3.1415', 'not a num' ], the 'index' of the elements
console.log(keysOfNum);

let valuesOfNum = Object.values(num);  //outputs: [ 1, 2, 3, 4, 'pi', 'peace' ], the values of the keys/index...the elements
console.log(valuesOfNum);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Unset values in arrays are treated differently from those 
that have a value of undefined

Unset values are created when there are "gaps" in the array;
they show up as empty items until you try to use their value
*/
function trueOrFalse(array) {
  return array[0] === undefined;
}

let a = new Array(3);
console.log(a)                                //outputs: [ <3 empty items> ]
console.log(trueOrFalse(a));                  //outputs: true

let b = [];
b.length = 3;
console.log(b);                               //outputs: [ <3 empty items> ]
console.log(trueOrFalse(b));                  //outputs: true

let c = [undefined, undefined, undefined];    
console.log(c);                               //outputs: undefined, undefined, undefined
console.log(trueOrFalse(c));                  //outputs: true

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
length property includes unset values in the count, 
but Object.keys ONLY COUNTS those values that have been set to some value, 
even if value is 'undefined'
*/
let aKeys = Object.keys(a);
console.log(`LENGTH of 'a': ${a.length}`);
console.log(`LENGTH using KEYS for 'a': ${aKeys.length}`);

console.log("");

let bKeys = Object.keys(b);
console.log(`LENGTH of 'b': ${b.length}`);
console.log(`LENGTH using KEYS for 'b': ${bKeys.length}`);

console.log("");

let cKeys = Object.keys(c);
console.log(`LENGTH of 'c': ${c.length}`); 
console.log(`LENGTH using KEYS for 'c': ${cKeys.length}`);

console.log("");
/*
Object.keys will return to return an array's KEYS -- its INDEX VALUES -- 
as an array of strings. Even negative, non-integer, and non-numeric indexes are included.
HOWEVER, Object.keys will NOT INCLUDE UNSET VALUES (an empty item in an array).
So, if you use 'length' with Object.keys method, empty item will NOT be counted
*/

let d = [];      // empty array
d.length = 3;    // 3 empty items
console.log(`LENGTH of 'd' is: ${d.length}`);                  //outputs: LENGTH of 'd' is: 3
d[1] = 'second place';
let dKeys = Object.keys(d);
console.log(`LENGH using KEYS for 'd': ${dKeys.length}`)       //outputs: LENGTH using KEYS for 'd': 1
                               
