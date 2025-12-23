const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  mobile: String,
  dob: String,
  city: String,
  state: String,
  country: String,
  password: String
});

module.exports = mongoose.model("User", userSchema);
