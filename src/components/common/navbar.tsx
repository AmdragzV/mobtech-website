"use client";

import { useState } from "react";
import MobtechLogo from "../../../public/svg/mobtechLogo.svg";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  const navigationMenu = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Brands", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <div className="sm:flex items-center justify-between w-full max-w-[1551px] px-[60px] py-2 m-auto bg-white border-b-[2px] border-[#0000FF40] hidden">
      <Image alt="mobtech logo image" src={MobtechLogo} />
      <ul className="flex items-center justify-between w-full max-w-[586px]">
        {navigationMenu.map((link) => (
          <li key={link.name}>
            <Link
              href={`#${link.href}`}
              className={`text-xl font-medium leading-[22.4px] py-4 cursor-pointer px-4 ${
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

      <button className="px-8 py-4 bg-[#00008b] rounded-xl text-xl font-bold text-white">
        Explore our solutions
      </button>
    </div>
  );
}
