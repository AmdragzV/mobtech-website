"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import homeBg from "../../../../../public/bgImage.png";
import chatgptRobot from "../../../../../public/chatgptRobot.png";

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
    <div className="flex flex-col items-center px-6 pt-10 sm:pt-[131px] bg-white h-auto sm:h-screen relative">
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

        <h1 className="sm:text-[64px] text-black font-medium sm:leading-[64px] text-[32px] leading-10 text-center">
          Empower the future with
        </h1>
        <h1 className="sm:text-[146px] font-medium sm:leading-[146px] text-[64px] leading-[64px] text-center mb-5 bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent h-16 sm:h-36 typing-text overflow-hidden">
          {text}
        </h1>
        <p className="text-md text-[#808080] leading-8 font-medium sm:text-xl sm:leading-8 text-center mb-10 sm:mb-16 text-pretty">
          <a
            href="https://www.linkedin.com/in/akinyemi-akinjide-1a8640245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="font-bold hover:text-blue-800"
            target="blank"
            rel="noopener noreferrer"
            aria-label="Learn more about Mobtech Synergies Ltd and its founder, Akinyemi Akinjide Samuel"
          >
            Mobtech Synergies Ltd
          </a>{" "}
          is a forward-thinking technology company on a mission to solve
          pressing challenges at both community and global scales.
        </p>

        <Link href="/brands">
          <button className="px-8 py-4 bg-[#00008B] text-white hover:bg-blue-700 transition-colors duration-300 rounded-xl text-xl font-bold cursor-pointer">
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
