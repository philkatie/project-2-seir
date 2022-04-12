const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users')

// open user's bookshelf
router.get('/', usersCtrl.show);

module.exports = router;