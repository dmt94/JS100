/* splice method lets you remove one or more elements from an array,
even those that aren't at the end of the array
returns deleted elements 

splice(indexStart, indexEnd) 

ex. splice(1, 4)  => array elements at index 1 THROUGH 4 are deleted

NOTE: SPLICE CAN ALSO ADD AND INSERT ELEMENTS
*/

let hunkleAilments = ['botulism', 'lactose', 'IBS', 'paranoia', 'vertigo', 'bully',];


function spliceFunc(array) {
  return array.splice(1, 4)    //function returns deleted elements
}

console.log(hunkleAilments);
console.log(spliceFunc(hunkleAilments));
// hunkleAilments.splice(1, 4);
console.log(hunkleAilments)