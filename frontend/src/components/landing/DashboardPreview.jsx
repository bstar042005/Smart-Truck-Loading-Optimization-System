import { motion } from "framer-motion";
import {
  Truck,
  Package,
  TrendingUp,
  Brain,
  ArrowRight,
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
    color: "text-blue-600",
  },
  {
    icon: Package,
    title: "Shipments",
    value: "3,245",
    color: "text-emerald-600",
  },
  {
    icon: TrendingUp,
    title: "Fleet Utilization",
    value: "98%",
    color: "text-amber-600",
  },
  {
    icon: Brain,
    title: "AI Accuracy",
    value: "99.2%",
    color: "text-violet-600",
  },
];

export default function DashboardPreview() {
  return (
    <section className="bg-gradient-to-b from-[#F8FAFC] to-[#EEF4FF] py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            LIVE DASHBOARD
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Everything At Your Fingertips
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Monitor fleet performance, shipment activity, and AI-powered
            optimization through one centralized dashboard.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Dashboard Chart */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl lg:col-span-2"
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-gray-200 px-8 py-5">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Weekly Shipment Trend
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Live operational analytics
                </p>
              </div>

              <div className="rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
                ● Live
              </div>
            </div>

            <div className="p-8">
              <ResponsiveContainer width="100%" height={340}>
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="shipmentFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  <XAxis
                    dataKey="day"
                    tick={{ fill: "#64748B" }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="shipments"
                    stroke="#2563EB"
                    strokeWidth={3}
                    fill="url(#shipmentFill)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Stats */}

          <div className="grid gap-6">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                      <Icon className={item.color} size={28} />
                    </div>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-slate-500">
                      Live
                    </span>
                  </div>

                  <h3 className="mt-6 text-4xl font-bold text-slate-900">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {item.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-gray-200 bg-white px-10 py-12 shadow-xl"
        >
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Experience SmartLoad in Action
              </h3>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Optimize truck loading, monitor shipments, and improve fleet
                utilization with an AI-powered logistics platform built for
                modern businesses.
              </p>
            </div>

            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700">
              Launch Dashboard
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}