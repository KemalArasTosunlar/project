const express = require('express');
const { getReminders, addReminder, updateReminder, deleteReminder } = require('../controllers/reminderController');
const router = express.Router();

// Get all reminders for a user
router.get('/', getReminders);

// Create a new reminder
router.post('/', addReminder);

// Update a reminder
router.put('/:id', updateReminder);

// Delete a reminder
router.delete('/:id', deleteReminder);

module.exports = router;
