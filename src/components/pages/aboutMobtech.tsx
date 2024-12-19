import React from "react";
import Image from "next/image";
import TechFrame from "../../../public/techFrame.png";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function AboutMobtechSection() {
  return (
    <section className="w-full py-10 sm:py-[80px] bg-white px-6 sm:px-[80px] relative overflow-hidden">
      <Image
        alt="tech frame for design"
        src={TechFrame}
        className="absolute bottom-0 right-0 opacity-30 z-0"
      />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-[1240px] mx-auto relative z-10">
        <div className="flex-1">
          <h1 className="sm:text-5xl sm:leading-[72px] text-black font-medium max-w-[561px]">
            About{" "}
            <span className="bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent">
              Mobtech
            </span>
          </h1>
          <p className="sm:text-xl sm:leading-8 text-black font-medium mt-5 mb-10">
            Mobtech Synergies Ltd is a forward-thinking technology company on a
            mission to solve pressing challenges at both community and global
            scales. Our unique approach combines science, technology, and
            engineering to create transformative solutions that uplift
            communities, drive innovation, and foster positive, sustainable
            change. Mobtech has evolved from a single web development agency
            into a diversified powerhouse, advancing the fields of web, game,
            and software development with a clear focus on quality, integrity,
            and community impact.
          </p>
          <Link href="/about-us">
            <button className="flex items-center gap-[10px] bg-white border-2 border-[#00008B] rounded-md py-2 px-5 group md:hover:bg-[#00008B] transition-all ease-in-out duration-300">
              <p className="text-md leading-[30px] text-[#00008B] font-medium md:group-hover:text-white">
                Learn more
              </p>
              <FaArrowRight
                size={16}
                className="text-[#00008B] md:group-hover:text-white transition-all ease-in-out duration-300"
              />
            </button>
          </Link>
        </div>

        <div className="flex-1 h-[450px]">
          <video
            className="w-full rounded-lg h-full shadow-lg"
            autoPlay
            loop
            muted
            controls
          >
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
