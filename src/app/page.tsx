import Navbar from "@/components/common/navbar";
import AboutMobtechSection from "@/components/pages/aboutMobtech";
import CoreValuesSection from "@/components/pages/coreValues";
import HeroSection from "@/components/pages/heroSection";
import MissionAndVisionSection from "@/components/pages/missionAndVisionSection";
import FeaturedBrandsSection from "@/components/pages/faeturedBrands";
import OurSolutionsSection from "@/components/pages/ourSolutions";
import FaqSection from "@/components/pages/faqSection";
import ContactUsSection from "@/components/pages/contactUs";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MissionAndVisionSection />
      <AboutMobtechSection />
      <CoreValuesSection />
      <FeaturedBrandsSection />
      <OurSolutionsSection />
      <FaqSection />
      <ContactUsSection />
      <Footer />
    </>
  );
}
