import React from "react";
import Image from "next/image";
import mainLogoLarge from "../../../public/mainLogoLarge.png";
import { FaGamepad, FaPenNib } from "react-icons/fa";
import { HiOutlineFolder, HiOutlineGlobeAlt } from "react-icons/hi";

export default function OurSolutionsSection() {
  return (
    <section className="w-full py-[80px] bg-white px-6 sm:px-[80px]">
      <div className="grid gap-16 w-full max-w-[1240px] mx-auto">
        <div className="grid gap-5 w-full">
          <h1 className="text-2xl leading-6 sm:text-[48px] font-medium sm:leading-[48px] bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent">
            Our Solutions
          </h1>
          <p className="text-base leading-[32px] text-[#808080] font-medium sm:text-xl sm:leading-10">
            At MobTech, we deliver innovative, technology-driven solutions
            designed to empower businesses and enrich communities, fostering
            growth and impact on a global scale.
          </p>
        </div>
        <div className="flex flex-col relative">
          <Image
            alt="main mobtech logo"
            src={mainLogoLarge}
            className="w-[112px] h-[96px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hidden lg:block"
          />
          <div className="flex flex-col lg:flex-row h-full lg:h-[396px]">
            <div className="flex flex-col items-start py-10 px-[100px] border-r border-r-black border-b border-b-black w-full max-w-[625px]">
              <div className="w-[2.5rem] h-[2.5rem] rounded-md p-[10px] bg-[#F9F9FB]">
                <HiOutlineGlobeAlt size={20} style={{ color: "#000000" }} />
              </div>
              <h2 className="text-2xl leading-6 text-black sm:text-[32px] font-medium sm:leading-[48px] mb-5 mt-2">
                Web Development
              </h2>
              <p className="text-base leading-[32px] text-black font-medium sm:text-xl sm:leading-10">
                Through Nexovate, Mobtech crafts custom web solutions with
                responsive design, scalable architecture, and data-driven
                strategies for optimal performance and satisfaction.
              </p>
            </div>
            <div className="flex flex-col items-start py-10 px-[100px] border-l border-l-black border-b border-b-black w-full max-w-[625px]">
              <div className="w-[2.5rem] h-[2.5rem] rounded-md p-[10px] bg-[#F9F9FB]">
                <HiOutlineFolder size={20} style={{ color: "#000000" }} />
              </div>

              <h2 className="text-2xl leading-6 text-black sm:text-[32px] font-medium sm:leading-[48px] mb-5 mt-2">
                Software and SAAS Development
              </h2>
              <p className="text-base leading-[32px] text-black font-medium sm:text-xl sm:leading-10">
                Mobtech specializes in SaaS development, delivering adaptable,
                efficient solutions that empower businesses globally while
                optimizing IT budgets.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row h-full lg:h-[396px]">
            <div className="flex flex-col items-start py-10 px-[100px] border-r border-r-black border-t border-t-black w-full max-w-[625px]">
              <div className="w-[2.5rem] h-[2.5rem] rounded-md p-[10px] bg-[#F9F9FB]">
                <FaGamepad size={20} style={{ color: "#000000" }} />
              </div>

              <h2 className="text-2xl leading-6 text-black sm:text-[32px] font-medium sm:leading-[48px] mb-5 mt-2">
                Game Development
              </h2>
              <p className="text-base leading-[32px] text-black font-medium sm:text-xl sm:leading-10">
                At Gacom, we blend gaming expertise with community engagement,
                creating captivating games and innovative gadgets to elevate the
                gaming experience. Our mission is to build a vibrant community
                and lead the gaming industry.
              </p>
            </div>
            <div className="flex flex-col items-start py-10 px-[100px] border-l border-l-black border-t border-t-black w-full max-w-[625px]">
              <div className="w-[2.5rem] h-[2.5rem] rounded-md p-[10px] bg-[#F9F9FB]">
                <FaPenNib size={20} style={{ color: "#000000" }} />
              </div>

              <h2 className="text-2xl leading-6 text-black sm:text-[32px] font-medium sm:leading-[48px] mb-5 mt-2">
                Creative & Animation Services
              </h2>
              <p className="text-base leading-[32px] text-black font-medium sm:text-xl sm:leading-10">
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
