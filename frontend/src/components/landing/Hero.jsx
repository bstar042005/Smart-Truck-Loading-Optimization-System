import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#FAFAF8] pt-32 pb-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <Sparkles size={16} />
            AI Powered Logistics Platform
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Optimize Your
            <br />
            <span className="text-blue-600">Truck Loading</span>
            <br />
            With AI
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Reduce transportation costs, maximize truck utilization,
            improve fleet efficiency and optimize cargo placement
            using intelligent AI-powered logistics solutions.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 text-slate-700 transition hover:border-blue-600 hover:text-blue-600">
              <PlayCircle size={20} />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10">
            <div>
              <h2 className="text-4xl font-bold text-slate-900">98%</h2>
              <p className="mt-2 text-slate-500">
                Space Utilization
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-slate-900">2500+</h2>
              <p className="mt-2 text-slate-500">
                Shipments Optimized
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-slate-900">30%</h2>
              <p className="mt-2 text-slate-500">
                Cost Reduction
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img
            src="/images/hero/truck-hero.jpg"
            alt="Smart Truck Loading"
            className="h-[600px] w-full rounded-3xl object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}