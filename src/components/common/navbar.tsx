import React from "react";
import MobtechLogo from "../../../public/mobtechLogo.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full max-w-[1551px] px-[60px] py-9 m-auto">
      <Image alt="mobtech logo image" src={MobtechLogo} />

      <ul className="flex items-center justify-between w-full max-w-[573px]">
        <li className="text-[22.91px] text-white font-medium leading-[22.4px]">
          HOME
        </li>
        <li className="text-[22.91px] text-white font-medium leading-[22.4px]">
          ABOUT US
        </li>
        <li className="text-[22.91px] text-white font-medium leading-[22.4px]">
          OUR BRANDING
        </li>
        <li className="text-[22.91px] text-white font-medium leading-[22.4px]">
          CONTACT US
        </li>
      </ul>

      <button className="px-8 py-4 bg-[#BEB4EB] rounded-xl text-base font-bold text-white">
        Sign in
      </button>
    </div>
  );
}
