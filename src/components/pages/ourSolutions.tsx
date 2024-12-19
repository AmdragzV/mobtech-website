import React from "react";
import Image from "next/image";
import mainLogoLarge from "../../../public/mainLogoLarge.png";
import { FaGamepad, FaPenNib } from "react-icons/fa";
import { HiOutlineFolder, HiOutlineGlobeAlt } from "react-icons/hi";

export default function OurSolutionsSection() {
  return (
    <section className="w-full py-10 sm:py-20 bg-white px-6 sm:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent mb-5">
            Our Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At MobTech, we deliver innovative, technology-driven solutions
            designed to empower businesses and enrich communities, fostering
            growth and impact on a global scale.
          </p>
        </div>

        <div className="relative">
          <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
            <Image
              alt="main mobtech logo"
              src={mainLogoLarge}
              width={100}
              height={100}
              className="border-4 border-white"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12 flex flex-col justify-center border-b md:border-r border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-[#F9F9FB] flex items-center justify-center mb-6">
                <HiOutlineGlobeAlt size={20} className="text-black" />
              </div>
              <h2 className="text-3xl font-semibold text-[#00003E] mb-4">
                Web Development
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Through Nexovate, Mobtech crafts custom web solutions with
                responsive design, scalable architecture, and data-driven
                strategies for optimal performance and satisfaction.
              </p>
            </div>

            <div className="p-8 md:py-12 md:pl-16 md:pr-12 flex flex-col justify-center border-b border-l border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-[#F9F9FB] flex items-center justify-center mb-6">
                <HiOutlineFolder size={20} className="text-black" />
              </div>
              <h2 className="text-3xl font-semibold text-[#00003E] mb-4">
                Software and SAAS Development
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Mobtech specializes in SaaS development, delivering adaptable,
                efficient solutions that empower businesses globally while
                optimizing IT budgets.
              </p>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center border-r border-t border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-[#F9F9FB] flex items-center justify-center mb-6">
                <FaGamepad size={20} className="text-black" />
              </div>
              <h2 className="text-3xl font-semibold text-[#00003E] mb-4">
                Game Development
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At Gacom, we blend gaming expertise with community engagement,
                creating captivating games and innovative gadgets to elevate the
                gaming experience. Our mission is to build a vibrant community
                and lead the gaming industry.
              </p>
            </div>

            <div className="p-8 md:py-12 md:pl-16 md:pr-12 flex flex-col justify-center border-t border-l border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-[#F9F9FB] flex items-center justify-center mb-6">
                <FaPenNib size={20} className="text-black" />
              </div>
              <h2 className="text-3xl font-semibold text-[#00003E] mb-4">
                Creative & Animation Services
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Oragion combines animation and storytelling to bring ideas to
                life, blending Christian fiction with supernatural narratives.
                Our content inspires, educates, and entertains, reaching a wide
                audience through dedicated and major online platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
