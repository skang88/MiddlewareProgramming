const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// log add
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})

// Root route
app.get('/', (req, res) => res.send("Hello World!"));

// routes 
const studentRoute = require('./routes/studentRoute')
app.use('/student', studentRoute);

const gradeRoute = require('./routes/gradeRoute')
app.use('/grade', gradeRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}`));

//Connecting to the database
const mongoose = require('mongoose');

//sysncronous connection
// mongoose.connect('mongodb://localhost:27017/StudentDB', {useNewUrlParser: true}, (err) =>{
//     if (!err) {console.log('connection successful')}
//     else {console.log('Error in DB connection : ' + err)}
// });


//asyncronous connection
mongoose.connect('mongodb+srv://dxs:1234@cluster0.wudm1uz.mongodb.net/ift458Test', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
        .then(() => console.log('MongoDB connection successful'))
        .catch((err) => console.log(err));
