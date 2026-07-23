const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema(
{
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    weight: {
        type: Number,
        required: true
    },

    volume: {
        type: Number,
        required: true
    },

    boxes: {
        type: Number,
        required: true
    },

    destination: {
        type: String,
        required: true
    },

    deadline: {
        type: String,
        required: true
    },

    assignedTruck: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Truck",
        default: null
    },

    status: {
        type: String,
        enum: ["Pending", "Assigned", "Delivered"],
        default: "Pending"
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Shipment", shipmentSchema);