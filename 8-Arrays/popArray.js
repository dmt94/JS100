//pop removes and returns the last element of the array. MODIFIES caller/original array

let colors = ['cherry blossom', 
            'onyx', 
            'lavender', 
            'ruby', 
            'sapphire',
            'sunrise'
            ];

function popColor(array) {
  return array.pop()
}

// console.log(`BEFORE pop method is called: ${colors}`);
// console.log(`Return value of using pop method:\n${popColor(colors)}`);  //even though function is called inside console.log, it is still 'called'
// console.log(`Return value of using pop method:\n${popColor(colors)}`);  //popColor(colors) is called multiple times here
// console.log(`Return value of using pop method:\n${popColor(colors)}`);
// console.log(`AFTER pop method is called: ${colors}`);


console.log('BEFORE pop:', colors);
console.log(" ");
popColor(colors);
console.log('AFTER pop:', colors);
