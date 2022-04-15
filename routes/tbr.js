const express = require('express');
const router = express.Router();
const tbrCtrl = require('../controllers/tbr')

// add book to user's tbr
router.post('/books/:id/tbr', tbrCtrl.create);
// remove book from user's tbr
router.delete('/books/:id/tbr/:userId', tbrCtrl.delete);

module.exports = router;