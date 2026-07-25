import { useState } from "react";

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
    onSubmit(form);
  };

  return (
    <form onSubmit={submit} className="space-y-5">

      <div className="grid grid-cols-2 gap-4">

        <div>
          <label className="mb-1 block text-sm font-medium">
            Truck ID
          </label>

          <input
            name="truckId"
            value={form.truckId}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Truck Name
          </label>

          <input
            name="truckName"
            value={form.truckName}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Truck Type
          </label>

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          >
            <option>Mini Truck</option>
            <option>Container</option>
            <option>Trailer</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Capacity (kg)
          </label>

          <input
            name="capacity"
            value={form.capacity}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Length (m)
          </label>

          <input
            name="length"
            value={form.length}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Width (m)
          </label>

          <input
            name="width"
            value={form.width}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Height (m)
          </label>

          <input
            name="height"
            value={form.height}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Route
          </label>

          <input
            name="route"
            value={form.route}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />
        </div>

      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Status
        </label>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full rounded-xl border p-3"
        >
          <option>Available</option>
          <option>Busy</option>
          <option>Maintenance</option>
        </select>
      </div>

      <div className="flex justify-end gap-3">

        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border px-6 py-3"
        >
          Cancel
        </button>

        <button
          className="rounded-xl bg-blue-600 px-6 py-3 text-white"
        >
          Save Truck
        </button>

      </div>

    </form>
  );
}