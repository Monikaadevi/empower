const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const Event = require('./models/Event'); // Import the Event model

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection string
const dbURI = process.env.MONGODB_URI || 'mongodb+srv://meenumohan:bYsS41GIQ6Pop08r@empowerher.roj0b.mongodb.net/?retryWrites=true&w=majority&appName=empowerher';

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successful connection
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve learn.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'learn.html'));
});

// API endpoint to get events
app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});