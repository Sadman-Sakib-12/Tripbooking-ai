import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function PopularDestinations() {
  const destinations = [
    { id: 1, name: "Venice", tours: "356 Tours", image: "https://i.ibb.co.com/vvr5bTJJ/a85bdffd1c58448f81e315fa9d7566e1c8c172a4.png" },
    { id: 2, name: "Amsterdam", tours: "356 Tours", image: "https://i.ibb.co.com/vvr5bTJJ/a85bdffd1c58448f81e315fa9d7566e1c8c172a4.png" },
    { id: 3, name: "Budapest", tours: "356 Tours", image: "https://i.ibb.co.com/0yc3ZWZr/32a97d9f408e6c5e3982d01bda6683ab1afa647a.png" },
    { id: 4, name: "Lisbon", tours: "356 Tours", image: "https://i.ibb.co.com/6c5rVHSs/87135932cc9ab29f20b9c3e812687f32afd6d3fa.png" },
    { id: 5, name: "London", tours: "356 Tours", image: "https://i.ibb.co.com/8DqxXxZF/f2819271d04009a669def3c71a7fa168147e7206.png" },
    { id: 6, name: "Ottawa", tours: "356 Tours", image: "https://i.ibb.co.com/kgzz9nRN/9c5114334721b016ddc6f5e27eaa72d69b766bf2.png" },
    { id: 7, name: "Paris", tours: "356 Tours", image: "https://i.ibb.co.com/tM4zZ89Y/04e166464d088e3aebebddf1b0ea391285666ac8.png" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1250px] mx-auto px-6">

        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-[36px] font-bold text-gray-900 leading-tight">
            Popular Destinations
          </h2>
          <p className="text-[14px] text-gray-500 mt-1">
            Favorite destinations based on customer reviews
          </p>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Loop through destinations */}
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-[32px] p-2 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              {/* Image with rounded corners */}
              <div className="relative w-full h-[220px] overflow-hidden rounded-[28px]">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content - Title, Tour Count & Button */}
              <div className="px-4 py-3">
                <h3 className="text-[20px] font-bold text-gray-900 mb-1">{dest.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-gray-400 font-medium">{dest.tours}</span>
                  {/* Small Circle Arrow Button */}
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 group-hover:bg-amber-400 group-hover:text-white transition-colors duration-300">
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Blue CTA Card */}
          <div className="bg-[#0A4FD5] rounded-[32px] p-8 flex flex-col justify-between items-start text-left shadow-xl shadow-blue-100">
            <h3 className="text-white text-[24px] font-bold leading-[1.3] mt-4">
              Crafting Your Perfect Travel Experience
            </h3>

            {/* Golden Button */}
            <button className="w-full mt-10 bg-[#F6B70F] hover:bg-amber-500 text-white py-3.5 px-6 rounded-2xl flex items-center justify-between transition-all group">
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[12px] opacity-90 font-medium">Browse</span>
                <span className="text-[14px] font-bold">All destinations</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-amber-500 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} strokeWidth={3} />
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}