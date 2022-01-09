let animals = ['rabbit', 'fox', 'elephant', 'tiger', 'lion', 'whale', 'kangaroo'];
let upperAnimals = [];
let index = 0;

while (index < animals.length) {
  let upperCaseAnimals = animals[index].toUpperCase();
  upperAnimals.push(upperCaseAnimals);
  index += 1;
}

console.log(upperAnimals);