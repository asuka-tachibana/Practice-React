const express = require('express');
const Chat = require('../models/Chat');
const Message = require('../models/Message');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Fetch the user's chats
router.get('/chats', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const chats = await Chat.find({ participants: user._id }).populate('participants', 'username');

    res.status(200).json(chats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new chat
router.post('/chats', authMiddleware, async (req, res) => {
  try {
    const { participantId } = req.body;
    const newChat = new Chat({ participants: [req.userId, participantId] });

    await newChat.save();
    res.status(201).json(newChat);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Send a message to a chat
router.post('/chats/:chatId/messages', authMiddleware, async (req, res) => {
  try {
    const { body } = req.body;
    const newMessage = new Message({ body, sender: req.userId });

    await newMessage.save();

    const chat = await Chat.findById(req.params.chatId);
    chat.messages.push(newMessage);
    await chat.save();

    res.status(201).json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Fetch the chat's messages
router.get('/chats/:chatId/messages', authMiddleware, async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.chatId).populate({
      path: 'messages',
      populate: { path: 'sender', select: 'username' },
    });

    res.status(200).json(chat.messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
