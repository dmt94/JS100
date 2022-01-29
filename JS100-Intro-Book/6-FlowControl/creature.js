let rlSync = require('readline-sync');

let creatureList = [
  {'vampire': 98},
  {'human': 5},
  {'elf': 200},
  {'mage': 100},
  {'animagus': 80},
  {'fae': 150},
  {'mermaid': 90},
  {'werewolf': 70},
]

function randomCreature() {
  let creature = creatureList[Math.floor(Math.random() * creatureList.length)];
  return creature;
}

function userFate() {
  let pick = randomCreature();
  let creature = Object.keys(pick);
  let magic = Object.values(pick);
  if (creature[0] == 'a' || creature[0] == 'e' || 
  creature[0] == 'i' || creature[0] == 'o' || creature[0] == 'u' ) {
    console.log(`You are an ${creature} with ${magic} magic points!`);
  }
  else console.log(`You are a ${creature} with ${magic} magic points!`)
}

userFate();

