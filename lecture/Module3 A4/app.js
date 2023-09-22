
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const registerRouter = require('./router/registerRouter');
const getUsers = require('./router/getUsers');
const loginRouter = require('./router/loginRouter');
const morgan = require('morgan');
const { updateUser, updatePassword } = require('./controllers/userController');

const app = express();

 
app.use(morgan('dev'));
app.use(bodyParser.json());  // using the middleware body-parser to parse the body
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// ROOT Route
app.get('/', (req, res) => {
    res.send('Hello');
});


// Register Route
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/getUsers', getUsers);
app.use('/updateInfo', updateUser);
app.use('/updatePassword', updatePassword);

// Serve
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

  