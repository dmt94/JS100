/*
Check the Weather, Part 2
6. Take your code from the previous Check the Weather exercise and 
rewrite it as a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'.
*/
let weatherArray = [
  'sunny', 
  'rainy', 
  'stormy', 
  'windy',
  'perfect',
  'foggy',
  'snowy',
  'cloudy'
];

let weather = weatherArray[Math.floor(Math.random() * weatherArray.length)];

console.log('It is a', weather, 'day');

switch (weather) {
  case 'sunny':
    console.log('Picnic time!');
    break;
  case 'rainy':
    console.log('It\'s a stay in bed and read books kind of weather today...');
    break;
  case 'stormy':
    console.log('Stay indoors and code!');
    break;
  case 'snowy':
    console.log('Time to make some hot cocoa!');
    break;
  default:
    console.log('I\'ll make the most out of this weather!');
}
////////////////////////////////////////////////////////////////////////////////////
/*
Logical Conditions 1
7. Predict the output of the following code:

if (false || true) {
  console.log('Yes!');
} else {
  console.log('No...');
}

  > 'Yes!' will always be logged because the logical or operator || is used 
  Condition will evaluate to a truthy value if either one of its operands is truthy.
*/
////////////////////////////////////////////////////////////////////////////////////
/*
Logical Conditions 2
8.  Predict the output of the following code:

if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}

  > 'No...' will always be logged because the logical and operator && 
  is used, and in this case will only return the expected value if
  both of its operands are truthy and false is not truthy, so this 
  condition will never be met
*/
////////////////////////////////////////////////////////////////////////////////////
/*
Logical Conditions 3
9. Determine what will be logged to the console.

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice); 
  > will log $3.99 because sale is true, 
  which fails the conditional in the ternary expression

  > The logical not operator returns false when 
  its operand (in our case sale) is truthy. 
  The condition that is checked is therefore false, 
  and thus admissionPrice is assigned to the value 
  of the second operand (3.99) of our ternary statement.
*/

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice); 
////////////////////////////////////////////////////////////////////////////////////
/*
Are we moving?
10. Determine what the following code snippet logs. 
First solve it in your head or on paper, and only then run it 
in your JavaScript console to check the result.

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving); // true? 
*/
let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);
/*                                               0 > 0   ||   24 > 0
                                                       true
                                  24true    &&   24true
                          (non-zero integers are truthy)
                      19   <   24true
                          
*/
console.log(isMoving); // true
// Do we need the parentheses in the boolean expression or could we also have written the following?
let isMoving2 = brakingForce < acceleration && speed > 0 || acceleration > 0;
console.log(isMoving2)
// Yes, we do need the parentheses, because && has a higher operator precedence than ||, 
// even though in this case the output will still be true, it's important to note this distinction

/*
The provided code uses the logical or operator ||, 
which checks whether at least one of its operands is truthy, 
and the logical and operator &&, which checks whether both its operands are truthy.
*/