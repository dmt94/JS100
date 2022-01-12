const MyArray = [1, 2, 3];
MyArray[1] = 5;

console.log(MyArray);
MyArray = [4, 3, 6];
console.log(MyArray); // Uncaught TypeError: Assignment to constant variable.