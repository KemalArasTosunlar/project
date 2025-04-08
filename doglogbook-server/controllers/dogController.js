const Dog = require('../models/Dog'); // Assuming Dog model is set up

// Get all dogs for a user
exports.getDogs = async (req, res) => {
    try {
        const dogs = await Dog.find({ userId: req.user.id }); // Assuming user ID is available
        res.json(dogs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Create a new dog profile
exports.addDog = async (req, res) => {
    const { name, breed, birthday, photo } = req.body;
    try {
        const newDog = new Dog({ name, breed, birthday, photo, userId: req.user.id });
        await newDog.save();
        res.status(201).json(newDog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a dog profile
exports.updateDog = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedDog = await Dog.findByIdAndUpdate(id, updates, { new: true });
        res.json(updatedDog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a dog profile
exports.deleteDog = async (req, res) => {
    const { id } = req.params;
    try {
        await Dog.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
