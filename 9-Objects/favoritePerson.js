// object created using object literal syntax
let person = {
  name: 'K.A.J.H',
  birthdate: 'December 5',
  astrology: { //LOL
    sun: 'Sagittarius', 
    moon: 'Cancer',
    rising: 'Capricorn',
    venus: 'Sagittarius',
    mars: 'Libra',
    mercury: 'Sagittarius',
  },
  hobbies: ['playing games', 
  'working out',
  'learning something new', 
  'cooking', 
  'baking', 
  'fermenting', 
  'coding',
  'watching a show',
  'watching youtube',
  'trying to read',
  'watching a documentary',
  'woodworking',
  'spending time with family',
  'internet browsing', 
  'bullying D.M.T',
],
  'favorite colors': [
    'shades of blue',
    'neutral tones',
    'green',
  ]
}

let hHobbies = person.hobbies;
let hName = person.name
let randInt = Math.floor(Math.random() * hHobbies.length);
let hActivity = hHobbies[randInt];

let moon = person.astrology.moon;

console.log(`\nWhat is he doing right now?\n${hName} is ${hActivity} !\n`);

let me = {
  name: 'D.M.T',
  birthdate: 'April 22',
  astrology: { 
    sun: 'Taurus', 
    moon: 'Virgo',
    rising: 'Gemini',
    venus: 'Taurus',
    mars: 'Aries',
    mercury: 'Aries',
  },
  hobbies: ['coding', 
  'reading mystery/thriller books',
  'digital painting',
  'trying out new cafés and restaurants',
  'farmers\' market shopping',
  'working out',
  'boxing',
  'cooking', 
  'yoga',
  'baking', 
  'playing piano', 
  'sewing',
  'crocheting',
  'researching fashion trends',
  'watching comfort shows',
  'spending time with friends',
  'listening to podcasts',
  'gardening',
  'bullying K.A.J.H',
],
  'favorite colors': [
    'lavender',
    'light shades of green',
    'warm tones',
  ]
}

let mHobbies = me.hobbies;
let mName = me.name
let randInt2 = Math.floor(Math.random() * mHobbies.length);
let mActivity = mHobbies[randInt2];

console.log(`\nWhat is ${mName} doing right now?\n${mName} is ${hActivity} !\n`);

//accesses all the values , helpful for when you don't know the key names
for (const key in person) {
  if (person.hasOwnProperty(key)){
    console.log(person[key]);
  }
}