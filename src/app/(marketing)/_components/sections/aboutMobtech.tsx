import React from "react";
import Image from "next/image";
import Link from "next/link";
import TechFrame from "../../../../../public/techFrame.png";
import {
  FaArrowRight,
  FaRocket,
  FaGlobe,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

export default function AboutMobtechSection() {
  const highlights = [
    {
      icon: FaRocket,
      title: "Innovation",
      text: "Pioneering solutions that shape the future",
    },
    {
      icon: FaGlobe,
      title: "Global Impact",
      text: "Creating positive change worldwide",
    },
    {
      icon: FaUsers,
      title: "Community Focus",
      text: "Empowering local communities",
    },
    {
      icon: FaLightbulb,
      title: "Tech Excellence",
      text: "Cutting-edge development expertise",
    },
  ];

  return (
    <section className="w-full pt-10 pb-16 sm:py-24 bg-white relative overflow-hidden">
      <Image
        alt="tech frame for design"
        src={TechFrame}
        className="absolute bottom-0 right-0 opacity-20 z-0 transition-opacity duration-500 hover:opacity-25"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-50 rounded-full">
              <span className="text-blue-600 font-semibold">Our Story</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold">
              About{" "}
              <span className="bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent">
                Mobtech
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Mobtech Synergies Ltd is a forward-thinking technology company on
              a mission to solve pressing challenges at both community and
              global scales. Our unique approach combines science, technology,
              and engineering to create transformative solutions that uplift
              communities, drive innovation, and foster positive, sustainable
              change.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <item.icon className="text-blue-600 text-2xl mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>

            <Link href="/about-us">
              <button className="group flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#00008B] rounded-xl hover:bg-[#00008B] transition-all duration-300 mt-5 md:mt-0">
                <span className="text-[#00008B] font-medium group-hover:text-white transition-colors duration-300 text-base md:text-md">
                  Discover Our Journey
                </span>
                <FaArrowRight className="text-[#00008B] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </button>
            </Link>
          </div>

          <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              controls
            >
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
