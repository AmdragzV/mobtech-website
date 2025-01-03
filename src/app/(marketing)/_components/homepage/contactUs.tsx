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
  message?: string;
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

    // Clear error when user starts typing
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
    return re.test(String(phone).replace(/[^0-9]/g, "")); // Remove all non-numeric characters
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
      newErrors.phoneNumber = "Invalid phone number (10-14 digits)";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
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
    <section className="w-full py-10 sm:py-[136px] bg-white px-4 sm:px-[100px] relative overflow-clip">
      <div className="hidden sm:block w-[230px] h-[217px] bg-[#00003E] rounded-full absolute -left-[118px] -top-[81px]"></div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 w-full max-w-[1228px] mx-auto">
        <div className="flex flex-col self-start justify-center gap-12 md:gap-[96px]">
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
              <FaEnvelope size={20} style={{ color: "#000000" }} />
              <a
                href="mailto:mobtechsincorporate@gmail.com"
                className="text-base leading-[32px] text-[#808080] font-medium sm:text-xl sm:leading-10 hover:text-blue-600"
              >
                mobtechsincorporate@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-5">
              <FaMapMarkerAlt size={20} style={{ color: "#000000" }} />
              <p className="text-base leading-[32px] text-[#808080] font-medium sm:text-xl sm:leading-10">
                Yaba, Lagos State
              </p>
            </div>
            <div className="flex items-center gap-5">
              <FaPhone size={20} style={{ color: "#000000" }} />
              <a
                href="tel:7047993803"
                className="text-base leading-[32px] text-[#808080] font-medium sm:text-xl sm:leading-10 hover:text-blue-600"
              >
                mobtech-number
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full max-w-[611px]"
        >
          <style jsx global>{`
            input:-webkit-autofill,
            input:-webkit-autofill:hover,
            input:-webkit-autofill:focus,
            textarea:-webkit-autofill,
            textarea:-webkit-autofill:hover,
            textarea:-webkit-autofill:focus {
              -webkit-box-shadow: 0 0 0px 1000px #f9f9f9 inset !important;
              -webkit-text-fill-color: #808080 !important;
              transition: background-color 5000s ease-in-out 0s;
            }
          `}</style>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={`p-5 border-2 text-[#808080] rounded-md bg-[#F9F9F9] w-full ${
                errors.firstName ? "border-red-400" : "border-[#D4D4D4]"
              }`}
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className={`p-5 border-2 text-[#808080] rounded-md bg-[#F9F9F9] w-full ${
                errors.email ? "border-red-400" : "border-[#D4D4D4]"
              }`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`p-5 border-2 text-[#808080] rounded-md bg-[#F9F9F9] w-full ${
                errors.phoneNumber ? "border-red-400" : "border-[#D4D4D4]"
              }`}
            />
            {errors.phoneNumber && (
              <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className={`p-5 w-full h-32 rounded-md border-2 bg-[#F9F9F9] ${
                errors.message ? "border-red-400" : "border-[#D4D4D4]"
              }`}
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="p-4 rounded-md bg-[#00008B] text-white hover:bg-blue-700 transition-all duration-300 text-xl leading-8 font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
