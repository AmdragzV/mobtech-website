"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa";

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

interface NewsletterFormData {
  email: string;
}

interface NewsletterErrors {
  email?: string;
}

const ContactForm = ({
  formData,
  handleChange,
  handleContactSubmit,
  errors,
}: {
  formData: FormData;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleContactSubmit: (e: FormEvent<HTMLFormElement>) => void;
  errors: FormErrors;
}) => (
  <form
    onSubmit={handleContactSubmit}
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
);

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [newsletterFormData, setNewsletterFormData] =
    useState<NewsletterFormData>({
      email: "",
    });

  const [errors, setErrors] = useState<FormErrors>({});
  const [newsletterErrors, setNewsletterErrors] = useState<NewsletterErrors>(
    {}
  );
  const [subscribed, setSubscribed] = useState(false);

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

  const handleNewsletterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewsletterFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (newsletterErrors[name as keyof NewsletterErrors]) {
      setNewsletterErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof NewsletterErrors];
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
    return re.test(String(phone).replace(/[^0-9]/g, ""));
  };

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
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

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: NewsletterErrors = {};

    if (!newsletterFormData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(newsletterFormData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (Object.keys(newErrors).length > 0) {
      setNewsletterErrors(newErrors);
      return;
    }

    // Proceed with subscription logic
    setSubscribed(true);
    setNewsletterFormData({ email: "" });
    setNewsletterErrors({});
    setTimeout(() => setSubscribed(false), 3000);
  };

  const ContactInfo = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4 py-10">
      <div className="bg-white px-4 py-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:items-center sm:text-center">
        <div className="bg-blue-50 p-4 rounded-full mb-4 w-fit">
          <FaEnvelope size={24} className="text-blue-600" />
        </div>
        <h3 className="font-semibold text-lg mb-2">Email Us</h3>
        <a
          href="mailto:mobtechsincorporate@gmail.com"
          className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
          aria-label="Contact official email for official Mobtech support"
        >
          mobtechsincorporate@gmail.com
        </a>
      </div>

      <div className="bg-white px-4 py-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:items-center sm:text-center">
        <div className="bg-blue-50 p-4 rounded-full mb-4 w-fit">
          <FaMapMarkerAlt size={24} className="text-blue-600" />
        </div>
        <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
        <p className="text-gray-600">
          Herbert Macaulay Way,
          <br />
          Yaba, Lagos State
        </p>
      </div>

      <div className="bg-white px-4 py-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:items-center sm:text-center">
        <div className="bg-blue-50 p-4 rounded-full mb-4 w-fit">
          <FaPhone size={24} className="text-blue-600" />
        </div>
        <h3 className="font-semibold text-lg mb-2">Call Us</h3>
        <a
          href="tel:+2347047993803"
          className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
        >
          +234 704 799 3803
        </a>
      </div>
    </div>
  );

  const Newsletter = () => (
    <div className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-4 sm:p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 mb-4">
                Stay updated with our latest news, updates, and exclusive
                offers.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <FaPaperPlane className="text-blue-600" />
                <span>Join 5,000+ subscribers</span>
              </div>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="relative">
              <input
                type="email"
                name="email"
                value={newsletterFormData.email}
                onChange={handleNewsletterChange}
                placeholder="Enter your email"
                autoComplete="email"
                className={`w-full p-4 pr-36 rounded-lg border-2 ${
                  newsletterErrors.email ? "border-red-400" : "border-gray-200"
                } focus:border-blue-600 focus:outline-none`}
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Subscribe
              </button>
              {newsletterErrors.email && (
                <span className="absolute left-0 -top-1/2 text-red-500 text-sm mt-2 block">
                  {newsletterErrors.email}
                </span>
              )}
              {subscribed && (
                <div className="absolute mt-2 text-green-600">
                  Thanks for subscribing!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-[3.5rem]">
      <div className="flex flex-col sm:flex-col-reverse lg:flex-row items-center gap-10 w-full max-w-7xl mx-auto px-4 mb-4 sm:my-10">
        <div className="flex flex-col gap-5 max-w-[38rem] w-full">
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
          </div>
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            handleContactSubmit={handleContactSubmit}
            errors={errors}
          />
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.072123550787!2d3.3751449!3d6.5156759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c58aa4e0931%3A0x9ddabc4518c15d14!2sYaba%2C%20Lagos!5e0!3m2!1sen!2sng!4v1650000000000!5m2!1sen!2sng"
          width={607}
          height={733}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md w-[340px] lg:w-[607px] h-[400px] lg:h-[733px]"
        />
      </div>

      <div className="w-full bg-gradient-to-b from-white to-gray-50">
        <ContactInfo />
        <Newsletter />
      </div>
    </div>
  );
}
