const express = require('express'); // const variable can not be reassigned
const router = express.Router();
const studentController = require('../controllers/studentController')

router.route('/')
    .get(studentController.getStudents)
    .post(studentController.createStudent);

router.route('/:id')
    .get(studentController.getStudents)
    .post(studentController.createStudent)
    .put(studentController.updateStudent);
    //.patch(studentController.deleteStudent);

module.exports = router;

 