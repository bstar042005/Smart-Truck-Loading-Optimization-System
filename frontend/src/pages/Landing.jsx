import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import DashboardPreview from "../components/landing/DashboardPreview";
import WhySmartLoad from "../components/landing/WhySmartLoad";
import About from "../components/landing/About";
import CTA from "../components/landing/CTA";
import Footer from "../components/layout/Footer";

export default function Landing() {
  return (
    <div className="bg-[#0B1220] min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <DashboardPreview />
        <WhySmartLoad />
        <About />
        <CTA />
        <Footer />
    </div>
  );
}