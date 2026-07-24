import { motion } from "framer-motion";
import { ArrowRight, Truck, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F8FAFC] py-28">
      {/* Background Decorations */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-70" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[36px] border border-gray-200 bg-white shadow-2xl"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}

            <div className="p-12 lg:p-16">
              <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                GET STARTED
              </span>

              <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
                Ready to Optimize
                <br />
                Your Fleet?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Join SmartLoad and simplify logistics with AI-powered truck
                loading, intelligent fleet management, and real-time shipment
                tracking.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600" size={20} />
                  <span className="text-slate-700">
                    AI-powered truck optimization
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600" size={20} />
                  <span className="text-slate-700">
                    Real-time shipment tracking
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600" size={20} />
                  <span className="text-slate-700">
                    Secure fleet management dashboard
                  </span>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/login"
                  className="rounded-xl border border-gray-300 px-8 py-4 font-semibold text-slate-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
                >
                  Sign In
                </Link>
              </div>
            </div>

            {/* Right Side */}

            <div className="relative flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 p-12">
              <div className="rounded-3xl bg-white/10 p-10 backdrop-blur-lg">
                <Truck size={90} className="mx-auto text-white" />

                <h3 className="mt-8 text-center text-3xl font-bold text-white">
                  Smart Logistics
                </h3>

                <p className="mt-4 text-center leading-8 text-blue-100">
                  Maximize truck utilization, reduce transportation costs,
                  and automate fleet operations with AI.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-6 text-center">
                  <div>
                    <h4 className="text-3xl font-bold text-white">98%</h4>
                    <p className="mt-2 text-blue-100">
                      Utilization
                    </p>
                  </div>

                  <div>
                    <h4 className="text-3xl font-bold text-white">30%</h4>
                    <p className="mt-2 text-blue-100">
                      Cost Savings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}