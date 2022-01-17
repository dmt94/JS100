/* Object.values
[static method] extracts the values from every own property
in an object to an array:
*/
let person = { name: 'Bob', age: 44, restaurant: 'Bob\'s Burgers'}
let personValues = Object.values(person); //array of all the values of object {person}
                                          //values of {person} are coerced into arrays

let personKeys = Object.keys(person);     //array of all the keys of object {person}
                                          //keys of {person} are coerced into arrays

console.log(personValues);

/* for in loop (uses object's keys to extract values)
  > When we write person[prop], prop gets evaluated as a variable, so
person[prop] gets evaluated as person['age'], and that 
RETURNS the value of the desired property
*/
// x is the index for each key , so key[index] = value
//personValues is an array of the values
//the 'key' of this array are the index 
//array[index] = value

for (x in personValues) {
  console.log(personValues[x]); //logs the values only shows EACH
};
//same as:
for (key in person) {
  console.log(person[key]); //logs the values of each key in object perosn
};



for (x in personValues) {
  console.log(x); //logs the index ("key") of the values of object person
}; //remember that Object.keys() and Object.values() coerces object > array 
//and thus array methods can be used on them. 

for (key in person) {
  console.log(key); //logs the key names of the object person
};


//individual log vs. show all log
console.log(personValues); //logs values as array ['','',''] bc it shows ALL VALUES
console.log(personKeys);   //logs the keys as array ['','',''] bc it shows ALL KEYS

//forEach , logs VALUES individually
personValues.forEach(value => { //forEach iterates over the keys
    console.log(value) 
  })

//forEach , logs KEY individually
personKeys.forEach(key => { //forEach iterates over the keys
  console.log(key) 
})