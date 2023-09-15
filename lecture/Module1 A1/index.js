// Student Name: Seokgyun Kang
// Student ID: 1226364375
// Date: Aug 23, 2023

// Import necessary module
const express = require('express');
const app = express();
const fs = require('fs');
const util = require('util');
const log_file = fs.createWriteStream(__dirname + '/student.log', {flags : 'w'});
const log_stdout = process.stdout;

// Functio to write console.log to file
console.log = function(d) {
    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
}

// Set EJS as templatating engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

// Serve the form
app.get('/', (req, res) => {
    res.render('form.ejs')
});

// Handle form submissions
app.post('/submit', (req, res) => {
    console.log(req.body); //This will log form data to console
    res.redirect('/');
});

// Start Server
app.listen(3000, () => {
    console.log("Server is running on port 3000")
});
