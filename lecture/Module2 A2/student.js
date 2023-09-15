// Student Name: Seokgyun Kang
// Student ID: 1226364375
// Date: Sep 3, 2023

var students = [];

var student = {
    name: 'John Smith', 
    birthYear: 2002, 
    course: 'IFT 458', 
    grade: 90, 
    active: true, 
    age: function calculator(){
        if(this.active){
            return 2022 - this.birthYear;
        }
        else{
            return 0 
        }
    }
}

var student2 = {
    name: 'Andy Moore', 
    birthYear: 2000, 
    course: 'IFT 458', 
    grade: 100, 
    active: false,
    age: function(){
        if(this.active){
            return 2022 - this.birthYear;
        }
        else{
            return 0
        }
    }
}

students.push(student);
students.push(student2);

students.forEach((item)=> console.log(item.age()));

console.log(students);


// console.log(student['name']);
// console.log(student.name);

// console.log(student.name, student.age());
// console.log(student2.name, student2.age());
