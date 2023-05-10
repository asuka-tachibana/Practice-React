const express = require('express');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Get the current user's profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update the current user's bio
router.patch('/profile', authMiddleware, async (req, res) => {
  try {
    const { bio } = req.body;
    const user = await User.findByIdAndUpdate(req.userId, { bio }, { new: true }).select('-password');
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
