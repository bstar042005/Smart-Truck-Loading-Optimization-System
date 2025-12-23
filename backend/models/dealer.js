const mongoose = require("mongoose");

const dealerSchema = new mongoose.Schema({
  email: String,
  companyName: String,
  contactPerson: String,
  mobile: String,
  city: String,
  state: String,
  country: String,
  password: String
});

module.exports = mongoose.model("Dealer", dealerSchema);
