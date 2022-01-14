const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  age: Number,
});

const data = mongoose.model("data", schema);

module.exports = data;
