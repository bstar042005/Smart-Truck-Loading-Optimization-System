import { motion } from "framer-motion";
import { Target, Lightbulb, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Reduce logistics costs by maximizing truck utilization using intelligent optimization.",
  },
  {
    icon: Lightbulb,
    title: "AI Driven",
    description:
      "Leverage smart algorithms to automate truck assignment and improve delivery efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Platform",
    description:
      "Built with modern technologies to provide secure, scalable, and real-time logistics management.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#0B1220] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            ABOUT SMARTLOAD
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Smarter Logistics for Modern Businesses
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            SmartLoad is an AI-powered truck loading optimization platform
            designed to reduce transportation costs, improve fleet utilization,
            and simplify logistics operations through intelligent automation.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-[#111827] p-8 transition hover:border-blue-500/40"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/15">
                  <Icon className="text-blue-400" />
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}