import { useState } from "react";

import TruckTable from "../components/trucks/TruckTable";
import TruckForm from "../components/trucks/TruckForm";
import Modal from "../components/ui/Modal";

export default function Trucks() {
  const [trucks] = useState([
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

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">
          Truck Management
        </h1>

        <button
          onClick={() => setOpenModal(true)}
          className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          + Add Truck
        </button>
      </div>

      <TruckTable trucks={trucks} />

      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Add New Truck"
      >
        <TruckForm />
      </Modal>
    </div>
  );
}