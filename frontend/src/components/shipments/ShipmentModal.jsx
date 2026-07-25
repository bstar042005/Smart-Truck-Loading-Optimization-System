import { Package, X } from "lucide-react";
import ShipmentForm from "./ShipmentForm";

export default function ShipmentModal({
  open,
  shipment,
  onClose,
  onSubmit,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-5xl rounded-2xl bg-white shadow-2xl">

        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 rounded-t-2xl">

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-3">
              <Package className="h-6 w-6 text-blue-600" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {shipment ? "Edit Shipment" : "Add New Shipment"}
              </h2>

              <p className="text-sm text-slate-500">
                Fill in shipment details below.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-slate-100"
          >
            <X className="h-5 w-5 text-slate-600" />
          </button>
        </div>

        {/* Body */}
        <div className="max-h-[80vh] overflow-y-auto p-6">
          <ShipmentForm
            shipment={shipment}
            onSubmit={onSubmit}
            onCancel={onClose}
          />
        </div>

      </div>
    </div>
  );
}