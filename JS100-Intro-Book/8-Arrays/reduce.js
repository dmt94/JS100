/* reduce method effectively REDUCES the contents of an array to a single value

REDUCE DOES NOT MUTATE THE CALLER / ORIGINAL ARRAY
*/
let funny = ['f', 'u', 'n', 'n', 'y'];
let funnyWord = funny.reduce((accumulator, element) => {
  return accumulator + element}, 'o');  //can concatenate string, but other operators -> NaN

console.log(funny);
console.log(funnyWord);


let nums = [5, 4, 3, 2, 1,];
let product = nums.reduce((accumulator, element) => {
  return accumulator * element}, 1);  

console.log(nums);
console.log(product);