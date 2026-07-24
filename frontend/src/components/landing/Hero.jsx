import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/hero/truck-hero.jpg"
        alt="Truck Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-2 backdrop-blur-md">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-sm font-semibold text-white">
              AI Powered Logistics Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl font-extrabold leading-tight text-white lg:text-5xl">
            Smart Truck
            <br />
            <span className="text-blue-400">
              Loading Optimization
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-200">
            Maximize truck utilization, reduce logistics costs and automate
            cargo planning with intelligent AI-powered optimization for modern
            supply chains.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-5">
            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
              <PlayCircle size={20} />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white">98%</h2>
              <p className="mt-2 text-gray-300">
                Space Utilization
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">2500+</h2>
              <p className="mt-2 text-gray-300">
                Shipments Optimized
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">30%</h2>
              <p className="mt-2 text-gray-300">
                Cost Reduction
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white/60">
          <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-white"></div>
        </div>
      </div>
    </section>
  );
}