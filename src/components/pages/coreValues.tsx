import React from "react";

export default function CoreValuesSection() {
  return (
    <section className="w-full py-20 bg-white px-6 sm:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent">
            Our Core Values
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 font-medium">
            At MobTech, our principles guide every step we take toward
            innovation and excellence.
          </p>
        </div>

        <div className="grid gap-12 sm:gap-16 lg:grid-cols-3">
          <div className="relative p-8 rounded-xl shadow-lg bg-white border border-gray-100">
            <div className="absolute -top-8 left-6 w-16 h-16 bg-[#00008B] text-white text-2xl font-bold rounded-full flex items-center justify-center shadow-md">
              1
            </div>
            <h2 className="mt-10 text-2xl font-semibold text-[#00008B]">
              Innovation for Impact
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Innovation at MobTech is a responsibility, driving impactful
              projects that benefit communities locally and globally.
            </p>
          </div>

          <div className="relative p-8 rounded-xl shadow-lg bg-white border border-gray-100">
            <div className="absolute -top-8 left-6 w-16 h-16 bg-[#00008B] text-white text-2xl font-bold rounded-full flex items-center justify-center shadow-md">
              2
            </div>
            <h2 className="mt-10 text-2xl font-semibold text-[#00008B]">
              Community-Centric Approach
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              MobTech begins by understanding community needs, ensuring
              inclusive, sustainable, and empowering solutions.
            </p>
          </div>

          <div className="relative p-8 rounded-xl shadow-lg bg-white border border-gray-100">
            <div className="absolute -top-8 left-6 w-16 h-16 bg-[#00008B] text-white text-2xl font-bold rounded-full flex items-center justify-center shadow-md">
              3
            </div>
            <h2 className="mt-10 text-2xl font-semibold text-[#00008B]">
              Integrity and Transparency
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Honesty and openness build trust at MobTech, with transparency and
              accountability guiding every step.
            </p>
          </div>

          <div className="relative p-8 rounded-xl shadow-lg bg-white border border-gray-100">
            <div className="absolute -top-8 left-6 w-16 h-16 bg-[#00008B] text-white text-2xl font-bold rounded-full flex items-center justify-center shadow-md">
              4
            </div>
            <h2 className="mt-10 text-2xl font-semibold text-[#00008B]">
              Excellence in Execution
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              MobTech delivers excellence at every stage, exceeding expectations
              with innovative, high-quality solutions.
            </p>
          </div>

          <div className="relative p-8 rounded-xl shadow-lg bg-white border border-gray-100">
            <div className="absolute -top-8 left-6 w-16 h-16 bg-[#00008B] text-white text-2xl font-bold rounded-full flex items-center justify-center shadow-md">
              5
            </div>
            <h2 className="mt-10 text-2xl font-semibold text-[#00008B]">
              Sustainability and Responsibility
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              MobTech prioritizes sustainability and responsible engineering to
              protect the planet for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
