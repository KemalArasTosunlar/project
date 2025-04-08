const express = require('express');
const { getPosts, addPost, deletePost } = require('../controllers/communityController');
const router = express.Router();

// Get recent community posts
router.get('/', getPosts);

// Create a new community post
router.post('/', addPost);

// Delete a community post
router.delete('/:id', deletePost);

module.exports = router;
