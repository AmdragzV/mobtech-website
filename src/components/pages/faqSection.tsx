"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "What services does Mobtech Synergies Ltd offer?",
    answer:
      "Mobtech Synergies Ltd provides comprehensive technology solutions including software development, cloud computing, cybersecurity, and digital transformation consulting for businesses across various industries.",
  },
  {
    question: "How can I contact Mobtech Synergies for support?",
    answer:
      "You can reach our support team via email at support@mobtechsynergies.com, or call our dedicated customer service line at +1 (555) 123-4567 during business hours (9 AM - 5 PM EST).",
  },
  {
    question: "Do you offer custom software development?",
    answer:
      "Yes, we specialize in custom software development tailored to meet unique business needs. Our team works closely with clients to design, develop, and implement solutions that drive business growth and efficiency.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-[49px] bg-[#F9F9FB] px-6 sm:px-[100px]">
      <div className="w-full max-w-[1240px] mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent mb-10 text-center">
          Frequently Asked Questions
        </h1>
        <div className="grid gap-5 w-full max-w-[800px] mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] transition-all duration-300 ease-in-out"
            >
              <div
                className="flex items-center justify-between h-[132px] px-10 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <p className="text-base leading-6 text-[#808080] sm:text-lg sm:leading-8 font-semibold">
                  {faq.question}
                </p>
                <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-[#F9F9FB] text-black">
                  {activeIndex === index ? (
                    <FaMinus size={12} className="text-black" />
                  ) : (
                    <FaPlus size={12} className="text-black" />
                  )}
                </div>
              </div>
              {activeIndex === index && (
                <div
                  style={{
                    animation: "fadeInDown 0.3s ease-out forwards",
                    transformOrigin: "top",
                    opacity: 0,
                    transform: "scaleY(0.8)",
                    animationName: "fadeInDown",
                  }}
                  className="px-10 pb-10 text-[#666] text-base sm:text-lg"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: scaleY(0.8);
          }
          to {
            opacity: 1;
            transform: scaleY(1);
          }
        }
      `}</style>
    </section>
  );
}
