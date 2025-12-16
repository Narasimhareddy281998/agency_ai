import Navbar from "@/components/Navbar";
import AvatarGroup from "@/components/AvatarGroup";
import HeroSection from "@/components/HeroSection";
import TrustedCompanies from "@/components/TrustedCompanies";
import ServicesSection from "@/components/ServicesSection";
import LatestWork from "@/components/LatestWork";
import TeamSection from "@/components/TeamSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <div>
      <Navbar />
      <AvatarGroup />
      <HeroSection />
      <TrustedCompanies />
      <ServicesSection />
      <LatestWork />
      <TeamSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
