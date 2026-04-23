import Link from "next/link";
import Image from "next/image";

// Tumar database ke thik rakha holo, kintu image onujayi support kora holo
const footerLinks = {
  Company: ["About Us", "Community Blog", "Jobs & Careers", "Contact Us", "Our Awards"],
  Services: ["Tour Guide", "Tour Booking", "Hotel Booking", "Ticket Booking", "Rental Services"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A4FD5] h-auto text-white/90">
      {/* Main footer: Left aligned, image style */}
      <div className="max-w-[1300px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 items-start">
          
          {/* Brand - Span 2 columns to give space */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1 mb-5">
              <span className="text-[22px] font-bold text-white tracking-tight">tripbooking.ai</span>
            </div>
            <p className="text-[14px] leading-relaxed mb-10 max-w-[400px]">
              Dive into local recommendations for a truly authentic experience.
            </p>
            
            {/* Call Us Section */}
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-white/70 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <span className="text-[12px] text-white/70">Need help? Call us</span>
                <p className="text-[24px] font-extrabold text-white mt-1">1-800-222-8888</p>
              </div>
            </div>
          </div>

          {/* Link columns - Dynamic based on database */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-[16px] mb-6">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-[14px] hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Right Column: Newsletter & Payments */}
          <div>
            {/* Newsletter */}
            <div className="mb-10">
              <h4 className="text-white font-bold text-[16px] mb-6">Newsletter</h4>
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white text-gray-900 placeholder-gray-400 text-[14px] px-5 py-4 pl-12 rounded-full outline-none"
                />
                {/* Mail Icon */}
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {/* Subscribe Button */}
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#F6B70F] hover:bg-amber-500 text-gray-900 font-bold text-[14px] px-6 py-2.5 rounded-full transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Payments */}
            <div>
              <h4 className="text-white font-bold text-[16px] mb-6">Payments</h4>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { src: "https://i.ibb.co.com/SwXbNWQ9/c60b687ff3ba1836a0e10913a64070be12709556.png", alt: "PayPal" },
                  { src: "https://i.ibb.co.com/TxXWWyxX/c415a610749a04da06995f0f0ed2c3636506dc41.png", alt: "Stripe" },
                  { src: "https://i.ibb.co.com/RkrDFGrr/25e80063e8e13237b58699aa3442227dbba205b6.png", alt: "VISA" },
                  { src: "https://i.ibb.co.com/fVmd4V8d/5e12198bf329177cae5fe6700b5b926d474a4183.png", alt: "Payoneer" },
                ].map((p) => (
                  <div key={p.alt} className="bg-white px-2 py-1 rounded-md flex items-center justify-center h-8 w-[50px] shrink-0">
                    <Image src={p.src} alt={p.alt} width={34} height={20} className="object-contain max-h-[16px]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar: Border-top, copy & social icons */}
      <div className="border-t border-white/10">
        <div className="max-w-[1300px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/70">
            &copy; {new Date().getFullYear()} Travila Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[12px] text-white/70">Follow us</span>
            {/* Image like round social icons */}
            {["fb", "insta", "X", "yt"].map((s, index) => (
              <Link key={s} href="#" className={`flex items-center justify-center w-8 h-8 rounded-full border border-white/20 hover:border-white/50 transition ${index === 2 ? 'font-black' : ''}`}>
                 <span className="text-white text-[10px] uppercase font-bold">{s}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}