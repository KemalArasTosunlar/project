const express = require('express');
const { askAI } = require('../controllers/aiController');
const router = express.Router();

// Send message to AI and get response
router.post('/ask', askAI);

module.exports = router;
