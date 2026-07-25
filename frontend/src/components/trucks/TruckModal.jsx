import { X, Truck } from "lucide-react";
import TruckForm from "./TruckForm";

export default function TruckModal({
  open,
  onClose,
  onSubmit,
  truck = null,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl">

        <div className="sticky top-0 flex items-center justify-between border-b bg-white px-8 py-5 rounded-t-3xl">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-blue-100 p-3">
              <Truck className="text-blue-600" />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                {truck ? "Edit Truck" : "Add New Truck"}
              </h2>

              <p className="text-slate-500">
                {truck
                  ? "Update truck information."
                  : "Enter truck details."}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-100"
          >
            <X />
          </button>
        </div>

        <div className="p-8">
          <TruckForm
            truck={truck}
            onSubmit={onSubmit}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
}