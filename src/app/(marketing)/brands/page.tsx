"use client";

import React from "react";
import Image from "next/image";
import {
  FaAward,
  FaClock,
  FaGlobe,
  FaUsers,
  FaCheck,
  FaStar,
  FaRocket,
} from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../_components/brands/card-and-tab";

export default function Brands() {
  const brands = [
    {
      name: "Nexovate",
      logo: "/nexovateBrand.png",
      description:
        "Focused on delivering next-generation web solutions for a wide range of industries.",
      stats: [
        { icon: FaGlobe, label: "Global Reach", value: "20+ Countries" },
        { icon: FaUsers, label: "Clients Served", value: "500+" },
        { icon: FaAward, label: "Industry Awards", value: "15" },
        { icon: FaClock, label: "Years of Excellence", value: "8+" },
      ],
      features: {
        basic: [
          "Access to basic web development tools",
          "5 cloud storage templates",
          "Standard support response time",
          "Basic analytics dashboard",
          "Single project management",
        ],
        professional: [
          "Advanced development toolkit",
          "25 cloud storage templates",
          "Priority support with 4-hour response time",
          "Advanced analytics and reporting",
          "Multiple project management",
          "API access",
          "Custom integrations",
        ],
        enterprise: [
          "Full enterprise development suite",
          "Unlimited cloud storage templates",
          "24/7 dedicated support",
          "Custom analytics solutions",
          "Enterprise-wide project management",
          "Advanced API access with higher limits",
          "Custom integration development",
          "Dedicated account manager",
          "Security compliance tools",
        ],
      },
      caseStudies: [
        {
          title: "Enterprise Platform Migration",
          description:
            "Successfully migrated a Fortune 500 company's legacy systems to a modern cloud infrastructure, resulting in 40% improved performance.",
          metrics: [
            "99.9% uptime",
            "40% faster loading times",
            "50% reduction in maintenance costs",
          ],
        },
        {
          title: "Digital Transformation Initiative",
          description:
            "Led digital transformation for a multinational corporation, implementing cutting-edge web solutions across 15 countries.",
          metrics: [
            "85% process automation",
            "60% reduction in manual tasks",
            "300% ROI",
          ],
        },
      ],
    },
    {
      name: "Oraigon",
      logo: "/oragionBrand.png",
      description:
        "Crafting high-quality animations and comics that blend supernatural narratives with Christian themes.",
      stats: [
        { icon: FaGlobe, label: "Global Audience", value: "2M+" },
        { icon: FaUsers, label: "Active Subscribers", value: "100K+" },
        { icon: FaAward, label: "Animation Awards", value: "12" },
        { icon: FaClock, label: "Published Series", value: "25+" },
      ],
      features: {
        basic: [
          "Access to basic animation library",
          "Standard definition content",
          "Monthly new releases",
          "Basic community access",
          "2 device streaming",
        ],
        premium: [
          "Full animation library access",
          "HD & 4K content",
          "Early access to new releases",
          "Premium community features",
          "5 device streaming",
          "Offline downloads",
          "Behind-the-scenes content",
        ],
        creator: [
          "All Premium features",
          "Animation tools access",
          "Character creation suite",
          "Storytelling workshops",
          "Publishing opportunities",
          "Professional networking",
          "Revenue sharing program",
          "Mentorship access",
        ],
      },
      caseStudies: [
        {
          title: "Chronicles of Faith",
          description:
            "Award-winning animated series reaching over 1 million viewers worldwide, combining compelling storytelling with Christian values.",
          metrics: [
            "1M+ viewers",
            "4.8/5 average rating",
            "92% viewer retention",
          ],
        },
        {
          title: "Community Growth Initiative",
          description:
            "Successfully built and nurtured a global community of Christian content creators and audiences.",
          metrics: [
            "100K+ active members",
            "25K+ creator submissions",
            "15K+ collaborative projects",
          ],
        },
      ],
    },
    {
      name: "Gacom",
      logo: "/gameImage.png",
      description:
        "Dedicated to gaming innovation with immersive games, high-performance gadgets, and a vibrant social platform for gamers.",
      stats: [
        { icon: FaGlobe, label: "Active Players", value: "5M+" },
        { icon: FaUsers, label: "Community Size", value: "1M+" },
        { icon: FaAward, label: "Gaming Awards", value: "10" },
        { icon: FaClock, label: "Games Published", value: "30+" },
      ],
      features: {
        basic: [
          "Access to basic games library",
          "Standard matchmaking",
          "Basic community features",
          "Monthly gaming events",
          "Standard hardware compatibility",
        ],
        pro: [
          "Full games library access",
          "Priority matchmaking",
          "Advanced community features",
          "Weekly exclusive events",
          "Pro hardware support",
          "Custom tournament creation",
          "Stream integration",
        ],
        elite: [
          "All Pro features",
          "Early access to new games",
          "Professional esports tools",
          "Advanced analytics",
          "Custom team management",
          "Sponsored tournament eligibility",
          "Hardware beta testing",
          "VIP support",
          "Revenue opportunities",
        ],
      },
      caseStudies: [
        {
          title: "Virtual Reality Hub",
          description:
            "Revolutionary VR gaming platform connecting players worldwide with groundbreaking immersive experiences.",
          metrics: [
            "5M+ active players",
            "98% positive reviews",
            "45min avg. session time",
          ],
        },
        {
          title: "Esports Evolution",
          description:
            "Successfully launched and maintained multiple esports tournaments and leagues across different game titles.",
          metrics: [
            "$2M+ prize pools",
            "500K+ tournament participants",
            "2M+ viewers",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 pt-10 md:pt-20 pb-16 sm:px-8">
        <div className="md:text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00003E] to-[#0000A4] bg-clip-text text-transparent mb-6">
            Our Brands & Services
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Explore our diverse portfolio of brands and discover the perfect
            solutions for your needs. Each brand offers unique features and
            capabilities designed to help you succeed.
          </p>
        </div>

        <div className="space-y-24">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-2xl shadow-xl px-4 py-6 sm:p-8"
            >
              <div className="flex flex-col lg:flex-row gap-8 mb-12">
                <div className="lg:w-1/3">
                  <div className="relative w-full h-48 mb-6">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
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

                <div className="lg:w-2/3">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {brand.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {brand.description}
                  </p>

                  <Tabs defaultValue="features" className="w-full">
                    <TabsList className="mb-8">
                      <TabsTrigger value="features">
                        Features & Plans
                      </TabsTrigger>
                      <TabsTrigger value="case-studies">
                        Case Studies
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="features">
                      <div className="grid md:grid-cols-3 gap-6">
                        {Object.entries(brand.features).map(
                          ([plan, features]) => (
                            <Card key={plan} className="relative">
                              <CardHeader>
                                <CardTitle className="capitalize">
                                  {plan} Plan
                                </CardTitle>
                                <CardDescription>
                                  Perfect for{" "}
                                  {plan === "basic"
                                    ? "getting started"
                                    : plan === "professional" ||
                                      plan === "premium"
                                    ? "growing teams"
                                    : "large organizations"}
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                <ul className="space-y-3">
                                  {features.map(
                                    (feature: string, index: number) => (
                                      <li
                                        key={index}
                                        className="flex items-start gap-2"
                                      >
                                        <FaCheck className="w-5 h-5 text-green-500 mt-1" />
                                        <span className="text-gray-600">
                                          {feature}
                                        </span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </CardContent>
                            </Card>
                          )
                        )}
                      </div>
                    </TabsContent>

                    <TabsContent value="case-studies">
                      <div className="grid md:grid-cols-2 gap-6">
                        {brand.caseStudies.map((study, index) => (
                          <Card key={index}>
                            <CardHeader>
                              <CardTitle>{study.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600 mb-4">
                                {study.description}
                              </p>
                              <div className="space-y-2">
                                {study.metrics.map((metric, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center gap-2"
                                  >
                                    <FaStar className="w-4 h-4 text-yellow-500" />
                                    <span className="text-gray-700">
                                      {metric}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>

              <div className="flex justify-center">
                <button className="group flex items-center gap-2 bg-[#00008B] text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  <span>Get Started with {brand.name}</span>
                  <FaRocket className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
