import { motion } from "framer-motion";
import {
  Upload,
  Brain,
  Truck,
  MapPinned,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Shipment",
    description:
      "Enter shipment details including dimensions, weight, destination, and delivery deadline.",
  },
  {
    icon: Brain,
    title: "AI Optimization",
    description:
      "SmartLoad analyzes available trucks and recommends the most efficient loading strategy.",
  },
  {
    icon: Truck,
    title: "Truck Assignment",
    description:
      "The best truck is automatically assigned while updating capacity in real time.",
  },
  {
    icon: MapPinned,
    title: "Track Delivery",
    description:
      "Monitor truck location, shipment progress, and delivery status from one dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#F8FAFC] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Smart Logistics
            <br />
            in Four Simple Steps
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            From shipment creation to final delivery, SmartLoad automates the
            complete logistics workflow using intelligent optimization.
          </p>
        </motion.div>

        {/* Workflow */}

        <div className="grid gap-12 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {/* Step Number */}

                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </div>

                {/* Icon */}

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-blue-100 bg-white shadow-md">
                  <Icon
                    size={34}
                    className="text-blue-600"
                  />
                </div>

                {/* Title */}

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="leading-8 text-slate-600">
                  {step.description}
                </p>

                {/* Arrow */}

                {index !== steps.length - 1 && (
                  <div className="absolute left-[88%] top-[62px] hidden lg:block">
                    <ArrowRight
                      size={28}
                      className="text-blue-500"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[32px] border border-blue-100 bg-white p-12 shadow-lg"
        >
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Ready to Transform Your Logistics?
              </h3>

              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                Join businesses using SmartLoad to reduce transportation costs,
                improve truck utilization, and automate logistics planning.
              </p>
            </div>

            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}