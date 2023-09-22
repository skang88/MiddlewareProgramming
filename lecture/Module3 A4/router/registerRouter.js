const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router
    .route('/')
    .get(userController.getRegister)
    .post(userController.addUser);

router
    .route('/:id')
    .get(userController.getSpecificUser)
    .put(userController.updateUser)
    .delete(userController.checkAdmin, userController.deleteUser);

module.exports = router;


 
