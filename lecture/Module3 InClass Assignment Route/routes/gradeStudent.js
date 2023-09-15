const express = require('express'); // const variable can not be reassigned
const router = express.Router();
const email = []

router.get('/', (req, res) => {
    //res.send(`You have reached the GET METHOD for STUDENT!`);
    console.log("GET");
    res.render('studentView', { title: 'Student', email });
});
  
router.post('/', (req, res) => {
    const student =  req.body; 
    // Object construction with destructuring
    const { email } = student;
    console.log('\nExtract email from the Object');
    console.log(email);
    res.render('studentView', { title: 'Student', email });
});
   

router.put('/', (req, res) => {
    res.send(`You have reached the STUDENT!`);
});

router.delete('/', (req, res) => {
    res.send(`You have reached the STUDENT!`);
});

module.exports = router;
