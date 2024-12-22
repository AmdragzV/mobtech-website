import React from "react";
import HeroSection from "./_components/homepage/heroSection";
import MissionAndVisionSection from "./_components/homepage/missionAndVisionSection";
import AboutMobtechSection from "./_components/homepage/aboutMobtech";
import CoreValuesSection from "./_components/homepage/coreValues";
import OurSolutionsSection from "./_components/homepage/ourSolutions";
import FeaturedBrandsSection from "./_components/homepage/featuredBrands";
import FaqSection from "./_components/homepage/faqSection";
import ContactUsSection from "./_components/homepage/contactUs";

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
