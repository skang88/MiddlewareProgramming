const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app =  express();

var corsOptions = {
    origin: 'http://localhost:8080'
};

app.use(cors(corsOptions));

// Moran is used for debugging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// json is used for injecting the body attribute in the pipeline
app.use(express.json());

// parse requests of content-type-application / x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('Hello from the middleware :) ');
    next();
});

// Middle routes loading
const salesRouter = require('./routes/salesRouter');
const customerRouter = require('./routes/customerRouter');
app.use('/api/v1/sales', salesRouter);
app.use('/api/v1/customer', customerRouter);

module.exports = app; 


