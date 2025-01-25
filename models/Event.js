const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
<<<<<<< HEAD
  description: String,
  time: String,
  location: String,
=======
  time: String,
  location: String,
  description: String,
>>>>>>> c26520addce62d32313173d81c5a19afcdea0ff2
  image: String,
  tag: String
});

module.exports = mongoose.model('Event', eventSchema);