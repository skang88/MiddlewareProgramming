const express = require('express'); // const variable can not be reassigned
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`You have reached the GET METHOD for Course!`);
});

router.post('/', (req, res) => {
    res.send(`You have reached the Course!`);
});

router.put('/', (req, res) => {
    res.send(`You have reached the Course!`);
});

router.delete('/', (req, res) => {
    res.send(`You have reached the Course!`);
});

module.exports = router;
