import React from "react";
import Image from "next/image";
import gameImage from "../../../public/gameImage.png";
import nexovateLogo from "../../../public/nexovateBrand.png";
import oraigonLogo from "../../../public/oragionBrand.png";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function FeaturedBrandsSection() {
  return (
    <section className="w-full py-20 bg-white px-6 sm:px-20">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
            <div
              className="flex flex-col items-center px-4 py-5 border-t-[3px] border-[#0000FF] rounded-[20px]"
              style={{
                boxShadow:
                  "0px 6px 15px 0px rgba(0, 0, 0, 0.1), 0px 10px 10px 0px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                alt="gacoum gaming logo"
                src={nexovateLogo}
                className="rounded-md"
              />
              <p className="sm:text-xl text-center text-black sm:leading-8 font-medium mt-5 mb-6">
                Focused on delivering next-generation web solutions for a wide
                range of industries.
              </p>
              <Link href="/brands">
                <button className="flex items-center justify-self-center gap-[10px] bg-white border-2 border-[#00008B] rounded-md py-2 px-5 group md:hover:bg-[#00008B] transition-all ease-in-out duration-300">
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

            <div
              className="flex flex-col items-center px-4 py-5 border-t-[3px] border-[#0000FF] rounded-[20px]"
              style={{
                boxShadow:
                  "0px 6px 15px 0px rgba(0, 0, 0, 0.1), 0px 10px 10px 0px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                alt="gacoum gaming logo"
                src={oraigonLogo}
                className="rounded-md"
              />
              <p className="sm:text-xl text-center text-black sm:leading-8 font-medium mt-5 mb-6">
                Crafting high-quality animations and comics that blend
                supernatural narratives with Christian themes.
              </p>
              <div className="flex-grow"></div>{" "}
              <Link href="/brands">
                <button className="flex items-center justify-self-center gap-[10px] bg-white border-2 border-[#00008B] rounded-md py-2 px-5 group md:hover:bg-[#00008B] transition-all ease-in-out duration-300">
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
          </div>

          <div className="md:col-span-2 grid md:grid-cols-3 gap-8">
            <div
              className="flex flex-col items-center px-4 py-5 border-t-[3px] border-[#0000FF] rounded-[20px]"
              style={{
                boxShadow:
                  "0px 6px 15px 0px rgba(0, 0, 0, 0.1), 0px 10px 10px 0px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                alt="gacoum gaming logo"
                src={gameImage}
                className="rounded-md"
              />
              <p className="sm:text-xl text-center text-black sm:leading-8 font-medium mt-5 mb-6">
                Dedicated to gaming innovation with immersive games,
                high-performance gadgets, and a vibrant social platform for
                gamers.
              </p>
              <Link href="/brands">
                <button className="flex items-center justify-self-center gap-[10px] bg-white border-2 border-[#00008B] rounded-md py-2 px-5 group md:hover:bg-[#00008B] transition-all ease-in-out duration-300">
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

            <div
              className="flex flex-col items-center px-4 py-5 border-t-[3px] border-[#0000FF] rounded-[20px]"
              style={{
                boxShadow:
                  "0px 6px 15px 0px rgba(0, 0, 0, 0.1), 0px 10px 10px 0px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                alt="nexovate gaming logo"
                src={nexovateLogo}
                className="rounded-md"
              />
              <p className="sm:text-xl text-center text-black sm:leading-8 font-medium mt-5 mb-6">
                Focused on delivering next-generation web solutions for a wide
                range of industries.
              </p>
              <div className="flex-grow"></div>{" "}
              <Link href="/brands">
                <button className="flex items-center justify-self-center gap-[10px] bg-white border-2 border-[#00008B] rounded-md py-2 px-5 group md:hover:bg-[#00008B] transition-all ease-in-out duration-300">
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

            <div
              className="flex flex-col items-center px-4 py-5 border-t-[3px] border-[#0000FF] rounded-[20px]"
              style={{
                boxShadow:
                  "0px 6px 15px 0px rgba(0, 0, 0, 0.1), 0px 10px 10px 0px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                alt="gacoum gaming logo"
                src={gameImage}
                className="rounded-md"
              />
              <p className="sm:text-xl text-center text-black sm:leading-8 font-medium mt-5 mb-6">
                Dedicated to gaming innovation with immersive games,
                high-performance gadgets, and a vibrant social platform for
                gamers.
              </p>
              <Link href="/brands">
                <button className="flex items-center justify-self-center gap-[10px] bg-white border-2 border-[#00008B] rounded-md py-2 px-5 group md:hover:bg-[#00008B] transition-all ease-in-out duration-300">
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
          </div>
        </div>
      </div>
    </section>
  );
}
