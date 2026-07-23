import { motion } from "framer-motion";
import {
  Truck,
  Package,
  TrendingUp,
  Brain,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", shipments: 45 },
  { day: "Tue", shipments: 62 },
  { day: "Wed", shipments: 78 },
  { day: "Thu", shipments: 90 },
  { day: "Fri", shipments: 120 },
  { day: "Sat", shipments: 105 },
];

const stats = [
  {
    icon: Truck,
    title: "Active Trucks",
    value: "142",
  },
  {
    icon: Package,
    title: "Shipments",
    value: "3,245",
  },
  {
    icon: TrendingUp,
    title: "Utilization",
    value: "98%",
  },
  {
    icon: Brain,
    title: "AI Accuracy",
    value: "99.2%",
  },
];

export default function DashboardPreview() {
  return (
    <section className="bg-[#0B1220] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            DASHBOARD
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Everything At Your Fingertips
          </h2>

          <p className="mt-4 text-slate-400">
            Monitor fleets, shipments and AI optimization from one dashboard.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-[#111827] p-6 lg:col-span-2">

            <h3 className="mb-6 text-xl font-semibold text-white">
              Weekly Shipment Trend
            </h3>

            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data}>
                <XAxis dataKey="day" stroke="#94A3B8" />
                <Tooltip />
                <Area
                  dataKey="shipments"
                  stroke="#3B82F6"
                  fill="#2563EB55"
                />
              </AreaChart>
            </ResponsiveContainer>

          </div>

          <div className="grid gap-5">

            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#111827] p-6"
                >
                  <Icon className="mb-4 text-blue-400" />

                  <h3 className="text-3xl font-bold text-white">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-slate-400">
                    {item.title}
                  </p>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}