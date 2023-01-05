const connection = require("../config/connection");
const { User, Thought } = require("../models");
const thought = require("../models/thought");
const { userNames, emails } = require("./data");
const userArr = [];

//creates array of users objects
const newUser = (userArr) => {
  for (let i = 0; i < userNames.length; i++) {
    username = userNames[i];
    email = emails[i];
    userArr.push({
      username: username,
      email: email,
    });
  }
  return userArr;
};

connection.once("open", async () => {
  //attempts to delete collections if it exists.
  try {
    await User.collection.drop();
    await thought.collection.drop();
  } catch (error) {
    await User.deleteMany({});
    await Thought.deleteMany({});
  }
  //creates users;
  await User.insertMany(newUser(userArr));
});
