const Reminder = require('../models/Reminder'); // Assuming Reminder model is set up

// Get all reminders for a user
exports.getReminders = async (req, res) => {
    try {
        const reminders = await Reminder.find({ userId: req.user.id }); // Assuming user ID is available
        res.json(reminders);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Create a new reminder
exports.addReminder = async (req, res) => {
    const { title, date } = req.body;
    try {
        const newReminder = new Reminder({ title, date, userId: req.user.id });
        await newReminder.save();
        res.status(201).json(newReminder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a reminder
exports.updateReminder = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedReminder = await Reminder.findByIdAndUpdate(id, updates, { new: true });
        res.json(updatedReminder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a reminder
exports.deleteReminder = async (req, res) => {
    const { id } = req.params;
    try {
        await Reminder.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
