import React from "react";
import { MapPin, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";

const tours = [
  { id: 1, title: "California Sunset/Twilight Boat Cruise", dest: "Manchester, England", price: 48.25, time: "2 days 3 nights", guests: "4-6 guest", tag: "Top Rated", img: "https://i.ibb.co.com/6RdpgRcG/9f9c5b5bf418ae2c431fad8a69babd94696a7b36.png" },
  { id: 2, title: "NYC: Food Tastings and Culture Tour", dest: "Manchester, England", price: 17.32, time: "3 days 3 nights", guests: "4-6 guest", tag: "Best Sale", img: "https://i.ibb.co.com/0VV4BVS9/f8c1b214ef371c50fcbe067544e6e25f0f5001c8.png" },
  { id: 3, title: "Grand Canyon Horseshoe Bend 2 days", dest: "Manchester, England", price: 15.63, time: "7 days 6 nights", guests: "4-6 guest", tag: "25% Off", img: "https://i.ibb.co.com/4nxb8LmF/a071b2699488c0e4db5217d42460bed5bca7d4ff.png" },
];

export default function FeaturedTours() {
  return (
    <section className="bg-gray-50 py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Our Featured Tours</h2>
            <p className="text-gray-500 mt-2 text-lg">Favorite destinations based on customer reviews</p>
          </div>
          <div className="flex gap-3">
            <button className="p-3 rounded-full bg-white border border-gray-200 hover:bg-blue-600 hover:text-white transition-all shadow-sm"><ChevronLeft size={20} /></button>
            <button className="p-3 rounded-full bg-white border border-gray-200 hover:bg-blue-600 hover:text-white transition-all shadow-sm"><ChevronRight size={20} /></button>
          </div>
        </div>

        {/* --- TOUR GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {tours.map((tour) => (
            <div key={tour.id} className="relative group">
              {/* Outer Shadow Container */}
              <div className="bg-white rounded-[45px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-50 h-full">

                {/* Image Section */}
                <div className="relative h-[260px] overflow-hidden">
                  <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-5 left-6 bg-white/95 backdrop-blur-sm px-5 py-2 rounded-full shadow-md">
                    <span className="text-amber-500 font-bold text-sm uppercase tracking-wider">{tour.tag}</span>
                  </div>
                </div>

                {/* Content Section: Negative margin overlap effect */}
                <div className="relative bg-white rounded-[40px] mt-[-40px] p-8 pt-10 mx-[1px]">
                  <h3 className="text-[22px] font-black text-gray-900 leading-tight mb-4 min-h-[54px] line-clamp-2">
                    {tour.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <MapPin size={18} className="text-gray-300" />
                    <span className="text-[15px] font-medium">{tour.dest}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-500 font-bold mb-8">
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-gray-300" />
                      <span>{tour.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-gray-300" />
                      <span>{tour.guests}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                    <div>
                      <span className="text-2xl font-black text-gray-900">${tour.price}</span>
                      <span className="text-gray-400 text-sm ml-1">/ person</span>
                    </div>
                    <button className="bg-[#0546D2] hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-[20px] transition-all shadow-lg shadow-blue-100 active:scale-95">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- PROMO BANNERS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-[2.5rem] overflow-hidden min-h-[240px] group shadow-lg">
            <img src="https://i.ibb.co.com/5WvWrMSG/e07bad1ca617c18c5c0474303a1c33cc1e28058d.png" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Promo" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-between">
              <div>
                <h4 className="text-3xl font-black text-white mt-1">We Make Every Trips Special</h4>
              </div>
              <button className="bg-amber-400 text-white w-fit px-8 py-3 rounded-xl font-black text-sm">View More</button>
            </div>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden min-h-[240px] group shadow-lg">
            <img src="https://i.ibb.co.com/FLktg4CF/9e740bc7994f8aef2807747e36b51365a7e278c2.png" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Promo" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold  uppercase tracking-widest">Limited Offers</span>
                <h4 className="text-3xl font-black text-white mt-1">Buy 1, Get 1 Free Attractions</h4>
              </div>
              <button className="bg-[#0640C3] text-white w-fit px-8 py-3 rounded-xl font-black text-sm">View More</button>
            </div>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden min-h-[240px] group shadow-lg">
            <img src="https://i.ibb.co.com/PzzjFFLD/750f895bf49bbaa2fe3414b4d120832c72ffe3ed.png" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Promo" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-white/90 uppercase tracking-widest">Limited Offers</span>
                <h4 className="text-3xl font-black text-white mt-1">Buy 1, Get 1 Free<br />Attractions</h4>
              </div>
              <button className="bg-amber-400 text-white w-fit px-8 py-3 rounded-xl font-black text-sm">View More</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}