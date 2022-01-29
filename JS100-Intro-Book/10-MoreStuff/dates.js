let rlSync = require('readline-sync');

//getDay method 

function userMonth() {
  let month = rlSync.question("Type a month\n").toLowerCase();
  let monthA = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ]
  if (monthA.includes(month)) {
    return month
  }
  else {
    console.log('Month not found. Try again.')
    return userMonth();
  }
}

let month = userMonth()
let day = Number(rlSync.question("Type a day\n"));
let year = Number(rlSync.question("Type a year\n"));

let date = new Date(`${month} ${day}, ${year}`); 

function dayOfTheWeek(day) {
  let numDate = day.getDay(); //.getDay() returns 0 > 6 , can correspond to index value  in array
  let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return daysOfWeek[numDate]; //returns value in the array with its corresponding index
}

console.log(dayOfTheWeek(date));
console.log(`${month.replace(month[0], month[0].toUpperCase())} ${day}, ${year} was on a ${dayOfTheWeek(date)}`);
