import {
  Truck,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-gray-200 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-600 p-3">
                <Truck size={22} className="text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  SmartLoad
                </h2>

                <p className="text-sm text-slate-500">
                  AI Logistics Platform
                </p>
              </div>
            </div>

            <p className="mt-6 leading-8 text-slate-600">
              SmartLoad helps logistics companies maximize truck utilization,
              reduce transportation costs, and automate fleet operations using
              intelligent AI-powered optimization.
            </p>

            {/* Social Icons */}

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-lg"
              >
                <FaGithub
                  size={20}
                  className="text-slate-700 transition-colors duration-300 group-hover:text-blue-600"
                />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-lg"
              >
                <FaLinkedin
                  size={20}
                  className="text-slate-700 transition-colors duration-300 group-hover:text-blue-600"
                />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-lg"
              >
                <FaTwitter
                  size={20}
                  className="text-slate-700 transition-colors duration-300 group-hover:text-blue-600"
                />
              </a>
            </div>
          </div>

          {/* Product */}

          <div>
            <h3 className="mb-6 text-lg font-semibold text-slate-900">
              Product
            </h3>

            <ul className="space-y-4 text-slate-600">
              <li>
                <a
                  href="#features"
                  className="transition hover:text-blue-600"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className="transition hover:text-blue-600"
                >
                  Workflow
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition hover:text-blue-600"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/dashboard"
                  className="transition hover:text-blue-600"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="mb-6 text-lg font-semibold text-slate-900">
              Resources
            </h3>

            <ul className="space-y-4 text-slate-600">
              <li className="cursor-pointer transition hover:text-blue-600">
                Documentation
              </li>

              <li className="cursor-pointer transition hover:text-blue-600">
                API Reference
              </li>

              <li className="cursor-pointer transition hover:text-blue-600">
                Privacy Policy
              </li>

              <li className="cursor-pointer transition hover:text-blue-600">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 text-lg font-semibold text-slate-900">
              Contact
            </h3>

            <div className="space-y-5 text-slate-600">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-600" />
                <span>support@smartload.ai</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-600" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-600" />
                <span>Jabalpur, India</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-10 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Back to Top
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-500">
              © {year} SmartLoad. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-slate-500 transition hover:text-blue-600"
              >
                Privacy
              </a>

              <a
                href="#"
                className="text-slate-500 transition hover:text-blue-600"
              >
                Terms
              </a>

              <a
                href="#"
                className="text-slate-500 transition hover:text-blue-600"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}