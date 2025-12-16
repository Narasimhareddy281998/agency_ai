"use client";

import Image from "next/image";
import React from "react";

const works = [
  {
    title: "Mobile app marketing",
    desc: "We turn bold ideas into powerful digital solutions that connect...",
    image: "/work_mobile_app.png",
  },
  {
    title: "Dashboard management",
    desc: "We turn bold ideas into powerful digital solutions that connect...",
    image: "/work_dashboard_management.png",
  },
  {
    title: "Fitness app promotion",
    desc: "We turn bold ideas into powerful digital solutions that connect...",
    image: "/work_fitness_app.png",
  },
];

const LatestWork = () => {
  return (
    <section className="w-full py-20 bg-white text-center">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900">
        Our latest work
      </h2>

      {/* Sub text */}
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        Browse our portfolio of innovative digital projects that showcase 
        creativity, performance, and results.
      </p>

      {/* Cards */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

        {works.map((work) => (
          <div
            key={work.title}
            className="rounded-2xl bg-white shadow-sm border border-gray-100 p-4 hover:shadow-md transition"
          >
            <Image
              src={work.image}
              alt={work.title}
              width={350}
              height={250}
              className="rounded-xl object-cover w-full"
            />

            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {work.title}
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              {work.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default LatestWork;
