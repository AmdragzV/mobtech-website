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
    <footer className="w-full py-8 bg-[#0F172A] px-6">
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex justify-center items-center space-x-6 mb-6">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex justify-center mb-6">
          <Image
            alt="Mobtech Synergies Logo"
            src={MainLogoLarge}
            className="w-[100px] h-[100px] rounded-full object-contain"
          />
        </div>

        <div className="w-full h-[1px] bg-gray-700 mb-4"></div>

        <div className="flex items-center justify-center gap-2 text-gray-400">
          <FaCopyright size={10} />
          <p className="text-xs">
            Copyright Mobtech Synergies Ltd. 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
