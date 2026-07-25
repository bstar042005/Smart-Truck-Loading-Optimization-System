const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
      trim: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    weight: {
      type: Number,
      required: true,
      min: 0,
    },

    length: {
      type: Number,
      required: true,
      min: 0,
    },

    width: {
      type: Number,
      required: true,
      min: 0,
    },

    height: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { _id: false }
);

const shipmentSchema = new mongoose.Schema(
  {
    dealerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dealer",
      required: true,
    },

    shipmentId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    customerName: {
      type: String,
      required: true,
      trim: true,
    },

    customerPhone: {
      type: String,
      required: true,
      trim: true,
    },

    customerEmail: {
      type: String,
      default: "",
      trim: true,
    },

    pickupLocation: {
      type: String,
      required: true,
      trim: true,
    },

    destination: {
      type: String,
      required: true,
      trim: true,
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Urgent"],
      default: "Medium",
    },

    deliveryDate: {
      type: Date,
      required: true,
    },

    items: {
      type: [itemSchema],
      default: [],
    },

    totalWeight: {
      type: Number,
      default: 0,
    },

    totalVolume: {
      type: Number,
      default: 0,
    },

    assignedTruck: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Truck",
      default: null,
    },

    loadingStatus: {
      type: String,
      enum: [
        "Pending",
        "Optimized",
        "Loaded",
        "In Transit",
        "Delivered",
      ],
      default: "Pending",
    },

    remarks: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Shipment", shipmentSchema);