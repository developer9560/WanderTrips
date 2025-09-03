import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WanderTrips — Curated Adventures & Group Trips",
    template: "%s | WanderTrips",
  },
  description:
    "Book curated group trips and adventures across the world. Trusted guides, safe itineraries, and seamless bookings.",
  metadataBase: new URL("https://www.wandertrips.example"),
  openGraph: {
    title: "WanderTrips — Curated Adventures & Group Trips",
    description:
      "Book curated group trips and adventures across the world. Trusted guides, safe itineraries, and seamless bookings.",
    url: "https://www.wandertrips.example",
    siteName: "WanderTrips",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "WanderTrips Hero",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WanderTrips — Curated Adventures & Group Trips",
    description:
      "Book curated group trips and adventures across the world. Trusted guides, safe itineraries, and seamless bookings.",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop",
    ],
  },
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        <Providers>
          <Navbar />
          <main className="min-h-[calc(100dvh-64px-240px)]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
