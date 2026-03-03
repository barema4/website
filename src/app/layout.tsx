import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Royal Roastery | From Farm to Cup Excellence",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Royal Roastery is established to meet the people's value-chain challenges. We educate our customers on how best to grow, sort, process, produce and roast coffee.",
  keywords: [
    "coffee",
    "roastery",
    "Uganda",
    "specialty coffee",
    "green beans",
    "roasted beans",
    "barista training",
    "coffee roasting",
    "Royal Roastery",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    images: [
      {
        url: "/shop/roasted-beans-hand.jpg",
        width: 1200,
        height: 630,
        alt: "Royal Roastery — specialty coffee beans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/shop/roasted-beans-hand.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
