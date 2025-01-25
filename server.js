const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');

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

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});