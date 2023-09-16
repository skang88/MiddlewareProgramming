const express = require('express');
const router= express.Router();
const salesController = require('../controllers/customerController');

router  
    .route('/')
    .get(salesController.getAllCustomers)
    .post(salesController.createNewCustomer);

router
    .route('/:id')
    .get(salesController.getCustomerbyID)
    .patch(salesController.patchCustomerByID)
    .delete(salesController.deleteCustomerByID);

module.exports = router;
