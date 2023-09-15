// let  // let variable can be reassigned
const express = require('express'); // const variable can not be reassigned
const morgan = require('morgan')
const app = express();
const port = 3000;
const apiVersion = '/api/v1';
const path = require('path');
const bodyParser = require('body-parser');


// debugging
// 1) Middle Ware
//if (process.env.NODE_ENV === 'development'){
app.use(morgan('dev'));

// This statement is needed to parse from ejs form (ex. student fname ... )
app.use(bodyParser.urlencoded({ extended: false }));

//};
// Set the view engine to ejs : Add the lines 13 through 17
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

// ROOT Route
app.get('/', (req, res) => {
    console.log(req.requestTime);
    console.log('ROOT was reached!');
    //res.send(`You have reached the ROOT !`); 
    res.render('index', {title: 'Home'})
});

// Grade Route
const gradeRoute = require('./routes/gradeRoute');
app.use(`${apiVersion}/grade`, gradeRoute);

// Student Route
const studentRoute = require('./routes/gradeStudent');
app.use(`${apiVersion}/student`, studentRoute);

// Courses Route
const courseRoute = require('./routes/gradeCourse');
app.use(`${apiVersion}/course`, courseRoute);

// Assignment Route
const assignmentRoute = require('./routes/gradeAssignment');
app.use(`${apiVersion}/assignment`, assignmentRoute);

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});


