const mongoose = require("mongoose");

reactionSchema = new mongoose.Schema(
  {
    //reaction id
    reactionId: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
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
      default: Date.now(),
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

reactionSchema.virtual("dateFormat").get(function () {
  return this.createdAt.toString();
});

module.exports = reactionSchema;
