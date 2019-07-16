const mongoose = require("mongoose");

const System = mongoose.Schema(
  {
    name: String,
    version: String,
    context: String,
    tags: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("System", System);
