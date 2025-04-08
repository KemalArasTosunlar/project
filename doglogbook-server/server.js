const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection will be handled by test setup
if (process.env.NODE_ENV !== 'test') {
  mongoose
    .connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
}

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/dogs', require('./routes/dogRoutes'));
app.use('/api/logs', require('./routes/logRoutes'));
app.use('/api/community', require('./routes/communityRoutes'));
app.use('/api/reminders', require('./routes/reminderRoutes'));
app.use('/api/ai', require('./routes/aiRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => 
  console.log(`Server is running on port ${PORT}`)
);

module.exports = server;
