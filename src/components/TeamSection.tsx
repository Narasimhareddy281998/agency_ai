"use client";

import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Haley Carter",
    role: "CEO & founder",
    image: "/img1.jpg",
  },
  {
    name: "James Walker",
    role: "Ads manager",
    image: "/img2.jpg",
  },
  {
    name: "Jessica Morgan",
    role: "Vice president",
    image: "/img3.jpg",
  },
  {
    name: "Ashley Bennett",
    role: "Marketing & sales",
    image: "/img4.jpg",
  },
  {
    name: "Emily Parker",
    role: "Content marketer",
    image: "/img5.jpg",
  },
  {
    name: "Ryan Mitchell",
    role: "Content writer",
    image: "/img6.jpg",
  },
  {
    name: "Megan Brooks",
    role: "Performance manager",
    image: "/img7.jpg",
  },
  {
    name: "Amber Foster",
    role: "Senior writer",
    image: "/img8.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="w-full py-20 bg-white text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900">Meet the team</h2>
      <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
        A passionate team of digital experts dedicated to your brand&apos;s success.
      </p>

      {/* Team grid */}
      <div className="mt-12 max-w-6xl mx-auto grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="rounded-2xl bg-white border border-gray-100 shadow-sm px-4 py-5 flex items-center gap-3 text-left"
          >
            <div className="shrink-0">
              <Image
                src={member.image}
                alt={member.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
