import React from 'react'
import Image from "next/image";
import MainLogoLarge from "../../../public/mainLogoLarge.png";
import TechFrame from "../../../public/techFrame.png";
import { FaArrowRight } from "react-icons/fa";

export default function AboutMobtechSection() {
  return (
    <section className="w-full py-[80px] bg-white px-6 sm:px-[80px] relative">
        <Image
          alt="tech frame for design"
          src={TechFrame}
          className="absolute bottom-0 right-0"
        />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 w-full max-w-[1240px] mx-auto">
          <div>
            <h1 className="sm:text-5xl sm:leading-[72px] text-black font-medium max-w-[561px]">
              What is{" "}
              <span className="bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent">
                Mobtech
              </span>{" "}
              All About?
            </h1>
            <p className="sm:text-xl sm:leading-10 text-black font-medium mt-5 mb-10">
              Mobtech Synergies Ltd is a forward-thinking technology company on
              a mission to solve pressing challenges at both community and
              global scales. Our unique approach combines science, technology,
              and engineering to create transformative solutions that uplift
              communities, drive innovation, and foster positive, sustainable
              change. Mobtech has evolved from a single web development agency
              into a diversified powerhouse, advancing the fields of web, game,
              and software development with a clear focus on quality, integrity,
              and community impact.
            </p>
            <button className="flex items-center gap-[10px] bg-white border-[3px] border-[#00003E] rounded-md p-5">
              <p className='text-xl leading-[30px] text-[#00003E] font-medium'>Learn more</p> <FaArrowRight size={20} style={{ color: "#000000" }} />
            </button>
          </div>
          <Image alt="Mobtech main logo large size" src={MainLogoLarge} className="z-20"/>
        </div>
      </section>
  )
}
