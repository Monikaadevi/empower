const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
  time: String,
  location: String,
  description: String,
  image: String,
  tag: String
});

module.exports = mongoose.model('Event', eventSchema);