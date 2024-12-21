import React from "react";
import HeroSection from "./_components/sections/heroSection";
import MissionAndVisionSection from "./_components/sections/missionAndVisionSection";
import AboutMobtechSection from "./_components/sections/aboutMobtech";
import CoreValuesSection from "./_components/sections/coreValues";
import OurSolutionsSection from "./_components/sections/ourSolutions";
import FeaturedBrandsSection from "./_components/sections/featuredBrands";
import FaqSection from "./_components/sections/faqSection";
import ContactUsSection from "./_components/sections/contactUs";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <MissionAndVisionSection />
      <AboutMobtechSection />
      <CoreValuesSection />
      <FeaturedBrandsSection />
      <OurSolutionsSection />
      <FaqSection />
      <ContactUsSection />
    </div>
  );
}
