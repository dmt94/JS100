function greeting(code) {
  switch (code) {
    case 'en': return "Hello!";
    case 'fr': return "Bonjour!";
    case 'tl': return "Kumusta!";
    case 'es': return "¡Hola!";
    case 'ja': return "Konnichiwa!";
    case 'de': return "Guten Tag!";
    default: return "Code not found..."
  }
}

console.log(greeting('ja')); 

//////////////////////////////////////////////////////////////////////
/*
Internationalization 2
11. write a function localGreet that takes a locale as input, 
and returns a greeting. The locale allows us to 
greet people from different countries differently 
also when they share the language, for example:

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
-------------------------------------------------------------
Distinguish greetings for English speaking countries 
like the US, UK, Canada, or Australia in your implementation,
and feel free to fall back on the language-specific 
greetings in all other cases, for example:

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'

When implementing localGreet, make sure to re-use your extractLanguage, 
extractRegion and greet functions from the previous exercises.
*/

function extractLanguage(code) {
  return code.split('_')[0]
}

function extractRegion(code) {
  return code.split('')[3].concat(code.split('')[4]);
}
// MY SOLUTION
function localGreet(code) {
  let lang = extractLanguage(code);
  let region = extractRegion(code);
  if (lang === 'en') {
    switch (lang, region) {
      case 'en', 'US': return 'Hey!';
      case 'en', 'GB': return 'How do you do?';
      case 'en', 'AU': return 'G\'day mate!';
      default: return 'Hello!'
      }
    }
  else {
    return greeting(lang);
  }
}

console.log(localGreet('en_US.UTF-8')); //Hey!
console.log(localGreet('en_GB.UTF-8')); //How do you do?
console.log(localGreet('en_AU.UTF-8')); //G'day mate!
console.log(localGreet('en_VG.UTF-8')); //Hello!

console.log(localGreet('fr_CA.UTF-8')); //Bonjour!
console.log(localGreet('fr_FR.UTF-8')); //Bonjour!

/* CLEANER SOLUTION from LS:

function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}
*/


