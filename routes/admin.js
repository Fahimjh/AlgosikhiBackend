const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Use correct case
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

// Get all users and their progress
router.get('/users', verifyToken, isAdmin, async (req, res) => {
    try {
        const users = await User.find({}, 'username email progress');
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Update user info (username, email, password)
router.put('/user/:userId', verifyToken, isAdmin, async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const update = { username, email };
        if (password) {
            const bcrypt = require('bcryptjs');
            update.password = await bcrypt.hash(password, 10);
        }
        await User.findByIdAndUpdate(req.params.userId, update);
        res.json({ message: 'User updated' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Delete a user by ID
router.delete('/user/:userId', verifyToken, isAdmin, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.userId);
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Update topic/subtopic completion for a user
router.post('/user/:userId/progress', verifyToken, isAdmin, async (req, res) => {
    const { topic, sub, isDone } = req.body;
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        if (!user.progress) user.progress = {};
        if (!user.progress[topic]) user.progress[topic] = {};
        user.progress[topic][sub] = isDone;

        await user.save();
        res.json({ message: 'Progress updated' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;