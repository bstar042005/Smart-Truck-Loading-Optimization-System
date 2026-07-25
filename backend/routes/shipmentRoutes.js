import express from "express";

import {
  createShipment,
  getShipments,
  getShipmentById,
  updateShipment,
  deleteShipment,
} from "../controllers/shipmentController.js";

const router = express.Router();

// Create Shipment
router.post("/add", createShipment);

// Get All Shipments
router.get("/", getShipments);

// Get Shipment By ID
router.get("/:id", getShipmentById);

// Update Shipment
router.put("/:id", updateShipment);

// Delete Shipment
router.delete("/:id", deleteShipment);

export default router;