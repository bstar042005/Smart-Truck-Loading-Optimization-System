const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  weight: Number,
  volume: Number,
  boxes: Number,
  destination: String,
  deadline: String,
  status: String,
  assignedTruck: String
});

module.exports = mongoose.model("Shipment", shipmentSchema);
