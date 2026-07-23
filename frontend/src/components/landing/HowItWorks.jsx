import { motion } from "framer-motion";
import {
  Upload,
  Brain,
  Truck,
  MapPinned,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Shipment",
    description:
      "Customers submit shipment details including dimensions, weight, destination, and deadline.",
  },
  {
    icon: Brain,
    title: "AI Optimization",
    description:
      "SmartLoad analyzes all available trucks and selects the best fit using optimization algorithms.",
  },
  {
    icon: Truck,
    title: "Truck Assignment",
    description:
      "The selected truck is assigned automatically while updating available capacity in real time.",
  },
  {
    icon: MapPinned,
    title: "Live Tracking",
    description:
      "Track shipment progress, truck status, and delivery updates from a centralized dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#08111f] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            WORKFLOW
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            How SmartLoad Works
          </h2>

          <p className="mt-4 text-lg text-slate-400">
            From shipment creation to delivery tracking, SmartLoad automates
            every step of the logistics workflow.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="relative rounded-3xl border border-white/10 bg-[#111827] p-8 text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/15">
                  <Icon className="text-blue-400" size={30} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="text-slate-400 leading-7">
                  {step.description}
                </p>

                {index !== steps.length - 1 && (
                  <div className="absolute top-1/2 -right-5 hidden h-[2px] w-10 bg-blue-500 lg:block"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}