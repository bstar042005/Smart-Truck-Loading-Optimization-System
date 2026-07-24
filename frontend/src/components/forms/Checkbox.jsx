export default function Checkbox({
  label,
  checked,
  onChange,
  name,
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-300">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-slate-600 accent-blue-600"
      />
      {label}
    </label>
  );
}