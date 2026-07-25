import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../components/dashboard/DashboardLayout";
import ShipmentTable from "../components/shipments/ShipmentTable";
import ShipmentModal from "../components/shipments/ShipmentModal";

import {
  getShipments,
  addShipment,
  updateShipment,
  deleteShipment,
} from "../services/shipmentService";

export default function Shipments() {
  const [openModal, setOpenModal] = useState(false);
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedShipment, setSelectedShipment] = useState(null);

  // Fetch Shipments
  const fetchShipments = async () => {
    try {
      setLoading(true);

      const data = await getShipments();
      setShipments(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load shipments.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShipments();
  }, []);

  // Add / Update Shipment
  const handleSaveShipment = async (shipmentData) => {
    try {
      if (selectedShipment) {
        await updateShipment(selectedShipment._id, shipmentData);
        toast.success("Shipment updated successfully!");
      } else {
        await addShipment(shipmentData);
        toast.success("Shipment added successfully!");
      }

      setSelectedShipment(null);
      setOpenModal(false);

      fetchShipments();
    } catch (err) {
      console.error(err);

      toast.error(
        err.response?.data?.message || "Operation failed."
      );
    }
  };

  // Delete Shipment
  const handleDeleteShipment = async (shipment) => {
    const confirmDelete = window.confirm(
      `Delete shipment "${shipment.shipmentId}"?`
    );

    if (!confirmDelete) return;

    try {
      await deleteShipment(shipment._id);

      toast.success("Shipment deleted successfully!");

      fetchShipments();
    } catch (err) {
      console.error(err);

      toast.error(
        err.response?.data?.message || "Delete failed."
      );
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[70vh] items-center justify-center">
          <h2 className="text-xl font-semibold text-slate-600">
            Loading Shipments...
          </h2>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Shipment Management
            </h1>

            <p className="mt-2 text-slate-500">
              Create and manage customer shipments.
            </p>
          </div>

          <button
            onClick={() => {
              setSelectedShipment(null);
              setOpenModal(true);
            }}
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            + Add Shipment
          </button>

        </div>

        {/* Search */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-slate-500">
            Search and filter controls will be added here.
          </p>
        </div>

        {/* Shipment Table */}
        <ShipmentTable
          shipments={shipments}
          onView={(shipment) => console.log("View:", shipment)}
          onEdit={(shipment) => {
            setSelectedShipment(shipment);
            setOpenModal(true);
          }}
          onDelete={handleDeleteShipment}
        />

        {/* Modal */}
        <ShipmentModal
          open={openModal}
          shipment={selectedShipment}
          onClose={() => {
            setSelectedShipment(null);
            setOpenModal(false);
          }}
          onSubmit={handleSaveShipment}
        />

      </div>
    </DashboardLayout>
  );
}