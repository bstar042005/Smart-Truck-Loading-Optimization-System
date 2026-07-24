import TruckRow from "./TruckRow";

export default function TruckTable({ trucks }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-[#111827] shadow-lg">
      <table className="w-full text-left text-white">
        <thead className="bg-slate-800">
          <tr>
            <th className="px-4 py-4">Truck ID</th>
            <th className="px-4 py-4">Truck Name</th>
            <th className="px-4 py-4">Type</th>
            <th className="px-4 py-4">Capacity</th>
            <th className="px-4 py-4">Route</th>
            <th className="px-4 py-4">Status</th>
            <th className="px-4 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {trucks.map((truck) => (
            <TruckRow
              key={truck._id}
              truck={truck}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}