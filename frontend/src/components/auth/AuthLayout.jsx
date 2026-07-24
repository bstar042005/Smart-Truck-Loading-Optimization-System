import { Truck } from "lucide-react";

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-[#0B1220]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Side */}
        <div className="relative hidden overflow-hidden lg:flex">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500" />

          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative z-10 flex h-full flex-col justify-center px-16 text-white">
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">
              <Truck size={42} />
            </div>

            <h1 className="text-5xl font-bold">
              SmartLoad
            </h1>

            <p className="mt-6 text-lg text-blue-100 leading-8">
              AI-powered truck loading optimization platform for modern
              logistics companies.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-2xl">🔒</span>
                <span className="text-lg">Secure Authentication</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">📊</span>
                <span className="text-lg">Real-time Analytics</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">🚚</span>
                <span className="text-lg">AI Fleet Optimization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-6">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111827] p-10 shadow-2xl">
            <h2 className="text-3xl font-bold text-white">
              {title}
            </h2>

            <p className="mt-2 mb-8 text-slate-400">
              {subtitle}
            </p>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}