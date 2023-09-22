const express = require('express');
const router = express.Router();
const users = require('../model/User');
const userDB = [];
userDB.push({username: 'kore9184', email: "kore9184@mail.com", password: "kksiof9123", confirmedPassword: 'kksiof9123'});
userDB.push({username: 'jimin1393', email: "jimin1393@mail.com", password: "sadalk123", confirmedPassword: 'sadalk123'});
userDB.push({username: 'buda9193', email: "buda9193@mail.com", password: "kljsdnladlas992", confirmedPassword: 'kljsdnladlas992'});
userDB.push({username: 'siko1938', email: "siko1938@mail.com", password: "sldk904", confirmedPassword: 'sldk904'});


// getUsers controller
const getUsers = (req, res) => {
    res.send(userDB);
}


// getUsers Route
router.get('/', getUsers);


// Export module
module.exports = router;
