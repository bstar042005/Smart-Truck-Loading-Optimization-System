import api from "./api";

// Get all trucks
export const getTrucks = async () => {
  const res = await api.get("/trucks");
  return res.data.trucks;
};

// Get single truck
export const getTruckById = async (id) => {
  const res = await api.get(`/trucks/${id}`);
  return res.data.truck;
};

// Add truck
export const addTruck = async (truckData) => {
  const res = await api.post("/trucks/add", truckData);
  return res.data;
};

// Update truck
export const updateTruck = async (id, truckData) => {
  const res = await api.put(`/trucks/${id}`, truckData);
  return res.data;
};

// Delete truck
export const deleteTruck = async (id) => {
  const res = await api.delete(`/trucks/${id}`);
  return res.data;
};