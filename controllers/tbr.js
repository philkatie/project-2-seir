const Book = require('../models/book');

module.exports = {
    create
}

// addToTbr function - adds book to user's TBR
function create(req, res) {
    Book.findOne({_id: req.params.id, tbr: {$nin: req.user._id}}, function(err, book) {
        if (!book) return res.redirect('/books');
        book.tbr.push(req.user._id);
        book.save(function(err) {
            res.redirect('/books');
        });
    });
};