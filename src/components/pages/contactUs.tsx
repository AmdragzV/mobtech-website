"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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

export default function ContactUsSection() {
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
    <section className="w-full py-[136px] bg-white px-6 sm:px-[100px] relative overflow-clip">
      <div className="w-[230px] h-[217px] bg-[#00003E] rounded-full absolute -left-[118px] -top-[81px]"></div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 w-full max-w-[1228px] mx-auto">
        <div className="flex flex-col self-start justify-center gap-[96px]">
          <div className="grid gap-5">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-base leading-6 text-black font-medium sm:text-xl sm:leading-8">
              Have questions or need assistance? Get in touch with Mobtech
              today, we&apos;re here to help you innovate, grow, and succeed.
            </p>
          </div>
          <div className="grid gap-2 md:gap-4">
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
              className={`p-5 border-2 rounded-md bg-[#F9F9F9] w-full ${
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
              className={`p-5 border-2 rounded-md bg-[#F9F9F9] w-full ${
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
              className={`p-5 border-2 rounded-md bg-[#F9F9F9] w-full ${
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
            className="p-5 border-2 border-[#D4D4D4] rounded-md bg-[#F9F9F9] h-[229px] mt-5"
          ></textarea>

          <button
            type="submit"
            className="p-5 rounded-md mt-[2rem] bg-[#00003E] text-xl leading-8 font-medium text-white hover:bg-[#000054] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
