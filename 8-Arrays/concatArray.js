/* concat method is similar to push but DOES NOT MUTATE THE CALLER/ARRAY
concatenates two arrays and returns a new array that contains
all the elements from the original array followed by all 
the arguments passed to it */

let burger = ['lettuce', 'tomatoes', 'buns', 'ketchup'];
let fullBurger = burger.concat('patty', 'pickles');

function funcBurger(array) {
  return array.concat('garlic aioli'); // returns a new array, the array used in parameter with the new appended element
} 

console.log(burger);
console.log(fullBurger);
console.log(funcBurger(fullBurger));