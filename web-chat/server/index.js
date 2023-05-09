require('dotenv').config(); // This will loads environment variables from a .env file into process.env. 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const profileRoutes = require('./routes/profileRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err));

// Use routers
app.use('/api', authRoutes);
app.use('/api', chatRoutes);
app.use('/api', profileRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});