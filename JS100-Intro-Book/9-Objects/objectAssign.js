/*
Object.assign is a STATIC METHOD
that COMBINES the key-value pairs (of two or more objects)
into a single OBJECT

Properties in the target object are overwritten 
by properties in the sources if they have the same key. 
Later sources' properties overwrite earlier ones.

remember that key names should inherently be unique
*/

let louiseB = {
  louAcc: 'pink bunny hat', 
  louShirt: 'green', 
};   // note: declarations return undefined

let tinaB = {
  tinAcc: 'black-rimmed glasses', 
  tinShirt: 'blue', 
};

let geneB = {
  geneAcc: 'blue keyboard', 
  geneShirt: 'yellow',
};

//affects on a global level: mutates the first object in the argument
Object.assign(louiseB, tinaB, geneB);

//localizes the modification 
let belcherKids = Object.assign(louiseB, tinaB, geneB); //order matters
//merged without issue because they all have diff property names


/*
Object.assign mutates the first object. 
In the above example, the properties from tinaB object and geneB object 
get added to the louiseB object, 
altering louiseB permanently in the process:
*/

console.log(louiseB);
console.log("");
console.log(tinaB);
console.log("");
console.log(geneB);
console.log("");

console.log(belcherKids);
console.log("");


/*if you rather:
CREATE A NEW OBJECT, use an EMPTY OBJECT as [Object.assign] 's 
FIRST ARGUMENT
*/

let sylveon = {
  name: 'Titania',
  type: 'Fairy',
}
let umbreon = {
  name: 'Oynx',
  type: 'Dark',
}
let espeon = {
  name: 'Psyche',
  type: 'Psychic',
};

let eevolution = Object.assign({}, sylveon, umbreon, espeon);
console.log(sylveon);
console.log(umbreon);
console.log(espeon);
console.log(eevolution); 
/* outputs the last parameter in assign BECAUSE
 The properties are overwritten by other objects 
 that have the SAME PROPERTIES later in the parameters order.
 (in this case they have same keys: name and type) 
 */


//NO OVERWRITING
let jolteon = {
  joltName: 'Tesla',
  joltType: 'Electric',
};
let glaceon = {
  glaceName: 'Arctique',
  glaceType: 'Ice',
};
let leafeon = {
  leafName: 'Gaia',
  leafType: 'Grass',
};

//new object, doesn't mutate the other objects
let eevolution2 = Object.assign({}, jolteon, glaceon, leafeon);
console.log(eevolution2);
