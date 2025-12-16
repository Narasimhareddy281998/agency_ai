// src/components/Footer.tsx

import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t mt-16 py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* LEFT SIDE — LOGO + TEXT */}
          <div>

            {/* ⭐ LOGO SECTION — THIS MATCHES YOUR IMAGE */}
            {/* ← LOGO SECTION HERE */}
           <div className="flex items-center gap-2">
                     <Image
                       src="/logo.svg" // 👉 put your logo in /public/agency-logo.png
                       alt="agency.ai logo"
                       width={32}
                       height={32}
                       priority
                       className="h-8 w-auto"
                     />
                    
            </div>

            <p className="text-gray-600 text-sm max-w-sm mt-3">
              From strategy to execution, we craft digital solutions that move 
              your business forward.
            </p>

            {/* Navigation Links */}
            <div className="flex gap-6 mt-6 text-gray-700 text-sm">
              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">Our work</a>
              <a href="#">Testimonial</a>
            </div>
          </div>

          {/* RIGHT SIDE — Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <span>📨</span> Subscribe to our newsletter
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>

            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-l-xl outline-none"
              />
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-r-xl hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t pt-6">
          <p className="text-gray-600 text-sm">
            Copyright 2025 © agency.ai – All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 text-gray-600 text-xl mt-4 md:mt-0">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
