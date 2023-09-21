// require express use or import express

const express = require('express');
const app = express();

const welComeMiddleware = (req, res, next) => {
    console.log('Welcome to my website');
    next();
};

const checkAdmin = (req, res, next) => {
    if(req.query.admin === 'true') {
        next();
    } else {
        res.status(400).send('Shoud be admin');
    }
}


app.use(checkAdmin);
app.use(welComeMiddleware);

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

