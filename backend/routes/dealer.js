const express = require("express");
const Dealer = require("../models/Dealer");

const router = express.Router();

// ==================== Register ====================
router.post("/register", async (req, res) => {
  try {
    const {
      companyName,
      dealerName,
      email,
      phone,
      password,
    } = req.body;

    if (
      !companyName ||
      !dealerName ||
      !email ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const existingDealer = await Dealer.findOne({ email });

    if (existingDealer) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    const dealer = new Dealer({
      companyName,
      dealerName,
      email,
      phone,
      password,
    });

    await dealer.save();

    res.status(201).json({
      success: true,
      message: "Dealer registered successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// ==================== Login ====================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const dealer = await Dealer.findOne({
      email,
      password,
    }).select("-password");

    if (!dealer) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    res.json({
      success: true,
      message: "Login successful",
      dealer,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;