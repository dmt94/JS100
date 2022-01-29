let setOne = [
  'coconut',
  'clementine',
  'grapefruit',
  'pomegranate',
  'kiwi',
  'mango',
  'dragonfruit',
  'persimmon',
  'watermelon',
  'durian',
  'blueberries',
];
//forEach always returns undefined
let fruitEach = setOne.forEach(function(fruit) {
  console.log(fruit);
})
console.log("")

//for loop method
function fruitList(array) {
  for(let i = 0; i < array.length; i++){
    console.log(array[i]); //will log the list of fruits but also return undefined 
  }
}
console.log(fruitList(setOne));
console.log("")

//for loop method -- no undefined
function fruitListNoUndefined(array) {    //method might be helpful if you want to mutate the elements inside an array without mutating the original
  let fruitArray = [];
  for(let i = 0; i < array.length; i++){
    fruitArray.push(array[i]); 
  }
  return fruitArray //won't return undefined
}

console.log(fruitListNoUndefined(setOne));
console.log("");

//length 
let arr = [];
arr[20] = 'xyz' //length would be 21 bc length is: (last index of array + 1)
console.log(arr)
console.log(`First element of arr is: ` + arr[0])
console.log(`The length of arr is ${arr.length}`);


