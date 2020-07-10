let firstArray = [
  'Stack Learner',
  'Stack School',
  'HM Nayem',
  'Shegufa Taranjum',
];

let secondArray = [];

// our task is to create new array elements from the length of first array and push it into second array

// Old for-loop method

for (let i = 0; i < firstArray.length; i++) {
  secondArray.push(firstArray[i].length);
}

console.log(secondArray);
// Now its time for Array.prototype.map() method

let thirdArrayForMap = firstArray.map((element) => element.length);

console.log(thirdArrayForMap);

// No iterator
// No push method
// No array literal
// Even though We got a totally different Array by modifying the firstArray

const studentArray = [
  { id: 1, name: 'Hm Nayem', gpa: 3.99, email: 'nayem@gmail.com' },
  { id: 2, name: 'Shegufa Taraanjum', gpa: 3.87, email: 'shegufa@gmail.com' },
  { id: 3, name: 'Tamim', gpa: 3.8, email: 'tamim@gmail.com' },
  { id: 4, name: 'Asief Mahir', gpa: 2.99, email: 'mahir@gmail.com' },
  { id: 5, name: 'Abir Azim', gpa: 2.6, email: 'abirAzim@gmail.com' },
];

// suppose this people have participated for their fourth semister and we want to send them email
// but first we have to extract the email of everyone + name
// for sending greetings via email

const emailData = studentArray.map((element) => {
  return {
    name: element.name,
    email: element.email,
  };
});

console.log('emailData');
console.log(emailData);

// now we want to filter the students who has gpa under 3
// and send them inspiring message to study more or try harder

const lessGpaStudents = studentArray.filter((element) => element.gpa < 3.0);
// filter method only returns filtering elements depending on the condition returns true or false and doesn't modify the array elemet
// now we can inspirational message but again have to extract email + name
console.log('lessgpastudents');
console.log(lessGpaStudents);

const inspirationalArray = studentArray
  .filter((element) => element.gpa < 3.0)
  .map((element) => {
    return {
      name: element.name,
      email: element.email,
    };
  });

console.log('inspirationalArray');
console.log(inspirationalArray);
