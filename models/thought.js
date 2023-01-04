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
      createdAt: Date.now,
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

thoughtSchema.virtual("reactionCount").get(() => {
  return this.reactions.length;
});

thoughtSchema.virtual("dateFormat").get(() => {
  return this.createdAt.toLocalDateString("en-US");
});

const thought = mongoose.model("thought", thoughtSchema);

module.exports = thought;
