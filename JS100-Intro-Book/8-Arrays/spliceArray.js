/* splice method lets you remove one or more elements from an array,
even those that aren't at the end of the array
returns deleted elements 

splice(indexStart, indexEnd) 

ex. splice(1, 4)  => array elements at index 1 THROUGH 4 are deleted

NOTE: SPLICE CAN ALSO ADD AND INSERT ELEMENTS
*/

let hunkleAilments = ['botulism', 'lactose', 'IBS', 'paranoia', 'vertigo', 'bully',];


function spliceFunc(array) {
  return array.splice(1, 4);               //function returns deleted elements
}

console.log(hunkleAilments);
console.log(spliceFunc(hunkleAilments)); //outputs the deleted elements
// hunkleAilments.splice(1, 4);
console.log(hunkleAilments)              //outputs the mutated array after splice method 

let kireiFood = ['chicken', 'cesar\'s salad', 'kombucha', 'yogurt', 'almonds', 'protein bars'];

// kireiFood.splice(1) // deletes from index -> end 
// kireiFood.splice(1,1); // deletes the element at chosen index only 

console.log(kireiFood);