const userDB = [];

exports.getUsers = function(req, res) {
    //res.send(userDB);
    res.render('UserLoginForm', {title : 'User Login Form', Users: userDB});
};
exports.createUser = function(req, res) {

    var user = req.body;
    const { fname, lname, email } = user;

    res.render('userLoginCreateUserConfirmation', {title : 'User Login Cofirmation', fname, lname, email });
    //res.send(`You have created the User successfully`);
};
exports.updateUser = function(req, res) {
    res.send(`You have updated the User successfully!`);
};
exports.deleteUser = function(req, res) {
    res.send(`You have deleted the User successfully!`);
};

