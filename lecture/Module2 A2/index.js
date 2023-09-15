// Student Name: Seokgyun Kang
// Student ID: 1226364375
// Date: Sep 3, 2023

// function greetTheStudents(studentName){ // parameter  // name function
//     return `Hello there  ${studentName}`;
// }
// fat arrow function

// const greetTheStudents = function (studentName){ // parameter  // anonymous function 
//     return `Hello there  ${studentName}`;
// }

// const greetTheStudents = (studentName)=> { // parameter  // anonymous function 
//     return `Hello there  ${studentName}`;
// }

const greetTheStudents = studentName => `Hello there ${studentName}`;

// const fullName = function (firstName, middleName, lastName){
//     return `${firstName}, ${middleName}, ${lastName}`;
// }

// const fullName = (firstName, middleName, lastName)=>{
//     return `${firstName}, ${middleName}, ${lastName}`;
// }

const fullName = (firstName, middleName, lastName) => `${firstName}, ${middleName}, ${lastName}`;

// const student = "Mary Jane";
// const greet = greetTheStudents(student); // argument
// console.log(greet);

const titleName = fullName('Mary', 'R', 'Jane');
console.log(titleName)

console.log(greetTheStudents('Roy'));
console.log(greetTheStudents('Jeeee'));
// console.log(message + ' ' + studentName);
// console.log(message + ' ' + studentName2);

 