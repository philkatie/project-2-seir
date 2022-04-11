const express = require('express');
const router = express.Router();
const shelfCtrl = require('../controllers/shelf')

// add book to user's tbr
router.post('/books/:id/shelf', shelfCtrl.create);

module.exports = router;