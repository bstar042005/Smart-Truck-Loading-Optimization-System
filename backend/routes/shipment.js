const express = require("express");
const Shipment = require("../models/shipment");
const Truck = require("../models/truck");
const assignBestTruck = require("../services/optimizer");

const router = express.Router();

// ===============================
// Create Shipment & Auto Assign Truck
// ===============================
router.post("/create", async (req, res) => {
    try {

        // Create shipment object
        const shipment = new Shipment(req.body);

        // Find best available truck
        const bestTruck = await assignBestTruck(shipment);

        if (bestTruck) {

            // Assign truck
            shipment.assignedTruck = bestTruck._id;
            shipment.status = "Assigned";

            // Update truck load
            bestTruck.currentLoad += shipment.weight;
            bestTruck.availableCapacity =
                bestTruck.capacity - bestTruck.currentLoad;

            // Mark truck busy if full
            if (bestTruck.availableCapacity <= 0) {
                bestTruck.available = false;
                bestTruck.status = "Busy";
            }

            await bestTruck.save();

        } else {

            // No suitable truck found
            shipment.status = "Pending";

        }

        // Save shipment
        await shipment.save();

        res.status(201).json({
            success: true,
            message: "Shipment created successfully",
            shipment,
            assignedTruck: bestTruck
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }
});

// ===============================
// Get All Shipments
// ===============================
router.get("/", async (req, res) => {
    try {

        const shipments = await Shipment.find()
            .populate("assignedTruck");

        res.json(shipments);

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }
});

// ===============================
// Get Shipment By ID
// ===============================
router.get("/:id", async (req, res) => {
    try {

        const shipment = await Shipment.findById(req.params.id)
            .populate("assignedTruck");

        if (!shipment) {
            return res.status(404).json({
                success: false,
                message: "Shipment not found"
            });
        }

        res.json(shipment);

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }
});

// ===============================
// Update Shipment Status
// ===============================
router.patch("/:id/status", async (req, res) => {
    try {

        const shipment = await Shipment.findById(req.params.id);

        if (!shipment) {
            return res.status(404).json({
                success: false,
                message: "Shipment not found"
            });
        }

        shipment.status = req.body.status;

        await shipment.save();

        res.json({
            success: true,
            message: "Shipment status updated",
            shipment
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }
});

module.exports = router;