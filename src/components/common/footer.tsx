import React from "react";
import Image from "next/image";
import MainLogoLarge from "../../../public/mainLogoLarge.png";
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full h-[509px] py-[136px] bg-[#00003E] px-6 sm:pt-[189px]">
      <div className="grid items-center w-full max-w-[1025px] mx-auto">
        <div className="flex justify-between items-center w-full max-w-[702px] mx-auto">
          <p className="text-base leading-[2rem] text-white font-medium sm:text-xl sm:leading-10">
            About
          </p>
          <p className="text-base leading-[2rem] text-white font-medium sm:text-xl sm:leading-10">
            About
          </p>
          <Image alt="" src={MainLogoLarge} className="w-[128px] h-[131px]" />
          <p className="text-base leading-[2rem] text-white font-medium sm:text-xl sm:leading-10">
            About
          </p>
          <p className="text-base leading-[2rem] text-white font-medium sm:text-xl sm:leading-10">
            About
          </p>
        </div>
        <div className="w-full h-[2px] bg-white mt-[80px] mb-[40px]"></div>
        <div className="flex items-center gap-4 mx-auto">
          <FaCopyright size={12} style={{ color: "#ffffff" }} />
          <p className="text-base leading-[2rem] text-white font-medium">
            Copyright Mobtech Synergies Ltd. 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
