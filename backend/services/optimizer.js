const Truck = require("../models/truck");

async function assignBestTruck(shipment) {
    // Get only available trucks
    const trucks = await Truck.find({
        available: true,
        status: "Available"
    });

    if (!trucks.length) {
        return null;
    }

    let bestTruck = null;
    let bestScore = -1;

    for (const truck of trucks) {

        const remainingWeight =
            truck.capacity - truck.currentLoad;

        if (remainingWeight < shipment.weight) {
            continue;
        }

        // Weight utilization
        const weightScore =
            shipment.weight / remainingWeight;

        if (weightScore > bestScore) {
            bestScore = weightScore;
            bestTruck = truck;
        }
    }

    return bestTruck;
}

module.exports = assignBestTruck;