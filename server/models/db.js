const mongoose = require("mongoose");

module.exports = mongoose.connect("mongodb://localhost:27017/CRUD", (err) => {
  if (err) console.log(err);
  console.log("Connected to database...");
});
