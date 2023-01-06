const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { userNames, emails, posts } = require("./data");
const userArr = [];
const postArr = [];

//creates array of users objects
const newUser = (userArr) => {
  for (let i = 0; i < userNames.length; i++) {
    let username = userNames[i];
    let email = emails[i];
    userArr.push({
      username: username,
      email: email,
      friends: [],
    });
  }
  return userArr;
};

const newPosts = (postArr) => {
  for (let i = 0; i < posts.length; i++) {
    let username = userNames[i];
    let post = posts[i];
    postArr.push({
      username: username,
      thoughtText: post,
    });
  }
  return postArr;
};

connection.once("open", async () => {
  //attempts to delete collections if it exists.
  try {
    await User.collection.drop();
    await Thought.collection.drop();
  } catch (error) {
    await User.deleteMany({});
    await Thought.deleteMany({});
  }
  //creates users;
  await Thought.insertMany(newPosts(postArr));
  await User.insertMany(newUser(userArr));
});
