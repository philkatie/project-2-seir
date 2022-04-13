const express = require('express');
const router = express.Router();
const tbrCtrl = require('../controllers/tbr')

// add book to user's tbr
router.post('/books/:id/tbr', tbrCtrl.create);
router.delete('/books/:id/tbr/:userId', tbrCtrl.delete);

module.exports = router;