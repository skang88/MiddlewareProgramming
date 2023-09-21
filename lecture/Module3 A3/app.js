const express = require('express');
const app = express();

const books = [];

// Global middleware function

const bodyParser = require('body-parser');
app.use(bodyParser.json());  // using the middleware body-parser to parse the body


// Route middleware function

// Authentication middleware
const userLogin = (req, res, next) => {
    if(req.query.login === 'true') {
        next();
    } else {
        res.status(400).send('You should log in');
    }
}
 
// Get books
const getBooks = (req, res) => {
    res.send(books);
};

// Add cart middleware
const addBook = (req, res) => {
    const book = req.body;
    books.push(book);
    res.send(`Book name ${book.bname} added to cart`);
    console.log(`Book name ${book.bname} added to cart`);
};

// Delete book middleware
const deleteBook = (req, res) => {
    const id = req.params.id;
    books.splice(id, 1);
    res.send(`Book id with ${id} has been deleted`);
    console.log(`Book id with ${id} has been deleted`);
}

// Routes

app.get('/', (req, res) => {
    res.send('Welcome to BookHub!');
});
 
app.get('/cart/view', getBooks);
app.post('/cart/add', userLogin, addBook);
app.delete('/cart/remove/:id', deleteBook);

app.listen(3000, ()=> console.log('Server is running on port 3000'));