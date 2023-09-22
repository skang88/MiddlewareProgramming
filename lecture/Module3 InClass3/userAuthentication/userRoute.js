const express = require('express'); // const variable can not be reassigned
const router = express.Router();
const userController = require('../userAuthentication/userController')

router.route('/')
    .get(userController.getUsers)
    .post(userController.createUser);

router.route('/:id')
    .get(userController.getUsers)
    .put(userController.updateUser)
    .patch(userController.deleteUser);

module.exports = router;

 