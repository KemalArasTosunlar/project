const express = require('express');
const { register, login, getCurrentUser } = require('../controllers/authController');
const router = express.Router();

// Register user
router.post('/register', register);

// Login user
router.post('/login', login);

// Get current user profile
router.get('/me', getCurrentUser);

module.exports = router;
