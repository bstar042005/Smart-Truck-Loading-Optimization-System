const express = require("express");
const Shipment = require("../models/shipment");
const router = express.Router();

// Create Shipment
router.post("/create", async (req, res) => {
  try {
    const shipment = new Shipment({
      ...req.body,
      status: "Pending"
    });
    await shipment.save();
    res.status(201).json({ message: "Shipment created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all Shipments
router.get("/", async (req, res) => {
  const shipments = await Shipment.find();
  res.json(shipments);
});

module.exports = router;
