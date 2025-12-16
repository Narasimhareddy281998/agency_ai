"use client";
import Image from "next/image";
import React from "react";

const TrustedCompanies = () => {
  return (
    <section className="w-full py-16 bg-linear-to-r from-purple-100 to-white text-center">

      {/* Top Title */}
      <h2 className="text-gray-700 text-lg font-medium mb-10">
        Trusted by Leading Companies
      </h2>

      {/* Logos */}
      <div className="flex flex-wrap items-center justify-center gap-12 mb-20">
        <Image src="/coinbase_logo.png" alt="coinbase" width={120} height={40} />
        <Image src="/google_logo.svg" alt="google" width={120} height={40} />
        <Image src="/rakuten_logo.png" alt="rakuten" width={120} height={40} />
        <Image src="/microsoft_logo.png" alt="microsoft" width={120} height={40} />
        <Image src="/airbnb_logo.svg" alt="airbnb" width={120} height={40} />
        <Image src="/zoom_logo.png" alt="zoom" width={120} height={40} />
      </div>

      {/* How can we help section */}
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          How can we help?
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          From strategy to execution, we craft digital solutions that move
          your business forward.
        </p>
      </div>

    </section>
  );
};

export default TrustedCompanies;
