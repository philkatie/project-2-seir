const express = require('expess');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const isLoggedIn = require('../config/auth');

// lets user add a review
// router.post('/books/:id/reviews', isLoggedIn, reviewsCtrl.create);

// lets user delete their review
// router.post('/reviews/:id', reviewsCtrl.delete);


module.exports = router;