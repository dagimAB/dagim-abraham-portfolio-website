import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Dagim Abraham — Portfolio",
  description: "Dagim Abraham - Full-Stack Developer",
};

import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from "next/script";

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
        <Header />
        {children}
        <Footer />

        {/* Vendor scripts (loaded after interactive) */}
        <Script
          src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/vendor/aos/aos.js" strategy="afterInteractive" />
        <Script
          src="/assets/vendor/typed.js/typed.umd.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/purecounter/purecounter_vanilla.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/waypoints/noframework.waypoints.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/glightbox/js/glightbox.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/swiper/swiper-bundle.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
        <Script src="/assets/js/contact.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
