const users = require('../model/User');
const userDB = [];

// Authentication middleware
const checkAdmin = (req, res, next) => {
    if(req.query.admin === 'true') {
        next();
    } else {
        res.status(400).send('Should be admin');
    }
}


const getRegister = (req, res) => {
    res.render('register');
}   
   
const addUser = (req, res) => {
    // Create a new user instance
    const { username, email, password, confirmedPassword } = req.body;
    const newUser = new users(username, email, password, confirmedPassword);
    
    if(password !== confirmedPassword){
        res.status(400).send('Passwords do not match');
        console.log('Passwords do not match');
    } else {
        userDB.push(newUser);
        res.send(`New user ${newUser.username} has been added`);
        console.log(`New user ${newUser.username} has been added`);
    }
}

const getSpecificUser = (req, res) => {
    const id = req.params.id;

    const currentUser = userDB[id];
    if(currentUser == undefined){ 
        res.send(`User with the ${id} is not found.`);
        next();
    }
    res.send(`User with the ${id} is ${currentUser.username}`);
};

const updateUser = (req, res) => {
    const id = req.params.id;
    const user = req.body;
    userDB[id] = user;
    res.render('update-info');
}

const updatePassword = (req, res) => {
    const id = req.params.id;
    const user = req.body;
    userDB[id] = user;
    res.render('update-password');
}

const deleteUser = (req, res) => {
    const id = req.params.id;
    //const student = students[id];
    userDB.splice(id, 1);
    res.send(`User with the id ${id} has been deleted`);
}

 
module.exports = { 
    getRegister, 
    addUser, 
    updateUser, 
    deleteUser,
    checkAdmin,
    getSpecificUser, 
    updatePassword
}