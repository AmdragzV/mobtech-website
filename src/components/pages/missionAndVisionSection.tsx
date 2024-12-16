import React from "react";
import MissionImage from "../../../public/mision.jpg";
import VisionImage from "../../../public/vision.jpg";
import Image from "next/image";

export default function MissionAndVisionSection() {
  return (
    <section className="relative py-[100px] bg-gray-50 px-6 sm:px-[80px]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:gap-20">
        <div className="flex flex-col sm:flex-row items-center gap-12">
          <div className="w-full sm:w-1/2 h-[300px] relative">
            <Image
              src={MissionImage}
              alt="Mission"
              className="object-cover w-full h-full rounded-3xl shadow-lg"
            />
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h2 className="text-4xl font-semibold text-transparent bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mt-6 leading-8">
              To address critical challenges by creating forward-thinking,
              sustainable, and impactful solutions that leverage the best of
              science, technology, and engineering.
              <br />
              At{" "}
              <span className="font-bold text-gray-800">
                Mobtech Synergies Ltd,
              </span>{" "}
              we are dedicated to improving lives and communities through
              strategic partnerships, continuous innovation, and a commitment to
              social responsibility.
            </p>
            <button className="mt-6 px-8 py-3 text-white bg-gray-700 rounded-md shadow-md hover:bg-gray-900 transition-all">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center gap-12">
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h2 className="text-4xl font-semibold text-transparent bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 mt-6 leading-8">
              To be a catalyst for positive change, addressing both community
              and global challenges through transformative innovations in
              science, technology, and engineering.
            </p>
            <button className="mt-6 px-8 py-3 text-white bg-gray-700 rounded-md shadow-md hover:bg-gray-900 transition-all">
              Learn More
            </button>
          </div>
          <div className="w-full sm:w-1/2 h-[300px] relative">
            <Image
              src={VisionImage}
              alt="Vision"
              className="object-cover w-full h-full rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
