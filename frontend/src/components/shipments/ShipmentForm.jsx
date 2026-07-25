import { useEffect, useState } from "react";
import { getDealer } from "../../utils/storage";

export default function ShipmentForm({
  shipment,
  onSubmit,
  onCancel,
}) {
  const [form, setForm] = useState({
    shipmentId: "",
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    pickupLocation: "",
    destination: "",
    priority: "Medium",
    deliveryDate: "",
    totalWeight: "",
    totalVolume: "",
    loadingStatus: "Pending",
    remarks: "",
  });

  useEffect(() => {
    if (shipment) {
      setForm({
        shipmentId: shipment.shipmentId || "",
        customerName: shipment.customerName || "",
        customerPhone: shipment.customerPhone || "",
        customerEmail: shipment.customerEmail || "",
        pickupLocation: shipment.pickupLocation || "",
        destination: shipment.destination || "",
        priority: shipment.priority || "Medium",
        deliveryDate: shipment.deliveryDate
          ? shipment.deliveryDate.split("T")[0]
          : "",
        totalWeight: shipment.totalWeight || "",
        totalVolume: shipment.totalVolume || "",
        loadingStatus: shipment.loadingStatus || "Pending",
        remarks: shipment.remarks || "",
      });
    }
  }, [shipment]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dealer = getDealer();

    onSubmit({
      ...form,
      dealerId: dealer?._id,
      totalWeight: Number(form.totalWeight),
      totalVolume: Number(form.totalVolume),
      items: shipment?.items || [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Shipment ID
          </label>

          <input
            type="text"
            name="shipmentId"
            value={form.shipmentId}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Customer Name
          </label>

          <input
            type="text"
            name="customerName"
            value={form.customerName}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Customer Phone
          </label>

          <input
            type="text"
            name="customerPhone"
            value={form.customerPhone}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Customer Email
          </label>

          <input
            type="email"
            name="customerEmail"
            value={form.customerEmail}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Pickup Location
          </label>

          <input
            type="text"
            name="pickupLocation"
            value={form.pickupLocation}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Destination
          </label>

          <input
            type="text"
            name="destination"
            value={form.destination}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Priority
          </label>

          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Urgent</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Delivery Date
          </label>

          <input
            type="date"
            name="deliveryDate"
            value={form.deliveryDate}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Total Weight (kg)
          </label>

          <input
            type="number"
            name="totalWeight"
            value={form.totalWeight}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Total Volume (m³)
          </label>

          <input
            type="number"
            name="totalVolume"
            value={form.totalVolume}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Loading Status
          </label>

          <select
            name="loadingStatus"
            value={form.loadingStatus}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
          >
            <option>Pending</option>
            <option>Optimized</option>
            <option>Loaded</option>
            <option>In Transit</option>
            <option>Delivered</option>
          </select>
        </div>

      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Remarks
        </label>

        <textarea
          rows={4}
          name="remarks"
          value={form.remarks}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border border-slate-300 px-6 py-3 hover:bg-slate-100"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          {shipment ? "Update Shipment" : "Add Shipment"}
        </button>
      </div>

    </form>
  );
}