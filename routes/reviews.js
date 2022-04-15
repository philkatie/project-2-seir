const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const isLoggedIn = require('../config/auth');

// lets user add a review
router.post('/books/:id/reviews', reviewsCtrl.create);

// lets user delete their review
router.delete('/reviews/:id', reviewsCtrl.delete);

module.exports = router;