
// adding and removing items during a map()
let newA = a.flatMap( (n) =>
  (n < 0) ?      [] :
  (n % 2 == 0) ? [n] : //keep item
                 [n-1, 1] //add item  (17 -> 16, 1): we extract the even number and adding both to the array
);

console.log(newA);


let arr1 = ["it's Sunny in", "", "Los Angeles"];

let arrAlt1 = arr1.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["Los Angeles"]]

let arrAlt2 =arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "Los Angeles"]

console.log(arrAlt1);
console.log(arrAlt2);