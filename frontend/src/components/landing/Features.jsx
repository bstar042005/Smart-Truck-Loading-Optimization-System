import { motion } from "framer-motion";
import {
  Brain,
  Truck,
  Package,
  BarChart3,
  ShieldCheck,
  Route,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Load Optimization",
    description:
      "Automatically maximize truck space utilization using intelligent cargo placement algorithms.",
  },
  {
    icon: Truck,
    title: "Fleet Management",
    description:
      "Manage trucks, drivers, routes, and capacity from a centralized dashboard.",
  },
  {
    icon: Package,
    title: "Shipment Tracking",
    description:
      "Track every shipment in real time from dispatch to final delivery.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Gain insights into fleet utilization, cost savings, and operational performance.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Secure authentication, role-based access, and protected business data.",
  },
  {
    icon: Route,
    title: "Smart Route Planning",
    description:
      "Reduce fuel costs and delivery time with intelligent route optimization.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-gradient-to-b from-white to-[#F8FAFC] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
            FEATURES
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            Everything You Need
            <br />
            to Optimize Logistics
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            SmartLoad combines AI, fleet management, analytics, shipment
            tracking, and intelligent routing into one modern logistics
            platform.
          </p>
        </motion.div>

        {/* Feature Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-xl"
              >
                {/* Icon */}

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-600">
                  <Icon
                    size={30}
                    className="text-blue-600 transition-all duration-300 group-hover:text-white"
                  />
                </div>

                {/* Title */}

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                {/* Description */}

                <p className="leading-8 text-slate-600">
                  {feature.description}
                </p>

                {/* Learn More */}

                <div className="mt-8 flex items-center gap-2 font-semibold text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn More
                  <ArrowRight size={18} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[32px] bg-blue-600 px-10 py-16 text-center text-white shadow-xl"
        >
          <h3 className="text-4xl font-bold">
            Smarter Logistics Starts Here
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Optimize truck loading, reduce operational costs, improve fleet
            efficiency, and transform your logistics operations with
            AI-powered automation.
          </p>

          <button className="mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105">
            Explore the Platform
          </button>
        </motion.div>
      </div>
    </section>
  );
}