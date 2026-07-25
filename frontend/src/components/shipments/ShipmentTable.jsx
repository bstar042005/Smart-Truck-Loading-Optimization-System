import { Eye, Pencil, Trash2 } from "lucide-react";

const priorityColor = {
  Low: "bg-gray-100 text-gray-700",
  Medium: "bg-blue-100 text-blue-700",
  High: "bg-orange-100 text-orange-700",
  Urgent: "bg-red-100 text-red-700",
};

const statusColor = {
  Pending: "bg-yellow-100 text-yellow-700",
  Optimized: "bg-blue-100 text-blue-700",
  Loaded: "bg-purple-100 text-purple-700",
  "In Transit": "bg-cyan-100 text-cyan-700",
  Delivered: "bg-green-100 text-green-700",
};

export default function ShipmentTable({
  shipments = [],
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full">
        <thead className="bg-slate-50">
          <tr className="text-left text-sm font-semibold text-slate-600">
            <th className="px-6 py-4">Shipment ID</th>
            <th className="px-6 py-4">Customer</th>
            <th className="px-6 py-4">Destination</th>
            <th className="px-6 py-4">Weight</th>
            <th className="px-6 py-4">Truck</th>
            <th className="px-6 py-4">Priority</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {shipments.length === 0 ? (
            <tr>
              <td
                colSpan={8}
                className="py-16 text-center text-slate-500"
              >
                📦 No shipments found.
              </td>
            </tr>
          ) : (
            shipments.map((shipment) => (
              <tr
                key={shipment._id}
                className="border-t border-slate-100 transition hover:bg-slate-50"
              >
                <td className="px-6 py-4 font-semibold">
                  {shipment.shipmentId}
                </td>

                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium">
                      {shipment.customerName}
                    </p>
                    <p className="text-sm text-slate-500">
                      {shipment.customerPhone}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-4">
                  {shipment.destination}
                </td>

                <td className="px-6 py-4">
                  {shipment.totalWeight} kg
                </td>

                <td className="px-6 py-4">
                  {shipment.assignedTruck?.truckName || "--"}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      priorityColor[shipment.priority]
                    }`}
                  >
                    {shipment.priority}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      statusColor[shipment.loadingStatus]
                    }`}
                  >
                    {shipment.loadingStatus}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onView?.(shipment)}
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-blue-100 hover:text-blue-600"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() => onEdit?.(shipment)}
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-yellow-100 hover:text-yellow-600"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => onDelete?.(shipment)}
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-red-100 hover:text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}