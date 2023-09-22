const express = require('express'); // const variable can not be reassigned
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`You have reached the GET METHOD for Assignment!`);
});

router.post('/', (req, res) => {
    res.send(`You have reached the Assignment!`);
});

router.put('/', (req, res) => {
    res.send(`You have reached the Assignment!`);
});

router.delete('/', (req, res) => {
    res.send(`You have reached the Assignment!`);
});

module.exports = router;
    