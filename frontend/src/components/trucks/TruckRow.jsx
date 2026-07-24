export default function TruckRow({ truck }) {
  const getStatusClass = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-500/20 text-green-400";

      case "Busy":
        return "bg-yellow-500/20 text-yellow-400";

      case "Maintenance":
        return "bg-red-500/20 text-red-400";

      default:
        return "bg-slate-500/20 text-slate-300";
    }
  };

  return (
    <tr className="border-b border-slate-700 hover:bg-slate-800 transition">
      <td className="px-4 py-4">{truck.truckId}</td>

      <td className="px-4 py-4 font-medium">{truck.truckName}</td>

      <td className="px-4 py-4">{truck.type}</td>

      <td className="px-4 py-4">{truck.capacity} kg</td>

      <td className="px-4 py-4">{truck.route}</td>

      <td className="px-4 py-4">
        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${getStatusClass(
            truck.status
          )}`}
        >
          {truck.status}
        </span>
      </td>
    </tr>
  );
}