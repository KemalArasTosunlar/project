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

// Database connection
const { startMongoMemoryServer } = require('../testHelpers/mongoMemoryServerSetup');
startMongoMemoryServer();

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/dogs', require('./routes/dogRoutes'));
app.use('/api/logs', require('./routes/logRoutes'));
app.use('/api/community', require('./routes/communityRoutes'));
app.use('/api/reminders', require('./routes/reminderRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => 
  console.log(`Server is running on port ${PORT}`)
);

module.exports = server;
