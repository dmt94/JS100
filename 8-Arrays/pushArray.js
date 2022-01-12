/* .push method adds one or more elements to the end of an array
mutates the caller/array. Returns the array's new length
*/

let goldenGirls = ['Rose', 'Blanche', 'Dorothy'];

function goldenG(array) {
  return array.push('Betty'); // caller is array; push method returnds the array's updated length
} 

goldenGirls.push('Sophia');
console.log(goldenGirls); // includes Sophia
console.log(goldenG(goldenGirls)); // since this function is called after 'Sophia' is added, return value is 5.