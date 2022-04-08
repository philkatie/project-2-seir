const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');
const isLoggedIn = require('../config/auth');

// load books/index.ejs
router.get('/', booksCtrl.index);

// load books/new.ejs
router.get('/new', booksCtrl.new);
// router.get('/new', isLoggedIn, booksCtrl.new);

// load books/show.ejs
router.get('/:id', booksCtrl.show);

// add new book to db
// router.post('/', isLoggedIn, booksCtrl.create);

module.exports = router;