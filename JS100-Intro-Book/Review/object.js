let student = {
  name: 'Hunkle',
  age: 23,
  hobbies: ['doing projects', 'learning', 'gaining weight'],
  studies: 'data science',
  'university choices': ['UC Irvine', 'UC Davis', 'UC Berkeley', 'CSU Long Beach']
                //INDEX        0            1            2               3
                //LENGTH: amount of elements (4)
}

let studentEntries = Object.entries(student);
console.log(studentEntries);