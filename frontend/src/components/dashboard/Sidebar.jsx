import {
  LayoutDashboard,
  Truck,
  Package,
  BrainCircuit,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dealer/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Trucks",
    path: "/dealer/trucks",
    icon: Truck,
  },
  {
    name: "Shipments",
    path: "/shipments",
    icon: Package,
  },
  {
    name: "AI Optimizer",
    path: "/optimizer",
    icon: BrainCircuit,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="flex h-20 items-center justify-center border-b border-slate-200">
        <h1 className="text-2xl font-bold tracking-tight">
          🚚 <span className="text-blue-600">Smart</span>Load
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-slate-200 p-4">
        <button
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-red-50 hover:text-red-600"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}