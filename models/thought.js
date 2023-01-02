const mongoose = require("mongoose");

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
  reactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reaction",
    },
  ],
});

thoughtSchema.virtual("reactionCount").get(() => {
  return this.reactions.length;
});

const thought = mongoose.model("thought", thoughtSchema);

module.exports = thought;
