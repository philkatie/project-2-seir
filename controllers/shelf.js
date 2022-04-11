const Book = require('../models/book');

module.exports = {
    create
}

// addToTbr function - adds book to user's TBR
function create(req, res) {
    Book.findById(req.params.id, function(err, book) {
        book.usersReading.push(req.user._id);
        book.save(function(err) {
            res.redirect(`/books/${book._id}`);
        });
    });
};