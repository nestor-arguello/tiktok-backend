const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  channel: {
    type: String,
    required: true,
  },
  song: String,
  likes: Number,
  messages: Number,
  description: String,
  shares: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Post', postSchema);
