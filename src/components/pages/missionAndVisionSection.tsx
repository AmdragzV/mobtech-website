import React from "react";
import MissionImage from "../../../public/missionImage.png";
import VissionImage from "../../../public/visionImage.png";
import Image from "next/image";

export default function MissionAndVisionSection() {
  return (
    <section className="flex flex-col gap-16 py-[80px] bg-white relative px-6 sm:px-[80px]">
      <div
        className="flex flex-col-reverse sm:flex-row items-between gap-16 sm:gap-0 px-8 py-6 rounded-[20px] w-full max-w-[1242px]  mx-auto"
        style={{
          boxShadow:
            "-2px 14px 30px 0 rgba(0, 0, 0, 0.1), -6px 55px 55px 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        <Image alt="" src={MissionImage} />
        <div className="flex flex-col gap-5 justify-center">
          <h2 className="text-2xl leading-6 sm:text-[48px] font-medium sm:leading-[48px] bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-base leading-[32px] text-[#808080] font-medium sm:text-xl sm:leading-10 max-w-[763px]">
            To address critical challenges by creating forward-thinking,
            sustainable, and impactful solutions that leverage the best of
            science, technology, and engineering.
            <br />
            At{" "}
            <span className="text-base leading-[32px] text-[#808080] font-bold sm:text-xl sm:leading-10">
              Mobtech Synergies Ltd
            </span>
            we are dedicated to improving lives and communities through
            strategic partnerships, continuous innovation, and a commitment to
            social responsibility.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col sm:flex-row items-between gap-16 sm:gap-0 px-8 py-6 rounded-[20px] w-full max-w-[1242px] mx-auto"
        style={{
          boxShadow:
            "-2px 14px 30px 0 rgba(0, 0, 0, 0.1), -6px 55px 55px 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="flex flex-col gap-5 justify-center">
          <h2 className=" text-2xl leading-6 sm:text-[48px] font-medium sm:leading-[48px] bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent">
            Our Vision
          </h2>
          <p className="text-base leading-[32px] text-[#808080] font-medium sm:text-xl sm:leading-10 max-w-[763px]">
            To be a catalyst for positive change, addressing both community and
            global challenges through transformative innovations in science,
            technology, and engineering.
          </p>
        </div>
        <Image alt="" src={VissionImage} />
      </div>
    </section>
  );
}
