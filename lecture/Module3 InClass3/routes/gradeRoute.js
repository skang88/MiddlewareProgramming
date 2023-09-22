const express = require('express'); // const variable can not be reassigned
const router = express.Router();

router.get('/', (req, res) => {
    //res.send(`You have reached the GET METHOD for GRADES!`);
    res.render('gradeView', { title: 'Grades' })
});

router.post('/', (req, res) => {
    res.send(`You have reached the GRADES!`);
});

router.put('/', (req, res) => {
    res.send(`You have reached the GRADES!`);
});

router.delete('/', (req, res) => {
    res.send(`You have reached the GRADES!`);
});

module.exports = router;

