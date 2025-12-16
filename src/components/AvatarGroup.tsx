"use client";

import React from "react";
import Image from "next/image";

const AvatarGroup = () => {
  return (
   <div className="h-auto flex items-center justify-center bg-[hsl(27,38%,94%)]">
      <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-md">
      <div className="flex -space-x-3">
        <Image
          src="/img1.jpg"
          alt="User 1"
          width={56}
          height={56}
          className="rounded-full border-2 border-white"
        />
        <Image
          src="/img2.jpg"
          alt="User 2"
          width={56}
          height={56}
          className="rounded-full border-2 border-white"
        />
        <Image
          src="/img3.jpg"
          alt="User 3"
          width={56}
          height={56}
          className="rounded-full border-2 border-white"
        />
        <Image
          src="/img4.jpg"
          alt="User 4"
          width={56}
          height={56}
          className="rounded-full border-2 border-white"
        />
      </div>
      
      <p className="text-sm font-medium text-gray-700">
         Trusted by <span className="font-semibold">10k+people</span>
      </p>
    </div>
  </div>
  );
};

export default AvatarGroup;

