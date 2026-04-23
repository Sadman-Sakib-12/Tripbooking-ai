import Hero from "@/sections/Hero";
import PopularDestinations from "@/sections/PopularDestinations";
import FeaturedTours from "@/sections/FeaturedTours";
import TopRatedHotels from "@/sections/TopRatedHotels";
import AIBanner from "@/sections/AIBanner";
import TrustedBy from "@/sections/TrustedBy";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <PopularDestinations />
      <FeaturedTours />
      <TopRatedHotels />
      <AIBanner />
      <Footer />
    </>
  );
}
