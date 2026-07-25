import { useState } from "react";
import { getDealer } from "../../utils/storage";

export default function TruckForm({ onSubmit, onCancel }) {
  const [form, setForm] = useState({
    truckId: "",
    truckName: "",
    type: "Mini Truck",
    length: "",
    width: "",
    height: "",
    capacity: "",
    route: "",
    status: "Available",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();

    if (
      !form.truckId ||
      !form.truckName ||
      !form.capacity
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const dealer = getDealer();

    onSubmit({
      ...form,
      dealerId: dealer?._id,
      length: Number(form.length),
      width: Number(form.width),
      height: Number(form.height),
      capacity: Number(form.capacity),
    });
  };

  return (
    <form onSubmit={submit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {/* Truck ID */}
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Truck ID *
          </label>

          <input
            type="text"
            name="truckId"
            value={form.truckId}
            onChange={handleChange}
            placeholder="TRK001"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Truck Name */}
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Truck Name *
          </label>

          <input
            type="text"
            name="truckName"
            value={form.truckName}
            onChange={handleChange}
            placeholder="Tata Ace"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Truck Type */}
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Truck Type
          </label>

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-500"
          >
            <option>Mini Truck</option>
            <option>Container</option>
            <option>Trailer</option>
          </select>
        </div>

        {/* Capacity */}
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Capacity (kg) *
          </label>

          <input
            type="number"
            name="capacity"
            value={form.capacity}
            onChange={handleChange}
            placeholder="5000"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Length */}
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Length (m)
          </label>

          <input
            type="number"
            name="length"
            value={form.length}
            onChange={handleChange}
            placeholder="6"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Width */}
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Width (m)
          </label>

          <input
            type="number"
            name="width"
            value={form.width}
            onChange={handleChange}
            placeholder="2.5"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Height */}
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Height (m)
          </label>

          <input
            type="number"
            name="height"
            value={form.height}
            onChange={handleChange}
            placeholder="3"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Route */}
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Route
          </label>

          <input
            type="text"
            name="route"
            value={form.route}
            onChange={handleChange}
            placeholder="Delhi"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Status */}
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Status
        </label>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-black focus:border-blue-500 focus:outline-none"
        >
          <option>Available</option>
          <option>Busy</option>
          <option>Maintenance</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 hover:bg-slate-100"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          Save Truck
        </button>
      </div>
    </form>
  );
}