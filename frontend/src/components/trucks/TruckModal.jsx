import { X, Truck } from "lucide-react";
import TruckForm from "./TruckForm";

export default function TruckModal({
  open,
  onClose,
  onSubmit,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl">

        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-8 py-5 rounded-t-3xl">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
              <Truck className="text-blue-600" size={24} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                Add New Truck
              </h2>

              <p className="text-sm text-slate-500">
                Enter the truck details to add it to your fleet.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-slate-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          <TruckForm
            onSubmit={onSubmit}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
}