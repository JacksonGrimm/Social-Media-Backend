const { User, Thought } = require("../models");

//controller functions
module.exports = {
  //get all thoughts
  async getAllThoughts() {
    try {
      const thoughts = await Thought.find();
      res.status(200).json(thoughts);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getOneThought() {
    try {
      const thoughts = await Thought.find({ _id: req.params.id });
      res.status(200).json(thoughts);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createNewThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.status(200).json(thought);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  async updateThought(req, res) {
    try {
      const thought = await Thought.updateOne(
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
      res.status(200).json(thought);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  async deleteThought(req, res) {
    try {
      const thought = await Thought.deleteOne({ _id: req.params.id });
      res.status(200).json(`deleted thought with id of ${req.params.id}`);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};
