const express = require('express'); // const variable can not be reassigned
const router = express.Router();

router.get('/', (req, res) => {
    //res.send(`You have reached the GET METHOD for STUDENT!`);
    res.render('studentView', { title: 'Student' });
});

router.post('/', (req, res) => {
    
    res.redirect('student');
});

router.put('/', (req, res) => {
    res.send(`You have reached the STUDENT!`);
});

router.delete('/', (req, res) => {
    res.send(`You have reached the STUDENT!`);
});

module.exports = router;
