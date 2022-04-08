const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number
    },
    pageCount: {
        type: Number,
        min: 1
    },
    imageUrl: {
        type: String
    },
    genre: {
        type: String,
        enum: [
            'Contemporary',
            'Fantasy',
            'Historical Fiction', 
            'Mystery/Thriller',
            'Romance',
            'Science Fiction',
            'Young Adult',
            'Classic',
            'Nonfiction']
    },
    onTbr: [{type: Schema.Types.ObjectId, ref: 'User'}],
    usersReadubg: [{type: Schema.Types.ObjectId, ref: 'User'}],
    reviews: [reviewSchema]
});

module.exports = mongoose.model('Book', bookSchema);