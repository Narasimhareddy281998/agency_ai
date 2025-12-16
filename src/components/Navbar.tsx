"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // apply theme to <html> tag
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="w-full bg-white dark:bg-gray-900 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo_dark.svg" // 👉 put your logo in /public/agency-logo.png
            alt="agency.ai logo"
            width={130}
            height={32}
            priority
            className="h-8 w-auto"
          />
          <span className="font-semibold text-xl text-gray-900 dark:text-white">
            agency.ai
          </span>
        </div>

        {/* Center Menu */}
        <nav className="flex-1">
          <ul className="flex justify-center gap-10 text-sm text-gray-500 dark:text-gray-300 font-medium">
            <li className="cursor-pointer hover:text-gray-900 dark:hover:text-white">
              Home
            </li>
            <li className="cursor-pointer hover:text-gray-900 dark:hover:text-white">
              Services
            </li>
            <li className="cursor-pointer hover:text-gray-900 dark:hover:text-white">
              Our Work
            </li>
            <li className="cursor-pointer hover:text-gray-900 dark:hover:text-white">
              Contact Us
            </li>
          </ul>
        </nav>

        {/* Right side: Theme toggle + Connect button */}
        <div className="flex items-center gap-3">
          {/* Connect button */}
          <span className="text-3xl font-bold border border-black rounded-4xl"> <MdOutlineDarkMode /></span>
         
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition flex items-center gap-2 text-sm font-medium">
            Connect →
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
