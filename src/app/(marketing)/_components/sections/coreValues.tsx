import React from "react";
import { FaLightbulb, FaPeopleCarry, FaBalanceScale, FaStar, FaLeaf } from "react-icons/fa";

export default function CoreValuesSection() {
  const coreValues = [
    {
      number: 1,
      title: "Innovation for Impact",
      description: "Innovation at MobTech is a responsibility, driving impactful projects that benefit communities locally and globally.",
      icon: FaLightbulb,
      details: [
        "Cutting-edge technology solutions",
        "Research-driven development",
        "Continuous improvement"
      ]
    },
    {
      number: 2,
      title: "Community-Centric Approach",
      description: "MobTech begins by understanding community needs, ensuring inclusive, sustainable, and empowering solutions.",
      icon: FaPeopleCarry,
      details: [
        "Inclusive design principles",
        "Community engagement",
        "Social impact focus"
      ]
    },
    {
      number: 3,
      title: "Integrity and Transparency",
      description: "Honesty and openness build trust at MobTech, with transparency and accountability guiding every step.",
      icon: FaBalanceScale,
      details: [
        "Ethical business practices",
        "Open communication",
        "Accountable leadership"
      ]
    },
    {
      number: 4,
      title: "Excellence in Execution",
      description: "MobTech delivers excellence at every stage, exceeding expectations with innovative, high-quality solutions.",
      icon: FaStar,
      details: [
        "Quality-driven development",
        "Rigorous testing",
        "Performance optimization"
      ]
    },
    {
      number: 5,
      title: "Sustainability and Responsibility",
      description: "MobTech prioritizes sustainability and responsible engineering to protect the planet for future generations.",
      icon: FaLeaf,
      details: [
        "Environmental consciousness",
        "Sustainable practices",
        "Long-term impact"
      ]
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">Our Foundation</h2>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent mb-6">
            Core Values
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            At MobTech, our principles guide every step we take toward innovation and excellence, shaping our journey to create meaningful impact.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-800" />

          {coreValues.map((value, index) => (
            <div key={value.number} className={`mb-16 lg:mb-24 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:flex`}>
              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                <div className="bg-white rounded-xl sm:p-8 sm:shadow-lg sm:hover:shadow-xl transition-shadow duration-300 sm:border border-gray-100">
                  <div className="lg:hidden w-12 h-12 rounded-full bg-blue-600 mb-4 flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-blue-600 mr-4">0{value.number}</span>
                    <h2 className="text-2xl font-semibold text-gray-900">{value.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{value.description}</p>
                  
                  <div className="space-y-3">
                    {value.details.map((detail, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mr-3" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}