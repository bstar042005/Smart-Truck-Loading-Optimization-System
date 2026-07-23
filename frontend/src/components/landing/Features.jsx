import { motion } from "framer-motion";
import {
  Brain,
  Truck,
  Package,
  BarChart3,
  ShieldCheck,
  Route,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Load Optimization",
    description:
      "Automatically maximize truck space utilization using intelligent loading algorithms.",
  },
  {
    icon: Truck,
    title: "Fleet Management",
    description:
      "Manage trucks, drivers, capacity, and availability from one dashboard.",
  },
  {
    icon: Package,
    title: "Shipment Tracking",
    description:
      "Track shipments in real time from dispatch to successful delivery.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Monitor utilization, costs, deliveries, and operational performance.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Role-based authentication with secure APIs and protected business data.",
  },
  {
    icon: Route,
    title: "Smart Route Planning",
    description:
      "Optimize delivery routes to reduce travel time and transportation costs.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-[#0B1220] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            FEATURES
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Everything You Need To Optimize Logistics
          </h2>

          <p className="mt-4 text-lg text-slate-400">
            SmartLoad combines AI-powered optimization, fleet management,
            shipment tracking, analytics, and security into one modern platform.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-white/10 bg-[#111827] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/15 transition group-hover:bg-blue-600">
                  <Icon
                    size={30}
                    className="text-blue-400 group-hover:text-white"
                  />
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}