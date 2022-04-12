const Book = require('../models/book');

module.exports = {
    show
}

// index function - accesses a user's bookshelf
function show(req, res) {
    Book.find({}, function(err, books) {
        res.render('users/show', {
            books,
            title: "My Bookshelf"
        });
    });
};