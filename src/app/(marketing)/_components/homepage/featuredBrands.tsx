import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaAward,
  FaClock,
  FaGlobe,
  FaUsers,
} from "react-icons/fa";
import gameImage from "../../../../../public/gameImage.png";
import nexovateLogo from "../../../../../public/nexovateBrand.png";
import oraigonLogo from "../../../../../public/oragionBrand.png";

export default function FeaturedBrandsSection() {
  const brands = [
    {
      name: "Nexovate",
      logo: nexovateLogo,
      description:
        "Focused on delivering next-generation web solutions for a wide range of industries.",
      stats: [
        { icon: FaGlobe, label: "Global Reach", value: "20+ Countries" },
        { icon: FaUsers, label: "Clients Served", value: "500+" },
        { icon: FaAward, label: "Industry Awards", value: "15" },
        { icon: FaClock, label: "Years of Excellence", value: "8+" },
      ],
      specialties: [
        "Web Development",
        "Cloud Solutions",
        "Digital Transformation",
        "Enterprise Software",
      ],
      featured_project: {
        title: "Enterprise Platform Migration",
        description:
          "Successfully migrated a Fortune 500 company's legacy systems to a modern cloud infrastructure",
      },
    },
    {
      name: "Oraigon",
      logo: oraigonLogo,
      description:
        "Crafting high-quality animations and comics that blend supernatural narratives with Christian themes.",
      stats: [
        { icon: FaGlobe, label: "Global Audience", value: "2M+" },
        { icon: FaUsers, label: "Active Subscribers", value: "100K+" },
        { icon: FaAward, label: "Animation Awards", value: "12" },
        { icon: FaClock, label: "Published Series", value: "25+" },
      ],
      specialties: [
        "3D Animation",
        "Comic Creation",
        "Character Design",
        "Storytelling",
      ],
      featured_project: {
        title: "Chronicles of Faith",
        description:
          "Award-winning animated series reaching over 1 million viewers worldwide",
      },
    },
    {
      name: "Gacom Gaming",
      logo: gameImage,
      description:
        "Dedicated to gaming innovation with immersive games, high-performance gadgets, and a vibrant social platform for gamers.",
      stats: [
        { icon: FaGlobe, label: "Active Players", value: "5M+" },
        { icon: FaUsers, label: "Community Size", value: "1M+" },
        { icon: FaAward, label: "Gaming Awards", value: "10" },
        { icon: FaClock, label: "Games Published", value: "30+" },
      ],
      specialties: [
        "Game Development",
        "Gaming Hardware",
        "E-sports",
        "Community Platform",
      ],
      featured_project: {
        title: "Virtual Reality Hub",
        description:
          "Revolutionary VR gaming platform connecting players worldwide",
      },
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
            Our Portfolio
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent mb-6">
            Featured Brands
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Discover our portfolio of industry-leading brands, each pushing the
            boundaries of innovation and excellence in their respective fields.
          </p>
        </div>

        <div className="space-y-16">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } lg:flex`}
            >
              <div className="lg:w-1/3 px-4 py-6 sm:p-8 bg-gradient-to-br from-blue-50 to-white flex flex-col justify-center items-center">
                <div className="relative w-64 h-48 mb-6">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="grid grid-cols-2 max-sm:place-content-center sm:grid-cols-2 gap-4 w-full">
                  {brand.stats.map((stat) => (
                    <div key={stat.label} className="text-center p-3">
                      <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <p className="font-semibold text-gray-900">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-2/3 px-4 py-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {brand.name}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {brand.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Core Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {brand.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Featured Project
                  </h4>
                  <h5 className="text-blue-600 font-medium mb-2">
                    {brand.featured_project.title}
                  </h5>
                  <p className="text-gray-600">
                    {brand.featured_project.description}
                  </p>
                </div>

                <Link href={`/brands`}>
                  <button className="group flex items-center gap-2 bg-[#00008B] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    <span>View Brand</span>
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
