const express = require('express');
const { getLogs, addLog, deleteLog } = require('../controllers/logController');
const router = express.Router();

// Get logs for a specific dog
router.get('/:dogId', getLogs);

// Add a daily log for a specific dog
router.post('/:dogId', addLog);

// Delete a log entry
router.delete('/:logId', deleteLog);

module.exports = router;
