"use client";

import React, { useState } from "react";
import {
  FaMinus,
  FaPlus,
  FaQuestionCircle,
  FaEnvelope,
  FaPhone,
  FaComments,
} from "react-icons/fa";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqCategories = [
    {
      title: "Services",
      icon: FaComments,
      faqs: [
        {
          question: "What services does Mobtech Synergies Ltd offer?",
          answer:
            "Mobtech Synergies Ltd provides comprehensive technology solutions including software development, cloud computing, cybersecurity, and digital transformation consulting for businesses across various industries.",
        },
        {
          question: "Do you offer custom software development?",
          answer:
            "Yes, we specialize in custom software development tailored to meet unique business needs. Our team works closely with clients to design, develop, and implement solutions that drive business growth and efficiency.",
        },
      ],
    },
    {
      title: "Support",
      icon: FaQuestionCircle,
      faqs: [
        {
          question: "How can I contact Mobtech Synergies for support?",
          answer:
            "You can reach our support team via email at support@mobtechsynergies.com, or call our dedicated customer service line at +1 (555) 123-4567 during business hours (9 AM - 5 PM EST).",
        },
        {
          question: "What are your support hours?",
          answer:
            "Our support team is available Monday through Friday, 9 AM to 5 PM EST. For urgent matters, we also provide 24/7 emergency support for enterprise clients.",
        },
      ],
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="text-blue-600 font-semibold">Got Questions?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Find answers to common questions about our services, support, and
            solutions. Can&apos;t find what you&apos;re looking for? Reach out
            to our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="text-blue-600 text-2xl" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {category.faqs.map((faq, faqIndex) => {
                const index = categoryIndex * 10 + faqIndex;
                return (
                  <div
                    key={faqIndex}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <button
                      className="w-full flex items-center justify-between p-6 cursor-pointer"
                      onClick={() => toggleFaq(index)}
                    >
                      <p className="text-lg font-medium text-gray-900 text-left">
                        {faq.question}
                      </p>
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 ml-4 flex-shrink-0">
                        {activeIndex === index ? (
                          <FaMinus className="text-blue-600 text-sm" />
                        ) : (
                          <FaPlus className="text-blue-600 text-sm" />
                        )}
                      </div>
                    </button>

                    {activeIndex === index && (
                      <div
                        className="px-6 pb-6 text-gray-600"
                        style={{
                          animation: "fadeInDown 0.3s ease-out forwards",
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-blue-50 rounded-2xl p-4 md:p-8">
          <h3 className="text-xl font-semibold text-center mb-6 text-gray-900">
            Still have questions?
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="mailto:support@mobtechsynergies.com"
              className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300"
            >
              <FaEnvelope className="text-blue-600 text-xl" />
              <div>
                <p className="font-medium text-gray-900">Email Support</p>
                <p className="text-sm text-gray-600">Get help via email</p>
              </div>
            </a>
            <a
              href="tel:+15551234567"
              className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300"
            >
              <FaPhone className="text-blue-600 text-xl" />
              <div>
                <p className="font-medium text-gray-900">Phone Support</p>
                <p className="text-sm text-gray-600">Call our help desk</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
