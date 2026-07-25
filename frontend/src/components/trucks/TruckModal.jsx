import { X } from "lucide-react";
import TruckForm from "./TruckForm";

export default function TruckModal({
  open,
  onClose,
  onSubmit,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl rounded-3xl bg-white p-8 shadow-2xl">

        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 hover:bg-slate-100"
        >
          <X size={22} />
        </button>

        <h2 className="mb-6 text-3xl font-bold">
          Add New Truck
        </h2>

        <TruckForm
          onSubmit={onSubmit}
          onCancel={onClose}
        />
      </div>
    </div>
  );
}