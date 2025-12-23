const Truck = require("../models/truck");

async function findBestTruck(shipment) {
  const trucks = await Truck.find({ available: true });

  let bestTruck = null;
  let bestUtilization = 0;

  for (let truck of trucks) {
    if (truck.capacity >= shipment.volume) {
      const utilization = shipment.volume / truck.capacity;

      if (utilization > bestUtilization) {
        bestUtilization = utilization;
        bestTruck = truck;
      }
    }
  }

  return bestTruck;
}

module.exports = findBestTruck;
