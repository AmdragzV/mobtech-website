"use client";

import { useState } from "react";
import MobtechLogo from "../../../../public/svg/mobtechLogo.svg";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navigationMenu = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Brands", href: "/brands" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="bg-white">
      <nav className="bg-white">
        <div className="flex sm:flex sm:items-center justify-between px-[1.875rem] md:px-[3.75rem] py-4 m-auto w-full max-w-[1340px]">
          <Image
            alt="mobtech logo image"
            src={MobtechLogo}
            width={70}
            height={50}
            className="w-[70px] h-[50px] hidden md:inline"
      
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden text-gray-500 hover:text-gray-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
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
        <div
          className={`md:hidden px-6 py-4 space-y-2 bg-[#00008B] transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0 h-auto" : "-translate-x-full h-0"
          }`}
        >
          {navigationMenu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-white hover:bg-white hover:text-[#00008B] px-3 py-2 rounded-lg"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
