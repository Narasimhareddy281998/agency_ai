"use client";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center text-center px-6 py-20 bg-white">
      
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Turning imagination into{" "}
        <span className="/bgimage1.png">digital</span> impact.
      </h1>

      {/* Sub text */}
      <p>
        Creating meaningful connections and turning big ideas
        into interactive digital experiences.
      </p>

      {/* Image */}
      <div className="w-full bg-linear-to-br from-white via-blue-50 to-blue-200 py-20 flex justify-center">
  <div className="mt-12">
    <Image
      src="/hero_img.png"
      alt="Two people working on laptop"
      width={800}
      height={500}
      className="rounded-xl shadow-lg object-cover"
    />
  </div>
</div>

    </section>
  );
};

export default HeroSection;
