import Image from "next/image";
import { FaCopyright } from "react-icons/fa";
import MobtechLogo from "../../../../public/svg/mobtechMainLogo.svg";

export default function Footer() {
  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Brands", href: "/brands" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <footer className="w-full pt-16 sm:pt-20 pb-6 bg-[#00008B] px-4">
      <div className="grid items-center w-full max-w-[1025px] mx-auto">
        <div className="flex gap-8 sm:gap-10 items-center justify-center w-full max-w-2xl mx-auto">
          <div className="flex max-sm:flex-col max-sm:text-left sm:space-x-6">
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

          <div className="w-[70px] h-[50px] rounded-full">
            <Image
              alt="mobtech logo image"
              src={MobtechLogo}
              width={70}
              height={50}
              className="rounded-full bg-white"
            />
          </div>

          <div className="flex max-sm:flex-col max-sm:text-left sm:space-x-6">
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
