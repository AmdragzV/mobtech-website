import React from "react";
import { FaPlus } from "react-icons/fa";

export default function FaqSection() {
  return (
    <section className="w-full py-[49px] bg-[#F9F9FB] px-6 sm:px-[100px]">
      <div className="w-full max-w-[1240px] mx-auto">
        <h1 className="text-2xl leading-6 sm:text-[48px] font-medium sm:leading-[48px] bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        <div className="grid gap-5 w-full max-w-[800px] mx-auto mt-10">
          <div className="flex items-center justify-between h-[132px] bg-white rounded-[20px] p-10">
            <p className="text-base leading-[32px] text-[#808080] font-medium sm:text-xl sm:leading-10">
              What services does Mobtech Synergies Ltd offer?
            </p>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-[#F9F9FB] text-black">
              <FaPlus size={12} style={{ color: "#000000" }} />
            </div>
          </div>
          <div className="flex items-center justify-between h-[132px] bg-white rounded-[20px] p-10">
            <p className="text-base leading-[32px] text-[#808080] font-medium sm:text-xl sm:leading-10">
              What services does Mobtech Synergies Ltd offer?
            </p>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-[#F9F9FB] text-black">
              <FaPlus size={12} style={{ color: "#000000" }} />
            </div>
          </div>
          <div className="flex items-center justify-between h-[132px] bg-white rounded-[20px] p-10">
            <p className="text-base leading-[32px] text-[#808080] font-medium sm:text-xl sm:leading-10">
              What services does Mobtech Synergies Ltd offer?
            </p>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-[#F9F9FB] text-black">
              <FaPlus size={12} style={{ color: "#000000" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
