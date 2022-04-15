const express = require('express');
const router = express.Router();
const shelfCtrl = require('../controllers/shelf')

// add book to user's shelf
router.post('/books/:id/shelf', shelfCtrl.create);
// remove book from user's shelf
router.delete('/books/:id/shelf/:userId', shelfCtrl.delete);

module.exports = router;