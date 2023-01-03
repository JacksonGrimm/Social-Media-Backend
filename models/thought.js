const mongoose = require("mongoose");
const reactionSchema = require("./reaction");

const thoughtSchema = new mongoose.Schema({
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
  username: {
    type: String,
    require: true,
  },
  reactions: [reactionSchema],
});

thoughtSchema.virtual("reactionCount").get(() => {
  return this.reactions.length;
});

const thought = mongoose.model("thought", thoughtSchema);

module.exports = thought;
