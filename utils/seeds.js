const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { Types } = require("mongoose");
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
  seedFriend();
});

//seeds for each users friend
const seedFriend = async () => {
  try {
    //grabs the userGoblinKing20
    const friendData = await User.findOne({ username: "GoblinKing20" });
    //grabs updates all users and pushes the friend ID to the friends array
    const users = await User.updateMany(
      {},
      {
        $push: {
          friends: Types.ObjectId(friendData._id),
        },
      }
    );
  } catch (error) {
    console.log("error");
    console.log(error);
  }
};
