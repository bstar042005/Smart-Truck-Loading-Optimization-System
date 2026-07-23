import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] pt-32 pb-20">
      {/* Background Blur */}
      <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            <Sparkles size={16} />
            AI Powered Logistics Platform
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Smart Truck
            <br />
            <span className="text-blue-500">Loading Optimization</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Optimize truck loading using AI, reduce empty space,
            maximize payload efficiency, and manage shipments in
            real time with SmartLoad.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/10 px-7 py-4 text-white transition hover:border-blue-500">
              <PlayCircle size={20} />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10">
            <div>
              <h2 className="text-3xl font-bold text-white">98%</h2>
              <p className="text-slate-400">Space Utilization</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">2500+</h2>
              <p className="text-slate-400">Shipments Optimized</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">30%</h2>
              <p className="text-slate-400">Cost Reduction</p>
            </div>
          </div>
        </motion.div>

        {/* Right Preview Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="rounded-3xl border border-white/10 bg-[#111827] p-8 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">
                Live Optimization
              </h3>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                Active
              </span>
            </div>

            {/* Truck */}
            <div className="rounded-2xl border border-dashed border-slate-600 p-5">
              <div className="grid grid-cols-4 gap-3">
                {Array.from({ length: 12 }).map((_, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.08,
                    }}
                    className="h-12 rounded-lg bg-blue-500"
                  />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-2 flex justify-between text-sm text-slate-400">
                <span>Space Usage</span>
                <span>98%</span>
              </div>

              <div className="h-3 rounded-full bg-slate-700">
                <div className="h-3 w-[98%] rounded-full bg-blue-500"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}