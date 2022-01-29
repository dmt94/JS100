/*
Three-way comparison
6. Write a function that compares the length of two strings. 
It should return -1 if the first string is shorter, 
1 if the second string is shorter, and 0 if they're of equal length, 
as in the following example:


compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0
*/

function compareByLength(string1, string2) {
  if (string1.length < string2.length) {
    return -1;
  }
  else if (string1.length > string2.length) {
    return 1;
  }
  else {
    return 0;
  }
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0

//////////////////////////////////////////////////////////////////////
/*
Transformation
7. Use JavaScript's string methods on the string 'Captain Ruby' 
to produce the string 'Captain JavaScript'.
*/

let rubyS = 'Captain Ruby';
let javaS = rubyS.replace('Ruby', 'Javascript') //returns new string

//or
console.log('Captain Ruby'.replace('Ruby', 'JavaScript'));
console.log(javaS);
//////////////////////////////////////////////////////////////////////
/*
Internationalization 1
8. Write a function that takes an ISO 639-1 language code 
and returns a greeting in that language. 
You can take the examples below or add whatever languages you like.
*/

function study(code) {
  switch (code) {
    case 'en': return "I study JavaScript";
    case 'fr': return "J'étudie Javascript";
    case 'tl': return "Nag-aaral ako ng Javascript";
    case 'es': return "Yo estudio javascript";
    case 'ja': return "Watashi wa jabasukuriputo o benkyō shite imasu";
    case 'de': return "Ich studiere Javascript";
    default: return "Code not found..."
  }
}
/*
By now you are probably familiar with switch statements. 
Note that if we use return statements in the clauses, 
we don't need to include additional break statements, 
because return will immediately exit from the function anyway.
*/

study('en'); 
study('fr'); 
study('tl'); 
console.log(study('ja')); 
console.log(study('xwa')); // Code not found...
//////////////////////////////////////////////////////////////////////
/*
Locale Part 1
9. Write a function that extracts the language code from a locale. 
A locale is a combination of a language code, a region, 
and usually also a character set, e.g en_US.UTF-8.
*/

function extractLanguage(code) {
  return code.split('_')[0]
}

console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'
//////////////////////////////////////////////////////////////////////
/*
Locale Part 2
10. Similar to the previous exercise, 
now write a function that extracts the region code 
from a locale. For example:

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'
*/

// function extractRegion(code) {
//   let firstL = code.split('')[3]
//   let secL = code.split('')[4]
//   return firstL.concat(secL)
// }

/* cleaner method:
function extractRegion(locale) {
  return locale.split('.')[0]
               .split('_')[1];
}
*/

function extractRegion(code) {
  return code.split('')[3].concat(code.split('')[4]);
}

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'
