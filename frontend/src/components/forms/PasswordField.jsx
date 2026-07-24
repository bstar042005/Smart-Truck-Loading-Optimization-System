import { forwardRef, useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

const PasswordField = forwardRef(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      name,
      error,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

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
          <div className="pl-4 text-slate-400">
            <Lock size={18} />
          </div>

          <input
            ref={ref}
            type={showPassword ? "text" : "password"}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full bg-transparent px-4 py-3 text-white outline-none placeholder:text-slate-500"
            {...props}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="pr-4 text-slate-400 transition hover:text-white"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
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

PasswordField.displayName = "PasswordField";

export default PasswordField;