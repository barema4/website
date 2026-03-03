import type { Metadata } from "next";
import Navbar from "../navbar";
import ShopContent from "./shop-content";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse and order fresh roasted beans, green beans, brewing equipment, and coffee experiences from Royal Roastery.",
  openGraph: {
    title: "Shop | Royal Roastery",
    description:
      "Browse and order fresh roasted beans, green beans, brewing equipment, and coffee experiences from Royal Roastery.",
    images: [
      {
        url: "/shop/roasted-beans-hand.jpg",
        width: 1200,
        height: 630,
        alt: "Royal Roastery shop — specialty coffee and equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop | Royal Roastery",
    description:
      "Browse and order fresh roasted beans, green beans, brewing equipment, and coffee experiences from Royal Roastery.",
    images: ["/shop/roasted-beans-hand.jpg"],
  },
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="bg-green-900 px-6 pb-16 pt-32">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-400">
            Royal Roastery
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Our Shop
          </h1>
          <p className="mx-auto max-w-xl text-lg text-green-100/60">
            Fresh roasted beans, green coffee, brewing gear, and hands-on
            experiences — all crafted with care.
          </p>
        </div>
      </section>

      {/* Shop content */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <ShopContent />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 border-b border-green-800 pb-8 md:flex-row">
            <a href="/" className="text-2xl font-bold text-white">
              Royal<span className="text-green-300"> Roastery</span>
            </a>
            <div className="flex gap-8">
              <a
                href="/"
                className="text-sm text-green-100/60 transition-colors hover:text-white"
              >
                Home
              </a>
              <a
                href="/shop"
                className="text-sm text-green-100/60 transition-colors hover:text-white"
              >
                Shop
              </a>
              <a
                href="/#services"
                className="text-sm text-green-100/60 transition-colors hover:text-white"
              >
                Services
              </a>
              <a
                href="/#contact"
                className="text-sm text-green-100/60 transition-colors hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="pt-8 text-center text-sm text-green-100/40">
            &copy; {new Date().getFullYear()} Royal Roastery. All rights
            reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
