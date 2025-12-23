const mongoose = require("mongoose");

const truckSchema = new mongoose.Schema({
  dealerId: mongoose.Schema.Types.ObjectId,
  truckId: String,
  type: String,
  capacity: Number,
  route: String,
  available: Boolean
});

module.exports = mongoose.model("Truck", truckSchema);
