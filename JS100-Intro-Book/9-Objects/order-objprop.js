let eevee = {
  species: 'Pokemon',
  partner: 'Chloe Cerise',
  type: 'Normal',
  0: 'testing',
  1: 'testing 2',
  3: 'testing again'
}



let vaporeon = Object.create(eevee);
vaporeon.type = 'Water';

// eevee.forEach(key => console.log(eevee[key]));

let eeveeKeys = Object.keys(eevee);
//if keys are non-negative int, they will be grouped first
//followed by other string-valued keys

eeveeKeys.forEach(key => {
  console.log(eevee[key])
});

console.log(Object.keys(vaporeon));