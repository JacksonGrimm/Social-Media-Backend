const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    //email verification regex
    match: /.+\@.+\..+/,
  },
  thoughts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "thought",
    },
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

userSchema.virtual("friendCount").get(() => {
  return this.friends.length;
});

const User = mongoose.model("user", userSchema);

module.exports = User;
