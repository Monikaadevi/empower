const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
  description: String,
  time: String,
  location: String,
  image: String,
  tag: String
});

module.exports = mongoose.model('Event', eventSchema);