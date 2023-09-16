const db = require('../config/db.manager');

exports.getAllCustomers = function (req, res) {
    const salesCustomer = db.getSalesCustomers().then(results=> {
        console.log(results);
        res.status(200).json({
            status: 'successful', 
            data: results.recordsets[0]
        }); // send all the data
    });
}
exports.getCustomerbyID = function(req, res){
    const {id} = req.params; // get id
    res.status(200).json({
        status: 'no implemented'
    });
}
exports.createNewCustomer = function(req, res){
    const {body} = req; 
    const {id} = req.params;
    res.status(200).json({
        status: 'no implemented'
    });
}
exports.patchCustomerByID = function (req, res){
    const {body} = req;
    const {id} = req.params;
    res.status(200).json({
        status: 'no implemented'
    });
}

exports.deleteCustomerByID = function (req, res){
    const { body } = req;
    const { id } = req.params;
    res.status(200).json({
        status: 'no implemented'
    })
}