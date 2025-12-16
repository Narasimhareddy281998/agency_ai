"use client";

import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Advertising",
    desc: "We turn bold ideas into powerful digital solutions that connect, engage...",
    iconSrc: "/ads_icon.svg",
    highlighted: false,
  },
  {
    title: "Content marketing",
    desc: "We turn bold ideas into powerful digital solutions that connect, engage...",
    iconSrc: "/marketing_icon.svg",
    highlighted: true,
  },
  {
    title: "Content writing",
    desc: "We turn bold ideas into powerful digital solutions that connect...",
    iconSrc: "/content_icon.svg",
    highlighted: false,
  },
  {
    title: "Social media",
    desc: "We turn bold ideas into powerful digital solutions that connect, engage...",
    iconSrc: "/social_icon.svg",
    highlighted: false,
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className={`flex items-center gap-4 rounded-2xl bg-white px-6 py-5 shadow-sm border ${
              service.highlighted ? "border-gray-100 shadow-md" : "border-gray-100"
            }`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
              <Image src={service.iconSrc} alt={service.title} width={32} height={32} />
            </div>

            <div className="text-left">
              <h3 className="text-base font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
