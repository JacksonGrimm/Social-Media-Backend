const mongoose = require("mongoose");

reactionSchema = new mongoose.Schema({
  //reaction id
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    createdAt: Date.now,
  },
});

module.exports = reactionSchema;