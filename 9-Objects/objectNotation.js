
let rlSync = require('readline-sync');
let maries = {
  career: 'software developer',
  book: 'inviting safety',
  hobbies: ['coding', 'crocheting', 'writing', 'writing',], //values can multiple similar strings , keys are unique
  phrase: 'it\'s okay to pause to process your thoughts.',
  food: 'H\'s Chili con carne',
}

//dot notation
let career = maries.career;
let hobbies = maries.hobbies;
let coding = hobbies[0];
let crochet = hobbies[1];
let writing = hobbies[2];

//bracket notation
let book = maries['book'];

console.log(career);
console.log(hobbies.length);
console.log(book);

//don't know index of an element that you DO know:
function indexCheck(element) {
  for (let i = 0; i < hobbies.length; i++) {
    if (hobbies[i] === element) {
      return [i] //return would only output the first value if it exists, if there are duplicates, it will not
    }
  }
}

//loops and if-else statements method
function indexCheck2(element) {
  let count = 0;
  let notFound = 0;
  for (let i = 0; i < hobbies.length; i++) {
    if (hobbies[i] !== element) {
      notFound++;
    }
    else if (hobbies[i] === element) {
      count++; 
      if (count > 1) {
        console.log(`[${typeof element}] ${element} also at INDEX [${[i]}]`);
      }
      else if (count = 1) {
        console.log(`[${typeof element}] ${element} at INDEX [${[i]}]`);
      }
    }
  }
  if (notFound === hobbies.length) {
    console.log(`"${element}" was NOT found in the array`);
  }
}
console.log(indexCheck('writing')); //return
indexCheck2('coding'); //console.log

//using includes()
let lookFor = rlSync.question("What word do you want to check?\n");
function check(element, array) {
  count = 0; 
  if (array.includes(element) === true) {
    for (i = 0; i < array.length; i++) {
      if (element === array[i]) {
        count++; 
        if (count > 1) {
          console.log(`also at INDEX: [${[i]}]`)
        }
        else if (count = 1) {
          console.log(`${element} INDEX: [${[i]}]`);
          }
        }
      }
    }
  else {
    console.log(`${element} not found in the array.`);
  }
}
check(lookFor, hobbies);

////////////////////////////////////////////////////////////////////////////////////

let detective = {
  name: 'Sherlock Holmes',
  hobbies: ['sleuthing', 'playing the violin', 'beekeeping', 'reading', 'experiments',],
  bestie: 'John H. Watson',
  landlady: 'Mrs. Hudson',
  accessory: ['deerstalker', 'pipe'],
}

//adding more key-value pairs
detective.nemesis = 'J. Moriarty';
detective['love interest'] = 'Irene Adler';
console.log(detective);

////////////////////////////////////////////////////////////////////////////////////

//delete
//DOT NOTATION
delete detective.landlord; //returns true 

/* delete removes the key-value pair from the object and RETURNS TRUE unless
it cannot delete the property -- if property is NON-CONFIGURABLE
*/

//BRACKET NOTATION
delete detective['accessory']; 
console.log(detective);

////////////////////////////////////////////////////////////////////////////////////

//CONST
/* If a variable declared with const is initialized with an object, 
you CAN'T CHANGE what object that variable refers to.
You can, however, MODIFY that object's PROPERTIES and PROPERTY VALUES:

key:value
property: property value

*/

const MyPet = { name: 'Happy', breed: 'Shiba Inu', favorite: 'cuddles', }
MyPet.sound = 'ruff';     //allowed modification of property and its values
MyPet.owner = 'Kirei';    //allowed modification of property and its values
console.log(MyPet);

// MyPet = {}                //not allowed, variables are POINTERS
/* console.log(MyPet);    >> Uncaught TypeError: Assignment to constant variable

Essentially, a const declaration prohibits changing what thing the const points to, 
but it does not prohibit changing the content of that thing. 
Thus, we can change a property in a const object, 

but >> we CAN'T change WHICH object the const POINTS TO !! <<
*/

////////////////////////////////////////////////////////////////////////////////////

/* FREEZE
You can use Object.freeze with objects to freeze the property values of an object, 
just like you can with arrays:
*/

const MySalad = Object.freeze(
  { 
    green: "lettuce", 
    protein: [['chicken', 'chicken sausage'], 'bacon'],  //nested array
    dressing: 'balsamic vinegar',
    legume: 'chickpea', 
   }
  );
  /* Object.freeze only works one level deep in the object. 
  If your object contains NESTED ARRAYS or other OBJECTS, 
  the values inside them can still be changed unless they are ALSO frozen.
  */

MySalad.nuts = 'almonds'            //property is not modified because of freeze method
MySalad.protein[0][2] = 'ground chicken' 
/* property WILL be modified because it is a nested array, MORE THAN ONE level deep
'ground chicken' will be added to the nested array at a new index [2]
*/
MySalad.protein = 'tofu'           //since this assignment is ONE level deep, the property value will not be modified to 'tofu'
MySalad.protein[2] = 'tofu'        //also MORE THAN ONE level deep, so WILL modify so that 'tofu' will be added into the array, at index [2]

console.log(MySalad);