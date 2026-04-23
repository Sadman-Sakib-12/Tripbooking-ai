import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TripBooking.ai — Your Gateway to Extraordinary Adventures",
  description: "AI-powered travel planning. Discover destinations, book tours, find hotels.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Sticky navbar: announcement(32px) + nav(60px) = 92px */}
        <Navbar />
        {/* Main content — flows directly below sticky navbar */}
        <main className="w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
