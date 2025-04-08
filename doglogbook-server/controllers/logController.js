const Log = require('../models/Log'); // Assuming Log model is set up

// Get logs for a specific dog
exports.getLogs = async (req, res) => {
    const { dogId } = req.params;
    try {
        const logs = await Log.find({ dogId });
        res.json(logs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Add a daily log for a specific dog
exports.addLog = async (req, res) => {
    const { dogId } = req.params;
    const { activity, duration } = req.body;
    try {
        const newLog = new Log({ dogId, activity, duration });
        await newLog.save();
        res.status(201).json(newLog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a log entry
exports.deleteLog = async (req, res) => {
    const { logId } = req.params;
    try {
        await Log.findByIdAndDelete(logId);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
