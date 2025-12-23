const express = require("express");
const Dealer = require("../models/dealer");
const router = express.Router();

// Register Dealer
router.post("/register", async (req, res) => {
  try {
    const dealer = new Dealer(req.body);
    await dealer.save();
    res.status(201).json({ message: "Dealer registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login Dealer
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const dealer = await Dealer.findOne({ email, password });

  if (!dealer) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful", dealer });
});

module.exports = router;
