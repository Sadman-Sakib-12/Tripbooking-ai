import Image from "next/image";
import { hotels } from "@/data/hotels";
import { MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TopRatedHotels() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundColor: "#e0f2fe",
        backgroundImage: `url('https://i.ibb.co.com/TBFPcP3Z/89317a691ebd3da8f3477755ea64dd5e1ed1c1c7.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">

        {/* --- Header Section --- */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">
              Top Rated Hotels
            </h2>
            <p className="text-gray-500 mt-2 text-lg font-medium">
              Quality as judged by customers. Book at the ideal price!
            </p>
          </div>
          <div className="flex gap-3 mb-1">
            <NavBtn dir="left" />
            <NavBtn dir="right" />
          </div>
        </div>

        {/* --- Hotel Cards Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="group bg-white rounded-[40px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-500 border border-white/50"
            >
              {/* Image with Tag */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlapping Body Content */}
              <div className="relative bg-white rounded-[35px] mt-[-40px] p-6 pt-8">
                <h3 className="text-[17px] font-extrabold text-gray-900 leading-tight mb-2 line-clamp-2 min-h-[42px]">
                  {hotel.name}
                </h3>

                <div className="flex items-center text-gray-400 text-xs mb-4 gap-1.5 font-medium">
                  <MapPin size={14} className="text-gray-300" />
                  {hotel.location}
                </div>

                {/* Stars and Rating */}
                <div className="flex items-center gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < Math.round(hotel.rating) ? "#f59e0b" : "none"}
                      className={i < Math.round(hotel.rating) ? "text-[#f59e0b]" : "text-gray-200"}
                    />
                  ))}
                  <span className="text-[11px] text-gray-400 ml-1 font-bold">
                    ({hotel.reviews})
                  </span>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between border-t border-gray-50 pt-5">
                  <div>
                    <span className="text-[20px] font-black text-gray-900">
                      ${hotel.pricePerNight.toFixed(2)}
                    </span>
                    <span className="text-gray-400 text-xs font-bold ml-1">/ person</span>
                  </div>
                  <button className="bg-[#0546D2] hover:bg-blue-700 text-white text-xs font-black px-3 py-2.5 rounded-2xl transition-all shadow-lg shadow-blue-100 active:scale-95">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NavBtn({ dir }: { dir: "left" | "right" }) {
  return (
    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 hover:bg-[#0546D2] hover:text-white transition-all shadow-sm border border-gray-100">
      {dir === "left" ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </button>
  );
}