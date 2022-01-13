/* filter method is another array iteration method.
RETURNS a new array that includes all elements from the calling array, 
for which the [callback] returns a truthy value
*/

let pritchetts = ['Jay', 'Claire', 'Mitchell', 'Gloria', 'Manny', 'Joe'];

let stepFam = pritchetts.filter(name => name === 'Gloria' || name === 'Manny' || name === 'Joe');

let letterM = pritchetts.filter(name => name[0] === 'M');



console.log(pritchetts);
console.log(stepFam);
console.log(letterM);

