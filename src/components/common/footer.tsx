import React from "react";
import Image from "next/image";
import MainLogoLarge from "../../../public/mainLogoLarge.png";
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Brands", href: "/brands" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <footer className="w-full pt-20 pb-6 bg-[#00008B] px-4">
      <div className="grid items-center w-full max-w-[1025px] mx-auto">
        <div className="flex gap-5 sm:gap-10 items-center justify-center w-full max-w-2xl mx-auto">
          <div className="flex space-x-6">
            {footerLinks.slice(0, 2).map((link, index) => (
              <p
                key={index}
                className="text-md cursor-pointer leading-relaxed text-white font-medium sm:text-xl sm:leading-relaxed"
              >
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </p>
            ))}
          </div>

          <Image
            alt="Main Logo"
            src={MainLogoLarge}
            className="w-[80px] h-[80px] hidden sm:inline"
          />

          <div className="flex space-x-6">
            {footerLinks.slice(2).map((link, index) => (
              <p
                key={index}
                className="text-md cursor-pointer leading-relaxed text-white font-medium sm:text-xl sm:leading-relaxed"
              >
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </p>
            ))}
          </div>
        </div>

        <div className="w-full h-[1px] bg-white mt-12 mb-6"></div>

        <div className="flex items-center justify-center gap-3">
          <FaCopyright size={10} style={{ color: "#ffffff" }} />
          <p className="text-ms leading-relaxed text-white font-medium">
            Copyright Mobtech Synergies Ltd. 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
