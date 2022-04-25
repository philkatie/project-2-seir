const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const isLoggedIn = require('../config/auth');

// lets user add a review
router.post('/books/:id/reviews', reviewsCtrl.create);

// lets user delete their review
router.delete('/reviews/:id', reviewsCtrl.delete);

// lets user go to page to edit their review
router.get('/reviews/:id/edit', reviewsCtrl.edit);

// lets user update their review
router.put('/reviews/:id', reviewsCtrl.update);

module.exports = router;