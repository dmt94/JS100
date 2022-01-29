/*
Retrieve a Value (Part 1)
1. Write the code necessary to retrieve the value 
of the courses property of our student object.
*/
let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};
//dot notation
console.log(student.courses);
//bracket notation
console.log(student['courses']);
/////////////////////////////////////////////////////////////////////////////////////
/*
Retrieve a Value (Part 2)
2. Given the below object jane, write code that 
retrieves the country in which Jane is located.
*/
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

console.log(`Jane is from ${jane.location.country}`);
/////////////////////////////////////////////////////////////////////////////////////
/*
Add a Property
3. Below is a simple object representing our dog, Fido. 

add properties 'age' and 'favorite food' 
to the fido object.
*/
let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido.age = '5';
fido['favorite food'] = 'galaxy bars';

console.log(fido['age']);
console.log(fido['favorite food']);
/////////////////////////////////////////////////////////////////////////////////////
/*
Greetings from Jane
4. Add a property to the below object, jane, 
so that the code logs 'Hej, Bobby!' to the console.
*/

let janet = {
  firstName: 'Janet',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(name) { //property value
    console.log(`Hej, ${name}!`)
  },
};

janet.greet('Bobby'); // Hej, Bobby!
/* A property value can be any valid expression, 
including a function expression. 
When the value is a function and it is invoked 
with an explicit caller
it is called method invocation. 
*/
/////////////////////////////////////////////////////////////////////////////////////
/*
Dot Notation vs Bracket Notation
5. Before running any code, determine what difference 
there will be in the output of the two code snippets below (if any).
---------------------------
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean);
  > { prefix: 'Pacific' }
---------------------------
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean);
  > { Indian: 'Pacific' }

*/
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';
//ocean.prefix = 'Pacific'  => { prefix: 'Pacific' }

console.log(ocean); // { Indian: 'Pacific' }

/*
One important difference between bracket notation 
and dot notation is that bracket notation accepts expressions, including variables!!
Using bracket notation in line 110: 
  > We don't use the string 'prefix' but the [variable prefix] as key.
    > JavaScript looks up the value of prefix and 
      uses it as the name of the property
    > Since the value of prefix is 'Indian', 
     we are adding the property 'Indian' to the object. 
  > If we wanted to add a property 'prefix' using bracket notation, 
  we would need to write ocean['prefix'] INCLUDE quotations.
*/
