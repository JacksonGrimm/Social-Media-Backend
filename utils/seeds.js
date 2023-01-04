const connection = require("../config/connection");
const { User, Thought } = require("../models");

connection.once("open", async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});
});
