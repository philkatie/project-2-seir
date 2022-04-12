const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users')
const isLoggedIn = require('../config/auth');

// open user's bookshelf
router.get('/', isLoggedIn, usersCtrl.show);

module.exports = router;