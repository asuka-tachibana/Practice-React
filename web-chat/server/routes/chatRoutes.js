const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authMiddleware = require('./authMiddleware');

// Import your User and Message models
const User = require('./models/user');
const Message = require('./models/message');

// Get most recent chat
app.get('/api/recent-chat', authMiddleware, async (req, res) => {
    // Retrieve the most recent chat for the logged-in user, or return an empty response if no chats exist.
});

module.exports = router;