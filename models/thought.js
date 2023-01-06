const mongoose = require("mongoose");
const reactionSchema = require("./reaction");

const thoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      require: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      //need to format the time :(
    },
    username: {
      type: String,
      require: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

thoughtSchema.virtual("dateFormat").get(function () {
  return this.createdAt.toString();
});

const Thought = mongoose.model("thought", thoughtSchema);

module.exports = Thought;
