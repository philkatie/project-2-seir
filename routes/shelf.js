const express = require('express');
const router = express.Router();
const shelfCtrl = require('../controllers/shelf')

// add book to user's tbr
router.post('/books/:id/shelf', shelfCtrl.create);
router.delete('/books/:id/shelf/:userId', shelfCtrl.delete);

module.exports = router;