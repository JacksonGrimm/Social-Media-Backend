const { User, Thought } = require("../models");

//controller functions
module.exports = {
  //returns all documents in the user collection
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  async getOneUser(req, res) {
    try {
      const user = await User.find({ _id: req.params.id });
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  async createNewUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  async updateUser(req, res) {
    try {
      const user = await User.updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      );
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  async deleteUser(req, res) {
    try {
      const user = await User.deleteOne({ _id: req.params.id });
      res.status(200).json(`deleted users with id of ${req.params.id}`);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};
