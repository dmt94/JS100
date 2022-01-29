/*	The called function invokes the callback function when it runs. 
The forEach method invokes its callback once for each element, 
passing it the element's value as an argument. 
forEach always returns undefined.
*/

let dunphy = ['phil', 'claire', 'alex', 'luke', 'hailey'];


dunphy.forEach(function(name) {
  console.log(`${name.toUpperCase()} DUNPHY`);
})

console.log("");

//arrow functions version
                                          // method block / function body 
let isADunphy = dunphy.forEach(name => console.log(`${name} is a Dunphy.`));
console.log(isADunphy); // console.log logs but also returns 'undefined' bc forEach returns undefined

