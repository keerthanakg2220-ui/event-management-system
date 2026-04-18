const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const eventRoutes = require('./routes/eventRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// CORS configuration - Allow all origins for development
app.use(cors());

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/personal_event_planner');

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/event', eventRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});