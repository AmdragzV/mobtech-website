import Image from "next/image";
import React from "react";
import {
  BsArrowRight,
  BsGlobe,
  BsInstagram,
  BsLaptop,
  BsLightning,
  BsPeople,
  BsStars,
} from "react-icons/bs";
import Founder from '../../../../public/founder.jpg';

interface StatProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

const StatItem: React.FC<StatProps> = ({ icon, number, label }) => (
  <div className="flex flex-col items-center p-8">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-4xl font-bold mb-2">{number}</h3>
    <p className="text-gray-600 text-center">{label}</p>
  </div>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string }> = ({
  icon,
  title,
}) => (
  <div className="bg-blue-50 p-4 rounded-xl flex items-center gap-3 hover:bg-blue-100 transition-all shadow-sm">
    <div className="text-blue-600">{icon}</div>
    <p className="text-gray-700 text-sm font-medium">{title}</p>
  </div>
);

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 py-10 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6 shadow-sm">
              <span className="animate-pulse text-blue-600">
                <BsStars size={16} />
              </span>
              <span className="text-gray-700 text-sm font-medium">
                Pioneering Digital Innovation
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent">
              Transforming Digital
              <span className="block mt-2">Experiences</span>
            </h1>
            <p className="text-xl leading-relaxed text-gray-600 mb-12">
              We&apos;re shaping the future of gaming and digital marketing,
              creating innovative solutions that empower communities and
              businesses to thrive in the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="bg-[#00008B] text-white rounded-xl hover:bg-blue-700 transition-all duration-300 px-6 py-3 font-semibold flex items-center gap-2 shadow-sm">
                Explore Our Solutions
                <BsArrowRight size={18} />
              </button>
              <button className="border border-blue-200 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <FeatureCard
              icon={<BsLightning size={20} />}
              title="Innovative Gaming Solutions"
            />
            <FeatureCard
              icon={<BsGlobe size={20} />}
              title="Global Digital Marketing"
            />
            <FeatureCard
              icon={<BsStars size={20} />}
              title="Community Empowerment"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-16 bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent">
            Meet the Visionary Behind Mobtech
          </h2>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
              <div className="relative w-[300px] sm:w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={Founder}
                  alt="Akinyemi Akinjide Samuel"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold">Akinyemi Akinjide Samuel</h3>
                <p className="text-gray-600 mb-4">Founder & CEO</p>
                <a
                  href="https://www.instagram.com/official_akinyemiakinjide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  <BsInstagram size={20} />
                  <span>@official_akinyemiakinjide</span>
                </a>
              </div>
            </div>

            <div className="lg:w-2/3 space-y-6">
              <p className="text-lg leading-relaxed">
                At the helm of Mobtech Synergies Ltd., Akinyemi Akinjide Samuel
                stands as a testament to visionary leadership in the tech
                industry. His journey embodies the perfect fusion of
                entrepreneurial spirit and technological innovation, driven by a
                deep-seated desire to create meaningful impact in the digital
                space.
              </p>
              <p className="text-lg leading-relaxed">
                Through groundbreaking initiatives like Gacom, a revolutionary
                gaming social networking platform, and the Virtual Marketing
                Space (VMS), Akinyemi has demonstrated his commitment to
                transforming traditional industries. Gacom represents his vision
                of elevating gaming from a mere hobby to a viable career path,
                while VMS empowers businesses to thrive in the digital
                marketplace.
              </p>
              <p className="text-lg leading-relaxed">
                Beyond his technological ventures, Akinyemi has established
                himself as an influential author with works like &quot;The Power
                of Debt&quot; and &quot;Business Models,&quot; sharing crucial
                insights on financial strategy and entrepreneurship. His
                leadership extends to the spiritual realm through the Global
                Leadership Christian Network (GLCN), where he guides individuals
                to lead with purpose and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  sm:gap-8">
            <StatItem
              icon={<BsPeople size={40} />}
              number="10,000+"
              label="Active Users"
            />
            <StatItem
              icon={<BsLaptop size={40} />}
              number="500+"
              label="Gaming Communities"
            />
            <StatItem
              icon={<BsGlobe size={40} />}
              number="20+"
              label="Countries Reached"
            />
            <StatItem
              icon={<BsInstagram size={40} />}
              number="50K+"
              label="Social Media Following"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
