import { CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const traditional = [
  "Manual truck loading",
  "Poor space utilization",
  "Manual truck assignment",
  "Delayed shipment updates",
  "Limited analytics",
];

const smartload = [
  "AI-powered load optimization",
  "Up to 98% space utilization",
  "Automatic truck assignment",
  "Real-time shipment tracking",
  "Live analytics dashboard",
];

export default function WhySmartLoad() {
  return (
    <section className="bg-[#08111f] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            WHY SMARTLOAD
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Upgrade Your Logistics Workflow
          </h2>

          <p className="mt-4 text-slate-400">
            Compare traditional logistics with an AI-powered SmartLoad workflow.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-red-500/20 bg-[#111827] p-8">
            <h3 className="mb-6 text-2xl font-semibold text-red-400">
              Traditional
            </h3>

            {traditional.map((item) => (
              <div key={item} className="mb-5 flex items-center gap-4">
                <XCircle className="text-red-500" />
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-blue-500/20 bg-[#111827] p-8">
            <h3 className="mb-6 text-2xl font-semibold text-blue-400">
              SmartLoad
            </h3>

            {smartload.map((item) => (
              <div key={item} className="mb-5 flex items-center gap-4">
                <CheckCircle2 className="text-green-400" />
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}