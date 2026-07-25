import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../components/dashboard/DashboardLayout";
import TruckTable from "../components/trucks/TruckTable";
import TruckModal from "../components/trucks/TruckModal";

import {
  getTrucks,
  addTruck,
} from "../services/truckService";

export default function Trucks() {
  const [openModal, setOpenModal] = useState(false);
  const [trucks, setTrucks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all trucks
  const fetchTrucks = async () => {
    try {
      setLoading(true);

      const data = await getTrucks();

      setTrucks(data);
    } catch (err) {
      console.error(err);

      toast.error("Failed to load trucks.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrucks();
  }, []);

  // Add Truck
  const handleAddTruck = async (truckData) => {
    try {
      await addTruck(truckData);

      toast.success("Truck added successfully!");

      setOpenModal(false);

      fetchTrucks();
    } catch (err) {
      console.error(err);

      toast.error(
        err.response?.data?.message || "Failed to add truck."
      );
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[70vh] items-center justify-center">
          <h2 className="text-xl font-semibold text-slate-600">
            Loading Trucks...
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
              Truck Management
            </h1>

            <p className="mt-2 text-slate-500">
              Manage your fleet and monitor truck availability.
            </p>
          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            + Add Truck
          </button>
        </div>

        {/* Search & Filter */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-slate-500">
            Search and filter controls will be added here.
          </p>
        </div>

        {/* Truck Table */}
        <TruckTable
          trucks={trucks}
          onView={(truck) => console.log("View:", truck)}
          onEdit={(truck) => console.log("Edit:", truck)}
          onDelete={(truck) => console.log("Delete:", truck)}
        />

        {/* Add Truck Modal */}
        <TruckModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          onSubmit={handleAddTruck}
        />
      </div>
    </DashboardLayout>
  );
}