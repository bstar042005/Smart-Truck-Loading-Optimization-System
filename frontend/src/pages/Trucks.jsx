import { useState } from "react";
import TruckTable from "../components/trucks/TruckTable";

export default function Trucks() {
  const [trucks, setTrucks] = useState([
    {
      _id: "1",
      truckId: "TR101",
      truckName: "Tata 407",
      type: "Mini Truck",
      capacity: 3500,
      route: "Delhi",
      status: "Available",
    },
    {
      _id: "2",
      truckId: "TR102",
      truckName: "Ashok Leyland",
      type: "Container",
      capacity: 7000,
      route: "Jaipur",
      status: "Busy",
    },
    {
      _id: "3",
      truckId: "TR103",
      truckName: "Eicher Pro",
      type: "Trailer",
      capacity: 12000,
      route: "Mumbai",
      status: "Maintenance",
    },
  ]);

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold text-white">
        Truck Management
      </h1>

      <TruckTable trucks={trucks} />
    </div>
  );
}