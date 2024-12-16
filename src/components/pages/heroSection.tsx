"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import homeBg from "../../../public/bgImage.png";
import chatgptRobot from "../../../public/chatgptRobot.png";
import Link from "next/link";

export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "MOBTECH";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="flex flex-col items-center px-6 pt-[131px] bg-white h-full sm:h-screen relative">
      <Image alt="" src={homeBg} className="absolute inset-0" />
      <Image
        alt=""
        src={chatgptRobot}
        className="absolute right-6 bottom-1/2 translate-y-1/2 hidden sm:block"
      />
      <div className="flex flex-col items-center justify-center w-full max-w-[846px] mx-auto">
        <div
          className="hidden sm:block w-[72px] h-[72px] rounded-full blur-sm bg-[#EAEAFF] absolute right-[128px] top-6"
          style={{
            boxShadow: "inset 4px 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        ></div>
        <div
          className="hidden sm:block w-[72px] h-[72px] rounded-full blur-sm bg-[#EAEAFF] absolute left-[128px] bottom-6"
          style={{
            boxShadow: "inset 4px 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        ></div>

        <h1 className="sm:text-[64px] text-black font-medium sm:leading-[64px] text-[32px] leading-8 text-center">
          Empower the future with
        </h1>
        <h1
          className="sm:text-[146px] font-medium sm:leading-[146px] text-[64px] leading-[64px] text-center mb-5 bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent typing-text"
          style={{ height: "146px" }}
        >
          {text}
        </h1>
        <p className="text-md text-[#808080] leading-10 font-medium sm:text-xl sm:leading-8 text-center mb-16">
          Mobtech Synergies Ltd is a forward-thinking technology company on a
          mission to solve pressing challenges at both community and global
          scales.
        </p>

        <Link href="/brands">
          <button className="px-8 py-4 bg-[#142d40] rounded-xl text-xl font-bold text-white cursor-pointer">
            Explore our solutions
          </button>
        </Link>
      </div>

      <style>{`
        .typing-text {
          animation: typing 3s steps(20);
          white-space: nowrap;
          overflow: hidden;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
