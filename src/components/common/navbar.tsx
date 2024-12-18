"use client";

import { useState } from "react";
import MobtechLogo from "../../../public/svg/mobtechLogo.svg";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  const navigationMenu = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Brands", href: "/brands" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <div className="bg-white ">
      <div className="sm:flex items-center justify-between mx-[30px] md:px-[60px] py-4 m-auto w-full max-w-[1340px]">
        <Image
          alt="mobtech logo image"
          src={MobtechLogo}
          width={70}
          height={50}
        />
        <ul className="flex items-center justify-between w-full max-w-[486px] max-md:hidden">
          {navigationMenu.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`text-lg font-medium leading-[22.4px] py-2 cursor-pointer px-2.5 ${
                  activeLink === link.name
                    ? "border-b-4 border-[#00008B] text-[#00008B]"
                    : "text-[#808080]"
                }`}
                onClick={() => setActiveLink(link.name)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link href={"/login"}>
          <button className="px-6 py-2 bg-[#00008B] rounded-md text-lg font-semibold text-white hover:opacity-80">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
