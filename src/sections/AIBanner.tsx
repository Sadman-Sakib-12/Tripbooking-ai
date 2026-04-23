import Image from "next/image";

export default function AIBanner() {
  return (
    <>
      <section className="relative overflow-hidden py-16 rounded-md mx-auto w-full max-w-[1500px] min-h-[500px] h-auto" style={{
        background: "linear-gradient(135deg, #0147cb 0%, #0364f3 40%, #058bfd 100%)"
      }}>
        {/* Decorative Shapes based on original design */}
        {/* Left top large blue circle */}
        <div className="absolute left-[-150px] top-[-150px] w-[600px] h-[600px] rounded-full bg-blue-400/20 pointer-events-none" />
        {/* Right middle large white transparency circle */}
        <div className="absolute right-[-100px] top-[10%] w-[500px] h-[500px] rounded-full bg-white/5 pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-[600px]">
            <p className="text-[#fdd673] text-[12px] font-bold uppercase tracking-widest mb-4">
              AI Travel Assistant
            </p>
            <h2 className="text-[40px] font-black text-white leading-tight mb-5 tracking-tight">
              Find The Best Travel<br />
              Deals Instantly With AI!
            </h2>
            <p className="text-white/80 text-[15px] leading-relaxed mb-10 max-w-[500px]">
              No more endless searching! Our AI scans thousands of options in seconds to find you the best prices on flights, hotels, and tours—personalized just for you.
            </p>

            {/* App store buttons - polished styles */}
            <div className="flex flex-wrap gap-4">
              <button className="flex  items-center gap-3.5 bg-whitehover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-2xl transition-all hover:scale-105">
                <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-[11px] text-white/70 leading-none mb-0.5">Download on the</p>
                  <p className="text-[14px] font-bold leading-none text-white">App Store</p>
                </div>
              </button>

              <button className="flex items-center gap-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-2xl transition-all hover:scale-105">
                <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-12.6-3.18-3.18L3.18 23.76zM20.7 10.06l-2.52-1.44-3.54 3.54 3.54 3.54 2.55-1.47c.72-.42.72-1.74-.03-2.17zM2.01 1.05C1.8 1.29 1.68 1.65 1.68 2.1v19.8c0 .45.12.81.33 1.05l.06.06 11.1-11.1v-.27L2.07.99l-.06.06zM13.59 8.46l-3.54 3.54 3.54 3.54 3.54-3.54-3.54-3.54z" />
                </svg>
                <div className="text-left">
                  <p className="text-[11px] text-white/70 leading-none mb-0.5">Get it on</p>
                  <p className="text-[14px] font-bold leading-none text-white">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Polish Payment logos area beneath banner */}
      <section className="bg-white/80 py-6 border-b mt-15 mb-15 border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-8 opacity-90 group">
            {[
              { src: "https://i.ibb.co.com/SwXbNWQ9/c60b687ff3ba1836a0e10913a64070be12709556.png", alt: "PayPal" },
              { src: "https://i.ibb.co.com/TxXWWyxX/c415a610749a04da06995f0f0ed2c3636506dc41.png", alt: "Stripe" },
              { src: "https://i.ibb.co.com/fVmd4V8d/5e12198bf329177cae5fe6700b5b926d474a4183.png", alt: "Payoneer" },
              { src: "https://i.ibb.co.com/RkrDFGrr/25e80063e8e13237b58699aa3442227dbba205b6.png", alt: "VISA" },
              { src: "https://i.ibb.co.com/ycF37kpN/7380ae74eab9e36b35afa60a08608ea6ed11de8f.png", alt: "Cash App" },
              { src: "https://i.ibb.co.com/C5Jx75z9/95e4deb288a11e9c3611cb0bb0281f7f1bdc1673.png", alt: "Bitcoin" },
              { src: "https://i.ibb.co.com/JWjNsFMK/0e6babe51d838135ea38c27afa90d24c43844c27.png", alt: "Discover" },
            ].map((logo) => (
              <div key={logo.alt} className="flex items-center justify-center  ">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.alt === "Bitcoin" ? 100 : logo.alt === "Discover" ? 110 : 80}
                  height={logo.alt === "Bitcoin" ? 100 : logo.alt === "Discover" ? 110 : 80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}