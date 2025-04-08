const express = require('express');
const { getDogs, addDog, updateDog, deleteDog } = require('../controllers/dogController');
const router = express.Router();

// Get all dogs for a user
router.get('/', getDogs);

// Create a new dog profile
router.post('/', addDog);

// Update a dog profile
router.put('/:id', updateDog);

// Delete a dog profile
router.delete('/:id', deleteDog);

module.exports = router;
