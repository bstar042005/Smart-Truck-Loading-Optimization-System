import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";

export default function Landing() {
  return (
    <div className="bg-[#0B1220] min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}