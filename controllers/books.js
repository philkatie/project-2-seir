const Book = require('../models/book');


module.exports = {
    index,
    new: newBook,
    show,
    create,
    mine: myShelf
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
            title: 'Book Details', book: book
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
function create(req, res) {
    const book = new Book(req.body);
    book.save(function(err) {
        if (err) return res.redirect("/books/new");
        console.log(book);
        res.redirect(`/books/${book._id}`);
    });
};

// userShelf function - accesses a user's bookshelf
function myShelf(req, res) {
    Book.find({}, function(err, books) {
        res.render('books/myshelf', {
            books,
            title: "My Bookshelf"
        });
    });
};