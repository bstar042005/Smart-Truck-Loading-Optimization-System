import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import DashboardPreview from "../components/landing/DashboardPreview";
import WhySmartLoad from "../components/landing/WhySmartLoad";
import About from "../components/landing/About";

export default function Landing() {
  return (
    <div className="bg-[#0B1220] min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
    </div>
  );
}