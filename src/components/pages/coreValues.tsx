import React from "react";

export default function CoreValuesSection() {
  return (
    <section className="w-full py-[80px] bg-white px-6 sm:px-[80px]">
      <div className="grid gap-16 w-full max-w-[1240px] mx-auto">
        <div className="grid gap-5 w-full max-w-[880px]">
          <h1 className="text-2xl leading-6 sm:text-[48px] font-medium sm:leading-[48px] bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent">
            Our Core Values
          </h1>
          <p className="text-base leading-[32px] text-[#808080] font-medium sm:text-xl sm:leading-10">
            At MobTech, our principles guide every step we take toward
            innovation and excellence.
          </p>
        </div>
        <div className="grid gap-5 w-full">
          <div
            className="grid gap-5"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            }}
          >
            <div
              className="flex flex-col justify-center h-[336px] px-4 rounded-md border-t-[3px] border-t-[#0000FF]"
              style={{
                boxShadow: "0px 4px 4px 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              <h2 className="text-xl leading-10 text-black sm:text-2xl sm:leading-[48px] font-medium">
                Innovation for Impact
              </h2>
              <p className="text-base leading-[32px] text-[#808080] font-medium sm:text-xl sm:leading-10">
                Innovation at MobTech is a responsibility, driving impactful
                projects that benefit communities locally and globally.
              </p>
            </div>
            <div
              className="flex flex-col justify-center h-[336px] px-4 rounded-md border-t-[3px] border-t-[#0000FF]"
              style={{
                boxShadow: "0px 4px 4px 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              <h2 className="text-xl leading-10 text-black sm:text-2xl sm:leading-[48px] font-medium">
                Community-Centric Approach
              </h2>
              <p className="text-base leading-[32px] text-[#808080] font-medium sm:text-xl sm:leading-10">
                MobTech begins by understanding community needs, ensuring
                inclusive, sustainable, and empowering solutions.
              </p>
            </div>
            <div
              className="flex flex-col justify-center h-[336px] px-4 rounded-md border-t-[3px] border-t-[#0000FF]"
              style={{
                boxShadow: "0px 4px 4px 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              <h2 className="text-xl leading-10 text-black sm:text-2xl sm:leading-[48px] font-medium">
                Integrity and Transparency
              </h2>
              <p className="text-base leading-[32px] text-[#808080] font-medium sm:text-xl sm:leading-10">
                Honesty and openness build trust at MobTech, with transparency
                and accountability guiding every step.
              </p>
            </div>
          </div>
          <div
            className="grid gap-5"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            }}
          >
            <div
              className="flex flex-col justify-center h-[336px] px-4 rounded-md border-t-[3px] border-t-[#0000FF]"
              style={{
                boxShadow: "0px 4px 4px 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              <h2 className="text-xl leading-10 text-black sm:text-2xl sm:leading-[48px] font-medium">
                Excellence in Execution
              </h2>
              <p className="text-base leading-[32px] text-[#808080] font-medium sm:text-xl sm:leading-10">
                MobTech delivers excellence at every stage, exceeding
                expectations with innovative, high-quality solutions.
              </p>
            </div>
            <div
              className="flex flex-col justify-center h-[336px] px-4 rounded-md border-t-[3px] border-t-[#0000FF]"
              style={{
                boxShadow: "0px 4px 4px 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              <h2 className="text-xl leading-10 text-black sm:text-2xl sm:leading-[48px] font-medium">
                Sustainability and Responsibility
              </h2>
              <p className="text-base leading-[32px] text-[#808080] font-medium sm:text-xl sm:leading-10">
                MobTech prioritizes sustainability and responsible engineering
                to protect the planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
