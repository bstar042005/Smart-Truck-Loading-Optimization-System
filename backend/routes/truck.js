const express = require("express");
const Truck = require("../models/truck");
const router = express.Router();

// Add Truck
router.post("/add", async (req, res) => {
  try {
    const truck = new Truck(req.body);
    await truck.save();
    res.status(201).json({ message: "Truck added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all Trucks
router.get("/", async (req, res) => {
  const trucks = await Truck.find();
  res.json(trucks);
});

module.exports = router;
