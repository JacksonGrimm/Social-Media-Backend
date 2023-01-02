const mongoose = require("mongoose");

const thoughtSchema = mongoose.Schema({
  thoughtText: {
    type: String,
    require: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    createdAt: Date.now,
    //need to format the time :(
  },
});
