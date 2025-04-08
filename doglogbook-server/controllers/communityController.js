const Post = require('../models/Post'); // Assuming Post model is set up

// Get recent community posts
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Create a new community post
exports.addPost = async (req, res) => {
    const { title, content, image } = req.body;
    try {
        const newPost = new Post({ title, content, image });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a community post
exports.deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        await Post.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
