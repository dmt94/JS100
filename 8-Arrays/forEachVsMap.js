
/* map returns a new array that contains one element for each element in
the array passed to it. 
forEach performs simple iterations and returns UNDEFINED
map transforms an array's elements and returns a NEW ARRAY 
with the transformed values
*/

let pritchett = ['Jay', 'Claire', 'Mitchell', 'Gloria'];
let dunphy = ['Phil', 'Alex', 'Luke', 'Hailey'];
let capitalPritchett = pritchett.map(name => name.toUpperCase()); // maps names in all caps
let popPritchett = pritchett.map(name => name.replace(name[0], 'P')); // replaces first letter of each element 
let initials = pritchett.map(name => name[0] + '.' + 'P.'); // maps names as initials

let randIndex = Math.floor(Math.random() * pritchett.length);
let randomName = pritchett[randIndex];
let randomNameInitials = initials[randIndex]; //same index as randIndex used in randomName

console.log(capitalPritchett);
console.log(popPritchett);
console.log(initials);
console.log(randomName);
console.log(randomNameInitials);

//replace vowels with '*':

let starVowel = pritchett.map(name => name.replace('a', '*'));
let starVowel2 = starVowel.map(name => name.replace('e', '*'));
let starVowel3 = starVowel2.map(name => name.replace('o', '*'));
let starVowel4 = starVowel3.map(name => name.replace('i', '*'));
console.log(starVowel);
console.log(starVowel4);