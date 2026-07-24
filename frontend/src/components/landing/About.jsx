import { motion } from "framer-motion";
import { Target, Lightbulb, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Maximize truck utilization, reduce transportation costs, and eliminate empty cargo space through intelligent optimization.",
  },
  {
    icon: Lightbulb,
    title: "AI Powered",
    description:
      "Advanced algorithms analyze shipment dimensions and recommend the most efficient truck loading strategy.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Platform",
    description:
      "Built with secure, scalable technologies for real-time fleet management and seamless logistics operations.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#FAFAF8] to-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
            ABOUT SMARTLOAD
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            Smarter Logistics
            <br />
            for Modern Businesses
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-slate-600">
            SmartLoad is an AI-powered logistics platform that helps companies
            optimize truck loading, reduce transportation costs, and improve
            fleet efficiency using intelligent automation.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">
                  <Icon
                    size={30}
                    className="text-blue-600 transition group-hover:text-white"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-8 h-1 w-14 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-24"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[32px] bg-slate-900 px-10 py-14"
        >
          <div className="grid gap-10 text-center md:grid-cols-4">
            <div>
              <h3 className="text-5xl font-bold text-blue-500">98%</h3>
              <p className="mt-3 text-slate-300">
                Truck Space Utilization
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-500">2500+</h3>
              <p className="mt-3 text-slate-300">
                Shipments Optimized
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-500">30%</h3>
              <p className="mt-3 text-slate-300">
                Cost Reduction
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-500">24/7</h3>
              <p className="mt-3 text-slate-300">
                System Availability
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}