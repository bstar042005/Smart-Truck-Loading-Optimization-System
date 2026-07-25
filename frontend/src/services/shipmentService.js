import api from "./api";

// Get all shipments
export const getShipments = async () => {
  const res = await api.get("/shipments");
  return res.data.shipments;
};

// Get single shipment
export const getShipmentById = async (id) => {
  const res = await api.get(`/shipments/${id}`);
  return res.data.shipment;
};

// Add shipment
export const addShipment = async (shipmentData) => {
  const res = await api.post("/shipments/add", shipmentData);
  return res.data;
};

// Update shipment
export const updateShipment = async (id, shipmentData) => {
  const res = await api.put(`/shipments/${id}`, shipmentData);
  return res.data;
};

// Delete shipment
export const deleteShipment = async (id) => {
  const res = await api.delete(`/shipments/${id}`);
  return res.data;
};