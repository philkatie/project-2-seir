const Book = require('../models/book');


module.exports = {
    index,
    new: newBook,
    show
};

// index function - renders All Books index.ejs
function index(req, res) {
    Book.find({}, function(err, books) {
        res.render('books/index', {
            books,
            title: "All Books"
        });
    });
};

// show function - renders Book Detail show.ejs
function show(req, res) {
    Book.findById(req.params.id, function(err, book) {
        res.render('books/show', {
            title: 'Book Details'
        });
    });
};

// new: newBook function - renders New Book new.ejs
function newBook(req, res) {
    res.render('books/new', {
        title: 'New Book'
    });
};

// create function - lets a user add a new book to the DB
