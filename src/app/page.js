import DoctorSection from "@/components/doctorsSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DoctorSection />
    </div>
  );
}
