"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", },
  { label: "Tours", },
  { label: "Hotels", },
  { label: "Blog", },
  { label: "About", },
  { label: "Contact", },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Announcement Bar */}
      <div className="w-full bg-[#3b4cca] text-white text-center text-[12px] py-2.5 px-4 font-medium tracking-wide">
        Autodesigner 2.0 is here. The most popular UI generator just got even better!
      </div>

      {/* Main Header */}
      <header className="w-full bg-[#0000004D]" style={{ height: "70px" }}>
        <div className="max-w-[1250px] mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <span className="text-[22px] font-bold text-white tracking-tight">
              tripbooking<span className="text-amber-400">.ai</span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}


              >
                {link.label}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-300 hover:text-white text-[14px] transition-colors">
              <Search size={16} /> Search
            </button>
            <Link
              href="#"
              className="bg-amber-400 hover:bg-amber-500 text-white text-[14px] font-bold px-6 py-2.5 rounded-full transition-colors shadow-lg"
            >
              Sign In
            </Link>
          </div>

          <button className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
    </div>
  );
}