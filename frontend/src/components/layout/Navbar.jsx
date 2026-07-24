import { useEffect, useState } from "react";
import { Menu, X, Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "How It Works", href: "#how-it-works" },
  ];

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
     className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out ${
  scrolled
    ? "border-b border-gray-200 bg-white/90 backdrop-blur-lg shadow-sm"
    : "bg-black/10 backdrop-blur-md"
}`}
    >
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-8 lg:px-14">
        {/* Logo */}

        <motion.a
          whileHover={{ scale: 1.03 }}
          href="#"
          className="flex items-center gap-2"
        >
          <Truck
            className={`h-8 w-8 transition-all duration-700 ${
              scrolled ? "text-blue-600" : "text-white"
            }`}
          />

          <span
            className={`text-3xl font-extrabold transition-all duration-700 ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            Smart
            <span className="text-blue-500">Load</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-14 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative font-semibold transition-all duration-500 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full ${
                scrolled
                  ? "text-slate-700 hover:text-blue-600"
                  : "text-white hover:text-blue-300"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}

        <div className="hidden items-center gap-4 md:flex">
          <button
            className={`rounded-xl px-6 py-3 font-medium transition-all duration-500 ${
              scrolled
                ? "border border-gray-300 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600"
                : "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
            }`}
          >
            Sign In
          </button>

          <button className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`transition-colors duration-500 md:hidden ${
            scrolled ? "text-slate-700" : "text-white"
          }`}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.4 }}
          className="border-t border-gray-200 bg-white shadow-lg md:hidden"
        >
          <div className="flex flex-col px-8 py-6">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-4 font-medium text-slate-700 transition hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <button className="mt-5 rounded-xl border border-gray-300 py-3 font-medium text-slate-700">
              Sign In
            </button>

            <button className="mt-4 rounded-xl bg-blue-600 py-3 font-semibold text-white">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}