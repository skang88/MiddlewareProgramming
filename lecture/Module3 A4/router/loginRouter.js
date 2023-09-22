const express = require('express');
const router = express.Router();

// Login Route
router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', (req, res) => {
    const { username } = req.body;
    res.send(`The user ${username} has been logged in!`);
});

module.exports = router;
