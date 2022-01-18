let pokemon = {
  fairy: 'Alcremie',
  water: 'Primarina',
  dragon: 'Dragonair',
  steel: 'Magearna',
  grass: 'Bellossom',
}

let pokemonName = Object.values(pokemon); //values will behave as an array (group)

//logs each values using val as index to retrieve them (individual)
for (val in pokemonName) {
  console.log(val, pokemonName[val]); // indexNumber, individual value (values of key properties)
}

pokemonName.forEach(val => console.log(val)); //logs each value , one expression suffice

let pokemonType = Object.keys(pokemon); //keys will behave as an array (group)

for (key in pokemonType) {
  console.log(key, pokemonType[key]); // // indexNumber, individual value (key names); pokemonType[key] are individual types
}

pokemonType.forEach(val => console.log(val)); //logs each 'key', individually


