import { Eye, Pencil, Trash2 } from "lucide-react";

const trucks = [
  {
    id: "TRK001",
    name: "Tata Ace",
    type: "Mini Truck",
    capacity: "1000 kg",
    load: "650 kg",
    route: "Delhi",
    status: "Available",
  },
  {
    id: "TRK002",
    name: "Ashok Leyland",
    type: "Container",
    capacity: "5000 kg",
    load: "4200 kg",
    route: "Mumbai",
    status: "Busy",
  },
  {
    id: "TRK003",
    name: "Mahindra Blazo",
    type: "Trailer",
    capacity: "10000 kg",
    load: "0 kg",
    route: "Jaipur",
    status: "Maintenance",
  },
];

const badgeColor = {
  Available: "bg-green-100 text-green-700",
  Busy: "bg-blue-100 text-blue-700",
  Maintenance: "bg-red-100 text-red-700",
};

export default function TruckTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-50">
          <tr className="text-left text-slate-600">
            <th className="px-6 py-4">Truck ID</th>
            <th className="px-6 py-4">Truck Name</th>
            <th className="px-6 py-4">Type</th>
            <th className="px-6 py-4">Capacity</th>
            <th className="px-6 py-4">Current Load</th>
            <th className="px-6 py-4">Route</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {trucks.map((truck) => (
            <tr
              key={truck.id}
              className="border-t border-slate-100 hover:bg-slate-50"
            >
              <td className="px-6 py-4 font-medium">{truck.id}</td>
              <td className="px-6 py-4">{truck.name}</td>
              <td className="px-6 py-4">{truck.type}</td>
              <td className="px-6 py-4">{truck.capacity}</td>
              <td className="px-6 py-4">{truck.load}</td>
              <td className="px-6 py-4">{truck.route}</td>

              <td className="px-6 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${badgeColor[truck.status]}`}
                >
                  {truck.status}
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-3">
                  <button className="text-slate-500 hover:text-blue-600">
                    <Eye size={18} />
                  </button>

                  <button className="text-slate-500 hover:text-amber-600">
                    <Pencil size={18} />
                  </button>

                  <button className="text-slate-500 hover:text-red-600">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}