import { useState } from "react";
import { Menu, X, Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "How It Works", href: "#how-it-works" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Truck className="h-7 w-7 text-blue-600" />

          <span className="text-2xl font-bold text-slate-900">
            Smart
            <span className="text-blue-600">Load</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-slate-600 transition hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="rounded-xl border border-gray-300 bg-white px-5 py-2.5 font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-600">
            Sign In
          </button>

          <button className="rounded-xl bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-md transition hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-700 md:hidden"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-gray-200 bg-white md:hidden"
        >
          <div className="flex flex-col px-6 py-5">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-3 text-slate-700 transition hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}

            <button className="mt-4 rounded-xl border border-gray-300 py-3 text-slate-700">
              Sign In
            </button>

            <button className="mt-3 rounded-xl bg-blue-600 py-3 font-semibold text-white">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}