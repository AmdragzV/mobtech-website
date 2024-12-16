import React from "react";
import Image from "next/image";
import gameImage from "../../../public/gameImage.png";
import nexovateLogo from "../../../public/nexovateBrand.png";
import oraigonLogo from "../../../public/oragionBrand.png";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function FeaturedBrandsSection() {
  return (
    <section className="w-full py-20 bg-gray-50 px-6 sm:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent">
            Featured Brands
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 font-medium">
            Trusted by leading brands worldwide, we deliver innovative solutions
            that drive success and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-64 w-full relative">
                <Image
                  src={gameImage}
                  alt="Nexovate Logo"
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-lg text-gray-700 mb-6">
                  Dedicated to gaming innovation with immersive games,
                  high-performance gadgets, and a vibrant social platform for
                  gamers.
                </p>
                <Link href="/brands">
                  <button className="flex items-center justify-self-center gap-[10px] bg-white border-2 border-[#00003E] rounded-md py-2 px-5 group hover:bg-[#00003E] transition-all ease-in-out duration-300">
                    <p className="text-md leading-[30px] text-[#00003E] font-medium group-hover:text-white">
                      Learn more
                    </p>
                    <FaArrowRight
                      size={16}
                      className="text-[#000000] group-hover:text-white transition-all ease-in-out duration-300"
                    />
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-64 w-full relative">
                <Image
                  src={oraigonLogo}
                  alt="Oraigon Logo"
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-lg text-gray-700 mb-6">
                  Crafting high-quality animations and comics that blend
                  supernatural narratives with Christian themes.
                </p>
                <Link href="/brands">
                  <button className="flex items-center justify-self-center gap-[10px] bg-white border-2 border-[#00003E] rounded-md py-2 px-5 group hover:bg-[#00003E] transition-all ease-in-out duration-300">
                    <p className="text-md leading-[30px] text-[#00003E] font-medium group-hover:text-white">
                      Learn more
                    </p>
                    <FaArrowRight
                      size={16}
                      className="text-[#000000] group-hover:text-white transition-all ease-in-out duration-300"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-64 w-full relative">
                <Image
                  src={nexovateLogo}
                  alt="Game Brand"
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-lg text-gray-700 mb-6">
                  Focused on delivering next-generation web solutions for a wide
                  range of industries.
                </p>
                <Link href="/brands">
                  <button className="flex items-center justify-self-center gap-[10px] bg-white border-2 border-[#00003E] rounded-md py-2 px-5 group hover:bg-[#00003E] transition-all ease-in-out duration-300">
                    <p className="text-md leading-[30px] text-[#00003E] font-medium group-hover:text-white">
                      Learn more
                    </p>
                    <FaArrowRight
                      size={16}
                      className="text-[#000000] group-hover:text-white transition-all ease-in-out duration-300"
                    />
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-64 w-full relative">
                <Image
                  src={nexovateLogo}
                  alt="Another Game Brand"
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-lg text-gray-700 mb-6">
                  Focused on delivering next-generation web solutions for a wide
                  range of industries.
                </p>
                <Link href="/brands">
                  <button className="flex items-center justify-self-center gap-[10px] bg-white border-2 border-[#00003E] rounded-md py-2 px-5 group hover:bg-[#00003E] transition-all ease-in-out duration-300">
                    <p className="text-md leading-[30px] text-[#00003E] font-medium group-hover:text-white">
                      Learn more
                    </p>
                    <FaArrowRight
                      size={16}
                      className="text-[#000000] group-hover:text-white transition-all ease-in-out duration-300"
                    />
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-64 w-full relative">
                <Image
                  src={nexovateLogo}
                  alt="Third Game Brand"
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-lg text-gray-700 mb-6">
                  Focused on delivering next-generation web solutions for a wide
                  range of industries.
                </p>
                <Link href="/brands">
                  <button className="flex items-center justify-self-center gap-[10px] bg-white border-2 border-[#00003E] rounded-md py-2 px-5 group hover:bg-[#00003E] transition-all ease-in-out duration-300">
                    <p className="text-md leading-[30px] text-[#00003E] font-medium group-hover:text-white">
                      Learn more
                    </p>
                    <FaArrowRight
                      size={16}
                      className="text-[#000000] group-hover:text-white transition-all ease-in-out duration-300"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
