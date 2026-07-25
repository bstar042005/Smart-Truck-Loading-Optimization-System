import { Search, Bell, ChevronDown } from "lucide-react";
import { getDealer } from "../../utils/storage";

export default function Topbar() {
  const dealer = getDealer();

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Welcome Back 👋
        </h1>

        <p className="text-sm text-slate-500">
          {dealer?.dealerName || "Dealer"}
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 md:flex">
          <Search size={18} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>

        {/* Notifications */}
        <button className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100">
          <Bell size={20} />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2 transition hover:bg-slate-100">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
            {dealer?.dealerName?.charAt(0)?.toUpperCase() || "D"}
          </div>

          <div className="hidden text-left lg:block">
            <p className="text-sm font-semibold text-slate-800">
              {dealer?.dealerName || "Dealer"}
            </p>

            <p className="text-xs text-slate-500">
              Fleet Manager
            </p>
          </div>

          <ChevronDown
            size={18}
            className="hidden text-slate-500 lg:block"
          />
        </button>
      </div>
    </header>
  );
}