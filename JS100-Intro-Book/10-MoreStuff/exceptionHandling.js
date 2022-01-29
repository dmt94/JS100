/* not all Errors in JS are silent: EXCEPTIONS 
 JS raises an error -- throws an EXCEPTION

 EXCEPTION HANDLING: 
 > process that deal with errors in a manageable and predictable manner
 */



// one common JS error occurs when we call a method on the values [undefined] or [null]

// let names = ['hunk', 'kk', 'alex', undefined, 'goose'];
// names.forEach(name => {
//   console.log(`${name}'s name has ${name.length} letters in it.`);
//   }); 
// => hunk's name has 4 letters in it.
    //    kk's name has 2 letters in it.
    //    alex's name has 4 letters in it.
    //    TypeError: Cannot read properties of undefined (reading 'length')
    //        at [file].js:14:42
    //        at Array.forEach (<anonymous>)


/* This program raises an error when it tries 
to access the length property on the "undefined" value at names[3]. 
It then prints a [stack trace] and halts program execution; 
it [ignores] the last entry in the array. 
*/

/* exception handling: try/catch statement provides the means to handle exceptions

  try {
      perform an operation that may produce an error
} catch (exception) {
       an error occurred. do something about it.
      for example, log the error
} finally {
      Optional 'finally' block; not used often
      Executes regardless of whether an exception occurs.
}

*/

let pokemons = ['ditto', 'snorlax', 'sylveon', undefined, 'lopunny'];

pokemons.forEach(pokemon => {
  try {
    console.log(`${pokemon}'s name has ${pokemon.length} letters in it.`);
  } catch (exception) {
    console.log('ERROR CAUGHT! Something went wrong :( ');
  }
}); // => ditto's name has 5 letters in it.
    //    snorlax's name has 7 letters in it.
    //    sylveon's name has 7 letters in it.
    //    Something went wrong
    //    lopunny's name has 7 letters in it.

  
//raise own exception

function numCheck(number) {
  if (isNaN(number)) { //isNaN is truthy, isNaN is appropriate to use for inputs where numbers typed are typically "Strings" and you want to coerce that into a Number
    throw new TypeError(" *cries* Numbers ONLY >:( ");
  }
  else {return number}
}

console.log(numCheck('100'));  //even though this is a 'string', JS coerces it into a number

function numCheck2(number) {
  if (typeof number !== 'number') {  //using typeof operator with strict equality operator limits is more strict than isNaN
    throw new TypeError("ERROR CAUGHT: input is not a Number");
  }
  else {return number}
}

console.log(numCheck2('100')); 