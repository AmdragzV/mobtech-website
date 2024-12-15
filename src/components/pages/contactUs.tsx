import React from 'react'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCopyright,
} from "react-icons/fa";

export default function ContactUsSection() {
  return (
    <section className="w-full py-[136px] bg-white px-6 sm:px-[100px] relative overflow-clip">
        <div className="w-[230px] h-[217px] bg-[#00003E] rounded-full absolute -left-[118px] -top-[81px]"></div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 w-full max-w-[1228px] mx-auto">
          <div className="flex flex-col justify-center gap-[96px]">
            <div className="grid gap-5">
              <h1 className="text-2xl leading-6 sm:text-[48px] font-medium sm:leading-[48px] bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-base leading-[32px] text-black font-medium sm:text-xl sm:leading-10">
                Have questions or need assistance? Get in touch with Mobtech
                today, we’re here to help you innovate, grow, and succeed.
              </p>
            </div>
            <div className="grid gap-5">
              <div className="flex items-center gap-5">
                <FaEnvelope size={20} style={{ color: "#000000" }} />{" "}
                <a
                  href="mailto:mobtechsincorporate@gmail.com"
                  className="text-base leading-[32px] text-[#808080] font-medium sm:text-xl sm:leading-10"
                >
                  mobtechsincorporate@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-5">
                <FaPhone size={20} style={{ color: "#000000" }} />{" "}
                <p className="text-base leading-[32px] text-[#808080] font-medium sm:text-xl sm:leading-10">
                  Yaba, Lagos State
                </p>
              </div>
              <div className="flex items-center gap-5">
                <FaMapMarkerAlt size={20} style={{ color: "#000000" }} />{" "}
                <a
                  href="tel:7047993803"
                  className="text-base leading-[32px] text-[#808080] font-medium sm:text-xl sm:leading-10"
                >
                  mobtech-number
                </a>
              </div>
            </div>
          </div>
          <form action="" className="flex flex-col gap-5 w-full max-w-[611px]">
            <input
              type="text"
              placeholder="First Name"
              className="p-5 border-2 border-[#D4D4D4] rounded-md bg-[#F9F9F9]"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="p-5 border-2 border-[#D4D4D4] rounded-md bg-[#F9F9F9]"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-5 border-2 border-[#D4D4D4] rounded-md bg-[#F9F9F9]"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="p-5 border-2 border-[#D4D4D4] rounded-md bg-[#F9F9F9] h-[229px]"
            ></textarea>
            <button
              type="submit"
              className="p-5 rounded-md mt-[2rem] bg-[#00003E] text-xl leading-8 font-medium text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
  )
}
