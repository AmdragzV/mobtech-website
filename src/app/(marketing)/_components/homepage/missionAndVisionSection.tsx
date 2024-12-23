import Image from "next/image";
import {
  FaArrowRight,
  FaEye,
  FaGlobe,
  FaHandshake,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import VisionImage from "../../../../../public/mision.jpg";
import MissionImage from "../../../../../public/vision.jpg";

export default function MissionAndVisionSection() {
  const missionPoints = [
    {
      icon: FaLightbulb,
      text: "Creating forward-thinking solutions through innovation",
    },
    {
      icon: FaHandshake,
      text: "Building strategic partnerships for community impact",
    },
    {
      icon: FaGlobe,
      text: "Committed to sustainable and responsible development",
    },
  ];

  const visionPoints = [
    {
      icon: FaRocket,
      text: "Leading transformative change in technology",
    },
    {
      icon: FaHandshake,
      text: "Fostering global collaboration and innovation",
    },
    {
      icon: FaGlobe,
      text: "Creating lasting positive impact worldwide",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={MissionImage}
                  alt="Mission"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <FaRocket className="text-blue-600 text-2xl" />
                  <span className="text-lg font-semibold text-gray-900">
                    Driving Innovation
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                <span className="text-blue-600 font-semibold">Our Purpose</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To address critical challenges by creating forward-thinking,
                sustainable, and impactful solutions that leverage the best of
                science, technology, and engineering. At{" "}
                <a
                  href="https://www.linkedin.com/company/mobtech-synergies-ltd"
                  className="font-bold hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Learn more about Mobtech Synergies Ltd and its founder, Akinyemi Akinjide Samuel"
                >
                  Mobtech Synergies Ltd
                </a>
                , we are dedicated to improving lives and communities through
                strategic partnerships, continuous innovation, and a commitment
                to social responsibility.
              </p>

              <div className="space-y-4 mb-8">
                {missionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <point.icon className="text-blue-600 text-xl" />
                    <p className="text-gray-700">{point.text}</p>
                  </div>
                ))}
              </div>

              <button className="group flex items-center gap-2 px-8 py-4 bg-[#00008B] text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Discover More
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 relative group">
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={VisionImage}
                  alt="Vision"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <FaEye className="text-blue-600 text-2xl" />
                  <span className="text-lg font-semibold text-gray-900">
                    Shaping the Future
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:pr-8 lg:order-1">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                <span className="text-blue-600 font-semibold">
                  Our Aspiration
                </span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To be a catalyst for positive change, addressing both community
                and global challenges through transformative innovations in
                science, technology, and engineering. We envision a future where
                technology serves humanity&apos;s highest aspirations.
              </p>

              <div className="space-y-4 mb-8">
                {visionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <point.icon className="text-blue-600 text-xl" />
                    <p className="text-gray-700">{point.text}</p>
                  </div>
                ))}
              </div>

              <button className="group flex items-center gap-2 px-8 py-4 bg-[#00008B] text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Learn More
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
