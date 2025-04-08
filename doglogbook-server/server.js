const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const dogRoutes = require('./routes/dogRoutes');
const logRoutes = require('./routes/logRoutes');
const reminderRoutes = require('./routes/reminderRoutes');
const communityRoutes = require('./routes/communityRoutes');
const aiRoutes = require('./routes/aiRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/dogs', dogRoutes);
app.use('/api/logs', logRoutes);
app.use('/api/reminders', reminderRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/ai', aiRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
