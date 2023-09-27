const  Student = require('../models/studentModel');

exports.getData = async (req, res) => {
    // get data from database
    const students = await Student.find();
    res.status(200).json({
        status: 'success', 
        results: students.length, 
        data: {
            students
        } 
    });
    console.log(students);
};

exports.getDataById = async (req, res) => {
    // get data from database
    const {id} = req.params;
    const students = await Student.find({_id: id});
    res.status(200).json({
        status: 'success', 
        results: students.length, 
        data: {
            students
        } 
    });
    console.log(students);
};

exports.postData = async (req, res) => {
    const newStudent = req.body;
    const student = await Student.create(newStudent)

    res.status(201).json({  
        status: 'success', 
        data: newStudent 
    });
    console.log(newStudent);

};

exports.updateDataById = (req, res) => res.send("Hello World! from student PUT By ID"); 
exports.postDataById = (req, res) => res.send("Hello World! from student Post By ID}"); 
exports.deleteDataById = (req, res) => res.send("Hello World! from student Post By ID}"); 

