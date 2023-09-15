
const studentDB = [];
studentDB.push({id: 1, name: "Alice", course: "Mathematics", grade: 95});
studentDB.push({id: 2, name: "Bob", course: "History", grade: 85});
studentDB.push({id: 3, name: "Charlie", course: "Science", grade: 68});
studentDB.push({id: 4, name: "David", course: "English", grade: 78});
exports.getStudents = function(req, res) {
    //res.send(studentDB);
    res.render('StudentView', { title: 'Students' });
};
exports.createStudent = function(req, res) {
    res.send(`You have created the STUDENTS successfully`);
};
exports.updateStudent = function(req, res) {
    res.send(`You have updated the STUDENTS successfully!`);
};
exports.deleteStudent = function(req, res) {
    res.send(`You have deleted the STUDENTS successfully!`);
};

