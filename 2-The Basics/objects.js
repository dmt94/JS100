

function randomSounds() {
  const objOne = { 
  dog: 'bark', 
  cat: 'meow', 
  pig: 'oink' 
  }

let dogSound = objOne['dog'];
let catSound = objOne['cat'];
let pigSound = objOne['pig'];

let randNum = Math.floor(Math.random()*3)
let randKey = Object.keys(objOne)[randNum];

if (randKey == 'dog') {
  console.log(`dogs ${dogSound}`);
}
else if (randKey == 'cat') {
  console.log(`cats ${catSound}`);
}
else if (randKey == 'pig') {
  console.log(`pigs ${pigSound}`);
}
}

randomSounds()