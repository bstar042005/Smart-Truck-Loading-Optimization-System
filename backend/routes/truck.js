const express = require("express");
const Truck = require("../models/truck");

const router = express.Router();

/*
=========================================
Add Truck
POST /api/trucks/add
=========================================
*/
router.post("/add", async (req, res) => {
  try {
    const truck = new Truck(req.body);

    await truck.save();

    res.status(201).json({
      success: true,
      message: "Truck added successfully",
      truck,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/*
=========================================
Get All Trucks
GET /api/trucks
=========================================
*/
router.get("/", async (req, res) => {
  try {
    const trucks = await Truck.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      trucks,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/*
=========================================
Get Single Truck
GET /api/trucks/:id
=========================================
*/
router.get("/:id", async (req, res) => {
  try {
    const truck = await Truck.findById(req.params.id);

    if (!truck) {
      return res.status(404).json({
        success: false,
        message: "Truck not found",
      });
    }

    res.json({
      success: true,
      truck,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/*
=========================================
Update Truck
PUT /api/trucks/:id
=========================================
*/
router.put("/:id", async (req, res) => {
  try {
    const truck = await Truck.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!truck) {
      return res.status(404).json({
        success: false,
        message: "Truck not found",
      });
    }

    res.json({
      success: true,
      message: "Truck updated successfully",
      truck,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/*
=========================================
Delete Truck
DELETE /api/trucks/:id
=========================================
*/
router.delete("/:id", async (req, res) => {
  try {
    const truck = await Truck.findByIdAndDelete(req.params.id);

    if (!truck) {
      return res.status(404).json({
        success: false,
        message: "Truck not found",
      });
    }

    res.json({
      success: true,
      message: "Truck deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;