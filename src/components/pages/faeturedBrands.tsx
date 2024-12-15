import React from 'react'
import Image from "next/image";
import gameImage from "../../../public/gameImage.png";
import nexovateLogo from "../../../public/nexovateBrand.png";
import oraigonLogo from "../../../public/oragionBrand.png";
import { FaArrowRight } from 'react-icons/fa';

export default function FeaturedBrandsSection() {
  return (
    <section className="w-full py-[80px] bg-white px-6 sm:px-[80px]">
        <div className="grid gap-16 w-full max-w-[1240px] mx-auto">
          <div className="grid gap-5 w-full">
            <h1 className="text-2xl leading-6 sm:text-[48px] font-medium sm:leading-[48px] bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent">
              Featured Brands
            </h1>
            <p className="text-base leading-[32px] text-[#808080] font-medium sm:text-xl sm:leading-10">
              Trusted by leading brands worldwide, we deliver innovative
              solutions that drive success and impact.
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
                className="flex flex-col items-center px-4 py-5 border-t-[3px] border-[#0000FF] rounded-[20px]"
                style={{
                  boxShadow:
                    "0px 11px 25px 0px rgba(0, 0, 0, 0.1), 0px 46px 46px 0px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Image alt="gacoum gaming logo" src={nexovateLogo} />
                <p className="sm:text-xl text-center text-black sm:leading-10 font-medium mt-5 mb-10">
                  Focused on delivering next-generation web solutions for a wide
                  range of industries.
                </p>
                <button className="flex items-center gap-[10px] bg-white border-[3px] border-[#00003E] rounded-md p-5">
              <p className='text-xl leading-[30px] text-[#00003E] font-medium'>Learn more</p> <FaArrowRight size={20} style={{ color: "#000000" }} />
            </button>
              </div>
              <div
                className="flex flex-col items-center px-4 py-5 border-t-[3px] border-[#0000FF] rounded-[20px]"
                style={{
                  boxShadow:
                    "0px 11px 25px 0px rgba(0, 0, 0, 0.1), 0px 46px 46px 0px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Image alt="gacoum gaming logo" src={oraigonLogo} />
                <p className="sm:text-xl text-center text-black sm:leading-10 font-medium mt-5 mb-10">
                  Crafting high-quality animations and comics that blend
                  supernatural narratives with Christian themes.
                </p>
                <button className="flex items-center gap-[10px] bg-white border-[3px] border-[#00003E] rounded-md p-5">
              <p className='text-xl leading-[30px] text-[#00003E] font-medium'>Learn more</p> <FaArrowRight size={20} style={{ color: "#000000" }} />
            </button>
              </div>
            </div>
            <div
              className="grid gap-5"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              }}
            >
              <div
                className="flex flex-col items-center px-4 py-5 border-t-[3px] border-[#0000FF] rounded-[20px]"
                style={{
                  boxShadow:
                    "0px 11px 25px 0px rgba(0, 0, 0, 0.1), 0px 46px 46px 0px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Image alt="gacoum gaming logo" src={gameImage} />
                <p className="sm:text-xl text-center text-black sm:leading-10 font-medium mt-5 mb-10">
                  Dedicated to gaming innovation with immersive games,
                  high-performance gadgets, and a vibrant social platform for
                  gamers.
                </p>
                <button className="flex items-center gap-[10px] bg-white border-[3px] border-[#00003E] rounded-md p-5">
              <p className='text-xl leading-[30px] text-[#00003E] font-medium'>Learn more</p> <FaArrowRight size={20} style={{ color: "#000000" }} />
            </button>
              </div>
              <div
                className="flex flex-col items-center px-4 py-5 border-t-[3px] border-[#0000FF] rounded-[20px]"
                style={{
                  boxShadow:
                    "0px 11px 25px 0px rgba(0, 0, 0, 0.1), 0px 46px 46px 0px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Image alt="gacoum gaming logo" src={gameImage} />
                <p className="sm:text-xl text-center text-black sm:leading-10 font-medium mt-5 mb-10">
                  Dedicated to gaming innovation with immersive games,
                  high-performance gadgets, and a vibrant social platform for
                  gamers.
                </p>
                <button className="flex items-center gap-[10px] bg-white border-[3px] border-[#00003E] rounded-md p-5">
              <p className='text-xl leading-[30px] text-[#00003E] font-medium'>Learn more</p> <FaArrowRight size={20} style={{ color: "#000000" }} />
            </button>
              </div>
              <div
                className="flex flex-col items-center px-4 py-5 border-t-[3px] border-[#0000FF] rounded-[20px]"
                style={{
                  boxShadow:
                    "0px 11px 25px 0px rgba(0, 0, 0, 0.1), 0px 46px 46px 0px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Image alt="gacoum gaming logo" src={gameImage} />
                <p className="sm:text-xl text-center text-black sm:leading-10 font-medium mt-5 mb-10">
                  Dedicated to gaming innovation with immersive games,
                  high-performance gadgets, and a vibrant social platform for
                  gamers.
                </p>
                <button className="flex items-center gap-[10px] bg-white border-[3px] border-[#00003E] rounded-md p-5">
              <p className='text-xl leading-[30px] text-[#00003E] font-medium'>Learn more</p> <FaArrowRight size={20} style={{ color: "#000000" }} />
            </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
