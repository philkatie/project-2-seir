const Book = require('../models/book');

module.exports = {
    create,
    delete: deleteReview,
    edit,
    update
};

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

// delete: deleteReview function deletes a review by the user
function deleteReview(req, res) {
    Book.findOne({'reviews._id': req.params.id}, function(err, bookDoc) {
        const review = bookDoc.reviews.id(req.params.id);
        if (!review.user.equals(req.user._id)) return res.redirect(`/boks/${bookDoc._id}`);
        review.remove();
        bookDoc.save(function(err) {
            if(err) next(err);
            res.redirect(`/books/${bookDoc._id}`);
        });
    });
};

// show edit page function
function edit(req, res) {
    Book.findOne({'reviews._id': req.params.id}, function(err, bookDoc) {
        const review = bookDoc.reviews.id(req.params.id);
        if (!review.user.equals(req.user.id)) return res.redirect(`/books/${bookDoc._id}`);
        console.log(`${req.params} <--- params`)
        console.log(`${req.params.content} <--- content`)
        console.log(`${req.params.id} <--- id`)
        res.render('books/edit', {
            bookDoc,
            review,
            title: "Edit Review"
        });
    });
}

// update function, allows a user to update their review
function update(req, res) {
    Book.findOne({'reviews._id': req.params.id}, function(err, bookDoc) {
        const review = bookDoc.reviews.id(req.params.id);
        console.log(req.body.content);
        review.content = req.body.content;
        if (!review.user.equals(req.user.id)) return res.redirect(`/books/${bookDoc._id}`);
        Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        bookDoc.save(function(err) {
            res.redirect(`/books/${bookDoc._id}`)
        });
    });
}