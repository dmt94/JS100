let obj2 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

let obj2RepValues = [];

let vals = Object.values(obj2); //values in array

for (element in vals) { //element is index of the values
  let innerVal = Object.values(vals[element]);
  for (x in innerVal) { //x is integer & innerVal is the ARRAY of values
    if (typeof innerVal[x] === 'object' && innerVal[x] !== null) {
      let obj = Object.values(innerVal[x]);
      if (obj == 6) {
        obj2RepValues.push(606);
        continue
        }
    }
    obj2RepValues.push(innerVal[x])
  }
};

console.log(obj2RepValues); // logs the new array with replacement from 6 > 606

