import DoctorSection from "@/components/doctorsSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DoctorSection isHome={true} />
    </div>
  );
}
