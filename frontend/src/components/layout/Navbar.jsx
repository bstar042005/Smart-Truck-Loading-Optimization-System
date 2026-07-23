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
      className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#0B1220]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Truck className="h-7 w-7 text-blue-500" />
          <span className="text-2xl font-bold text-white">
            Smart<span className="text-blue-500">Load</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 transition hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="rounded-xl border border-white/10 px-5 py-2.5 text-gray-300 transition hover:border-blue-500 hover:text-white">
            Sign In
          </button>

          <button className="rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-white/5 bg-[#111827] md:hidden"
        >
          <div className="flex flex-col px-6 py-5">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-3 text-gray-300 hover:text-white"
              >
                {item.name}
              </a>
            ))}

            <button className="mt-4 rounded-lg border border-white/10 py-3 text-white">
              Sign In
            </button>

            <button className="mt-3 rounded-lg bg-blue-600 py-3 text-white">
              Get Started
            </button>

          </div>
        </motion.div>
      )}
    </motion.header>
  );
}