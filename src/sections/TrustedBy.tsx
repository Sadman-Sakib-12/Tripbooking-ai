"use client";

import React from "react";

const airlineLogos = [
  { name: 'CASA', textStyle: 'text-[#03063A]', img: '/path/to/casa-logo.png' },
  { name: 'EGYPTAIR', textStyle: 'text-[#03063A]', img: '/path/to/egyptair-logo.png' },
  { name: 'Cubana', textStyle: 'text-[#0147cb]', img: '/path/to/cubana-logo.png' },
  { name: 'DELTA', textStyle: 'text-[#03063A]', img: '/path/to/delta-logo.png' },
  { name: 'AIRLINES', textStyle: 'text-[#b32b26]', img: '/path/to/airlines-logo.png' },
  { name: 'WESTJET', textStyle: 'text-[#03063A]', img: '/path/to/westjet-logo.png' },
  { name: 'AIR', textStyle: 'text-[#03063A]', img: '/path/to/air-logo.png' },
];

export default function TrustedBy() {
  return (
    <section className="w-full  -mt-35 h-[318px]  bg-[#E8ECF9] border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Text Section */}
          <div className="shrink-0 text-center lg:text-left">
            <h3 className="text-[20px] font-bold text-gray-900 leading-tight">Trusted by</h3>
            <p className="text-[12px] text-gray-500 mt-1 max-w-[240px] leading-relaxed">
              We are a trusted partner of airlines, payment gateways, and travel services around the world.
            </p>
          </div>

          {/* Vertical Divider (Hidden on mobile) */}
          <div className="hidden lg:block w-[1.5px] h-14 bg-gray-200/60 mx-4" />

          {/* Logos Grid */}
          <div className="flex gap-3 items-center p-45  ">
            {airlineLogos.map((airline) => (
              <div
                key={airline.name}
                className="flex items-center justify-center w-[100px] h-[80px] bg-white rounded-md shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Use React text element to apply exact colors */}
                <span className={`text-[20px] font-black tracking-tighter ${airline.textStyle}`}>
                  {airline.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}