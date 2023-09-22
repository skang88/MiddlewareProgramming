const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router
    .route('/:id')
    .put(userController.updateUser)

module.exports = router;


 
