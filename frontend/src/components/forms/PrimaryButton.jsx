import { Loader2 } from "lucide-react";

export default function PrimaryButton({
  children,
  loading = false,
  className = "",
  ...props
}) {
  return (
    <button
      className={`flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Please wait...
        </>
      ) : (
        children
      )}
    </button>
  );
}