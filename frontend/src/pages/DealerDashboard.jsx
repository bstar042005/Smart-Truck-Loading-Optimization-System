import DashboardLayout from "../components/dashboard/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";

import {
  Truck,
  Package,
  CheckCircle,
  BarChart3,
} from "lucide-react";

export default function DealerDashboard() {
  return (
    <DashboardLayout>
      <div>
        <h2 className="mb-8 text-3xl font-bold text-slate-900">
          Dashboard
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Trucks"
            value="15"
            icon={Truck}
            color="bg-blue-600"
            change="+2 this week"
          />

          <StatCard
            title="Shipments"
            value="42"
            icon={Package}
            color="bg-emerald-600"
            change="+8 today"
          />

          <StatCard
            title="Available Trucks"
            value="11"
            icon={CheckCircle}
            color="bg-purple-600"
            change="73% available"
          />

          <StatCard
            title="Fleet Utilization"
            value="73%"
            icon={BarChart3}
            color="bg-orange-500"
            change="+5% efficiency"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}