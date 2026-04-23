"use client";

import Image from "next/image";
import { useState } from "react";
import { Search, MapPin, Calendar, Users, ChevronDown, Map, Hotel } from "lucide-react";

const tabs = [
  { name: "Tours", icon: <Map size={18} /> },
  { name: "Hotels", icon: <Hotel size={18} /> },
] as const;

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Hotels");

  return (
    <section className="w-full">
      {/* Hero Image Section */}
      <div className="relative w-full h-[500px]">
        <Image
          src="https://i.ibb.co.com/h1Y0wn0G/67c9b43f47a552c37ed773019b87e6670b841260-1.jpg"
          alt="Paradise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="inline-flex items-center gap-2 bg-amber-400 text-white text-[12px] font-bold px-5 py-2 rounded-full mb-6 shadow-xl uppercase tracking-widest">
            <span className="bg-blue-600 rounded-full p-0.5">🌍</span>
            Explore the world
          </div>
          <h1 className="text-[42px] md:text-[60px] font-extrabold text-white leading-[1.1] mb-5 drop-shadow-lg max-w-[850px]">
            Your Gateway to Extraordinary Adventures
          </h1>
          <p className="text-white/90 text-[16px] md:text-[18px] max-w-[550px] leading-relaxed drop-shadow">
            Pack your bags and let Travila redefine your travel experience. Where every journey is a story waiting to be told
          </p>
        </div>
      </div>

      {/* Search Card Overlay */}
      <div className="max-w-[1150px] mx-auto px-4  relative z-20" style={{ marginTop: "-90px" }}>
        <div className="bg-white rounded-[32px] md:rounded-2xl min-h-[230px] h-auto shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-2">
          <div className="flex items-center justify-between px-8 py-2">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === tab.name ? "bg-amber-400 text-white shadow-md" : "text-gray-400 hover:text-gray-600"
                    }`}
                >
                  {tab.icon} {tab.name}
                </button>
              ))}
            </div>
            <span className="text-[12px] text-gray-400 font-medium hidden sm:block">Need some help?</span>
          </div>

          <div className="hidden md:block mx-8 border-t border-gray-100 my-1"></div>

          <div className="flex flex-col md:flex-row items-center px-6 md:px-10 py-4 gap-6 md:gap-0">
            <div className="flex-1 w-full text-left md:border-r border-gray-100 md:pr-8">
              <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1 tracking-tighter">Location</label>
              <div className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2 text-[15px] font-bold text-gray-800 italic">
                  <MapPin size={18} className="text-gray-300" /> New York, USA
                </span>
                <ChevronDown size={14} className="text-gray-400" />
              </div>
            </div>

            <div className="flex-1 w-full text-left md:border-r border-gray-100 md:px-10">
              <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1 tracking-tighter">Check In & Check Out</label>
              <div className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2 text-[15px] font-bold text-gray-800 italic">
                  <Calendar size={18} className="text-gray-300" /> 02 January 2024
                </span>
                <ChevronDown size={14} className="text-gray-400" />
              </div>
            </div>

            <div className="flex-1 w-full text-left md:px-10">
              <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1 tracking-tighter">Guest</label>
              <div className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2 text-[15px] font-bold text-gray-800 italic">
                  <Users size={18} className="text-gray-300" /> 2 adults, 2 children
                </span>
                <ChevronDown size={14} className="text-gray-400" />
              </div>
            </div>

            <button className="w-full md:w-auto bg-[#0A4FD5] hover:bg-blue-700 text-white font-bold text-[16px] px-10 py-4 rounded-2xl md:rounded-full transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-200">
              <Search size={18} strokeWidth={3} /> Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}