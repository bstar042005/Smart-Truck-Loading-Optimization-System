import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#FCFCFA] pt-32 pb-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            <Sparkles size={16} className="text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              AI Powered Logistics Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Optimize Your
            <br />
            <span className="text-blue-600">
              Truck Loading
            </span>
            <br />
            With AI
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">
            SmartLoad helps logistics companies maximize truck utilization,
            reduce transportation costs, improve fleet efficiency and automate
            cargo planning using AI-driven optimization.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600">
              <PlayCircle size={20} />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">
            <div>
              <h2 className="text-4xl font-bold text-slate-900">98%</h2>
              <p className="mt-2 text-sm uppercase tracking-wide text-slate-500">
                Space Utilization
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-slate-900">2500+</h2>
              <p className="mt-2 text-sm uppercase tracking-wide text-slate-500">
                Shipments Optimized
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-slate-900">30%</h2>
              <p className="mt-2 text-sm uppercase tracking-wide text-slate-500">
                Cost Savings
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-1 items-center justify-center"
        >
          <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-xl">
            <img
              src="/images/hero/truck-hero.jpg"
              alt="Smart Truck Loading"
              className="h-[620px] w-[620px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}