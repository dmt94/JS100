//includes -> returns true or false

let nicknames = [
  'hunky', 
  'hunkle', 
  'goose', 
  'hunkers', 
  'hunkleberry', 
  'kk', 
  'buttface'
];

function checkName(name, array) {
  if (array.includes(name)) {
    let index = array.indexOf(name); //indexOf will only count the first occurence
    return `"${name}" is in the list! It is located at index ${index}!`;
  }
  else {
    return `wah wah not found.`
  }
}

console.log(checkName('KK', nicknames));

//sort() rearranges elements of an array in a sequence , mutates the original array
// console.log(nicknames.sort());

//reverse() reverses the order of the array , mutates the original array
// console.log(nicknames.reverse());

