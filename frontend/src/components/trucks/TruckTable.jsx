import { Eye, Pencil, Trash2 } from "lucide-react";

const badgeColor = {
  Available: "bg-green-100 text-green-700",
  Busy: "bg-blue-100 text-blue-700",
  Maintenance: "bg-red-100 text-red-700",
};

export default function TruckTable({
  trucks = [],
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full">
        <thead className="bg-slate-50">
          <tr className="text-left text-sm font-semibold text-slate-600">
            <th className="px-6 py-4">Truck ID</th>
            <th className="px-6 py-4">Truck Name</th>
            <th className="px-6 py-4">Type</th>
            <th className="px-6 py-4">Capacity</th>
            <th className="px-6 py-4">Current Load</th>
            <th className="px-6 py-4">Available</th>
            <th className="px-6 py-4">Route</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {trucks.length === 0 ? (
            <tr>
              <td
                colSpan={9}
                className="py-12 text-center text-slate-500"
              >
                No trucks found.
              </td>
            </tr>
          ) : (
            trucks.map((truck) => (
              <tr
                key={truck._id}
                className="border-t border-slate-100 hover:bg-slate-50 transition"
              >
                <td className="px-6 py-4 font-semibold">
                  {truck.truckId}
                </td>

                <td className="px-6 py-4">
                  {truck.truckName}
                </td>

                <td className="px-6 py-4">
                  {truck.type}
                </td>

                <td className="px-6 py-4">
                  {truck.capacity} kg
                </td>

                <td className="px-6 py-4">
                  {truck.currentLoad} kg
                </td>

                <td className="px-6 py-4">
                  {truck.availableCapacity} kg
                </td>

                <td className="px-6 py-4">
                  {truck.route || "--"}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      badgeColor[truck.status]
                    }`}
                  >
                    {truck.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => onView?.(truck)}
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-blue-100 hover:text-blue-600"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() => onEdit?.(truck)}
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-yellow-100 hover:text-yellow-600"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => onDelete?.(truck)}
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