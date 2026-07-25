import { useState } from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import TruckTable from "../components/trucks/TruckTable";
import TruckModal from "../components/trucks/TruckModal";

export default function Trucks() {
  const [openModal, setOpenModal] = useState(false);

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
            Search and filter controls will go here.
          </p>
        </div>

        {/* Truck Table */}
        <TruckTable />

        {/* Modal */}
        <TruckModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          onSubmit={(truck) => {
            console.log(truck);
            setOpenModal(false);
          }}
        />
      </div>
    </DashboardLayout>
  );
}