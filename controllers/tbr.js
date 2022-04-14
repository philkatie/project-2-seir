const Book = require('../models/book');

module.exports = {
    create,
    delete: deleteTbr
}

// addToTbr function - adds book to user's TBR
function create(req, res) {
    Book.findById(req.params.id, function(err, book) {
        console.log(book);
        book.onTbr.push(req.user._id);
        book.save(function(err) {
            res.redirect(`/books/${book._id}`);
        });
    });
};

function deleteTbr(req, res) {
    Book.findById(req.params.id, function(err, book) {
        console.log(book);
        console.log(`${req.user._id} <-- user id`);
        console.log(book.onTbr);
        let i = book.onTbr.indexOf(req.user._id);
        console.log(i);
        book.onTbr.splice(i, 1);
        book.save(function(err, b) {
            if(err) {
                console.log(err)
            }
            console.log(book.onTbr);
            res.redirect(`/books/${req.params.id}`);
        });
    });
};
