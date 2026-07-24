import { useState } from "react";

import InputField from "../forms/InputField";
import PrimaryButton from "../forms/PrimaryButton";

export default function TruckForm() {
  const [form, setForm] = useState({
    truckId: "",
    truckName: "",
    type: "",
    capacity: "",
    length: "",
    width: "",
    height: "",
    route: "",
    status: "Available",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <InputField
          label="Truck ID"
          name="truckId"
          value={form.truckId}
          onChange={handleChange}
          placeholder="TR101"
        />

        <InputField
          label="Truck Name"
          name="truckName"
          value={form.truckName}
          onChange={handleChange}
          placeholder="Tata 407"
        />

        <InputField
          label="Type"
          name="type"
          value={form.type}
          onChange={handleChange}
          placeholder="Mini Truck"
        />

        <InputField
          label="Capacity (kg)"
          name="capacity"
          value={form.capacity}
          onChange={handleChange}
          placeholder="3500"
        />

        <InputField
          label="Length (m)"
          name="length"
          value={form.length}
          onChange={handleChange}
          placeholder="12"
        />

        <InputField
          label="Width (m)"
          name="width"
          value={form.width}
          onChange={handleChange}
          placeholder="3"
        />

        <InputField
          label="Height (m)"
          name="height"
          value={form.height}
          onChange={handleChange}
          placeholder="3.5"
        />

        <InputField
          label="Route"
          name="route"
          value={form.route}
          onChange={handleChange}
          placeholder="Delhi"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Status
        </label>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-700 bg-[#0B1220] px-4 py-3 text-white outline-none focus:border-blue-500"
        >
          <option>Available</option>
          <option>Busy</option>
          <option>Maintenance</option>
        </select>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          className="rounded-xl border border-slate-600 px-6 py-3 text-white transition hover:bg-slate-700"
        >
          Cancel
        </button>

        <PrimaryButton type="submit" className="w-auto px-8">
          Add Truck
        </PrimaryButton>
      </div>
    </form>
  );
}