const Book = require('../models/book');

module.exports = {
    create,
    delete: deleteShelf
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

function deleteShelf(req, res) {
    Book.findById(req.params.id, function(err, book) {
        let i = book.usersReading.indexOf(req.user._id);
        book.usersReading.splice(i, 1);
        book.save(function(err, b) {
            if(err) {
                console.log(err)
            }
            console.log(book.usersReading);
            res.redirect(`/books/${req.params.id}`);
        });
    });
};