const Book = require('../models/book');

module.exports = {
    create
};

// delete: deleteReview function deletes a review by the user

// create function, allows a user to create a new review
function create(req, res) {
    Book.findById(req.params.id, function(err, book) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;

        book.reviews.push(req.body);
        book.save(function(err) {
            res.redirect(`/books/${book._id}`);
        });
    });
};