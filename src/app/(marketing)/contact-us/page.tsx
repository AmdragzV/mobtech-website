"use client";

import Image from "next/image";
import mapImage from "../../../../public/mapImage.png";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
interface FormData {
  firstName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  email?: string;
  phoneNumber?: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormErrors];
        return newErrors;
      });
    }
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (phone: string): boolean => {
    const re = /^[0-9]{10,14}$/;
    return re.test(String(phone).replace(/\s+/g, ""));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Form submitted successfully!");

    setFormData({
      firstName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
    setErrors({});
  };
  return (
    <div className="pt-[3.5rem]">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid gap-5 w-full max-w-[38rem]">
          <div className="grid gap-5">
            <h1 className="text-4xl sm:text-5xl font-bold leading-[4.5rem] bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-base leading-6 text-black font-medium sm:text-xl sm:leading-8 w-full max-w-[58.7ch]">
              Have questions or need assistance? Get in touch with Mobtech
              today, we&apos;re here to help you innovate, grow, and succeed.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full max-w-[611px]"
          >
            <div className="relative">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={`p-5 border-2 text-[#808080] rounded-md bg-[#F9F9F9] w-full ${
                  errors.firstName ? "border-red-500" : "border-[#D4D4D4]"
                }`}
              />
              {errors.firstName && (
                <div className="absolute text-red-500 text-sm mt-1">
                  {errors.firstName}
                </div>
              )}
            </div>
            <div className="relative mt-5">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className={`p-5 border-2 text-[#808080] rounded-md bg-[#F9F9F9] w-full ${
                  errors.email ? "border-red-500" : "border-[#D4D4D4]"
                }`}
              />
              {errors.email && (
                <div className="absolute text-red-500 text-sm mt-1">
                  {errors.email}
                </div>
              )}
            </div>
            <div className="relative mt-5">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`p-5 border-2 text-[#808080] rounded-md bg-[#F9F9F9] w-full ${
                  errors.phoneNumber ? "border-red-500" : "border-[#D4D4D4]"
                }`}
              />
              {errors.phoneNumber && (
                <div className="absolute text-red-500 text-sm mt-1">
                  {errors.phoneNumber}
                </div>
              )}
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="p-5 border-2 text-[#808080] border-[#D4D4D4] rounded-md bg-[#F9F9F9] h-[229px] mt-5"
            ></textarea>
            <button
              type="submit"
              className="p-5 rounded-md mt-[2rem] bg-[#00008B] text-xl leading-8 font-medium text-white md:hover:bg-[#000054] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <Image alt="mobtech location on the map" width={607} height={733} src={mapImage} objectFit="contain" className="h-[400px] lg:h-[733px] "/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between w-full max-w-5xl mx-auto my-[3.5rem]">
        <div className="flex flex-col gap-5 items-center">
          <FaEnvelope size={20} style={{ color: "#000000" }} />{" "}
          <a
            href="mailto:mobtechsincorporate@gmail.com"
            className="text-base leading-[32px] text-black font-medium sm:text-xl sm:leading-10"
          >
            mobtechsincorporate@gmail.com
          </a>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <FaPhone size={20} style={{ color: "#000000" }} />{" "}
          <p className="text-base leading-[32px] text-black font-medium sm:text-xl sm:leading-10">
            Yaba, Lagos State
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center justify-self-center md:col-span-2 lg:col-span-1">
          <FaMapMarkerAlt size={20} style={{ color: "#000000" }} />{" "}
          <a
            href="tel:7047993803"
            className="text-base leading-[32px] text-black font-medium sm:text-xl sm:leading-10"
          >
            mobtech-number
          </a>
        </div>
      </div>
    </div>
  );
}
