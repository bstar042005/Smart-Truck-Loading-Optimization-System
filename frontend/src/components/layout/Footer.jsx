import { Truck, Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-[#08111f]">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-600 p-2">
                <Truck className="text-white" size={22} />
              </div>

              <h2 className="text-2xl font-bold text-white">
                SmartLoad
              </h2>
            </div>

            <p className="mt-5 leading-7 text-slate-400">
              AI-powered truck loading optimization platform helping logistics
              companies maximize space utilization and streamline operations.
            </p>
          </div>

          {/* Product */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li><a href="#features" className="hover:text-blue-400">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-blue-400">Workflow</a></li>
              <li><a href="#about" className="hover:text-blue-400">About</a></li>
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Documentation</li>
              <li>Support</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Connect
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={18} />
                <span>support@smartload.ai</span>
              </div>

              <div className="flex gap-4 pt-3">

                <a
                  href="#"
                  className="rounded-xl border border-white/10 p-3 transition hover:border-blue-500 hover:bg-blue-500/10"
                >
                  <FaGithub size={20} className="text-white" />
                </a>

                <a
                  href="#"
                  className="rounded-xl border border-white/10 p-3 transition hover:border-blue-500 hover:bg-blue-500/10"
                >
                  <FaLinkedin size={20} className="text-white" />
                </a>

              </div>

            </div>
          </div>

        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-sm text-slate-500">
            © {year} SmartLoad. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="rounded-full border border-white/10 p-3 transition hover:border-blue-500 hover:bg-blue-500/10"
          >
            <ArrowUp className="text-white" size={18} />
          </button>

        </div>

      </div>
    </footer>
  );
}