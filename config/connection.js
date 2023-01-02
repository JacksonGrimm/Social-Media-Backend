const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/socialMediaDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
