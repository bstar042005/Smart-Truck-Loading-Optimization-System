import { forwardRef } from "react";

const InputField = forwardRef(
  (
    {
      label,
      type = "text",
      placeholder,
      value,
      onChange,
      name,
      error,
      icon: Icon,
      ...props
    },
    ref
  ) => {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-300">
          {label}
        </label>

        <div
          className={`flex items-center rounded-xl border bg-[#0B1220] transition ${
            error
              ? "border-red-500"
              : "border-slate-700 focus-within:border-blue-500"
          }`}
        >
          {Icon && (
            <div className="pl-4 text-slate-400">
              <Icon size={18} />
            </div>
          )}

          <input
            ref={ref}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full rounded-xl bg-transparent px-4 py-3 text-white outline-none placeholder:text-slate-500"
            {...props}
          />
        </div>

        {error && (
          <p className="text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;