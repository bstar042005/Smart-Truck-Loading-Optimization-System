const mongoose = require("mongoose");

const truckSchema = new mongoose.Schema(
{
    dealerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    truckId: {
        type: String,
        required: true,
        unique: true
    },

    truckName: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    length: Number,

    width: Number,

    height: Number,

    capacity: {
        type: Number,
        required: true
    },

    currentLoad: {
        type: Number,
        default: 0
    },

    availableCapacity: {
        type: Number,
        default: function () {
            return this.capacity;
        }
    },

    route: String,

    status: {
        type: String,
        enum: ["Available", "Busy", "Maintenance"],
        default: "Available"
    },

    available: {
        type: Boolean,
        default: true
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Truck", truckSchema);