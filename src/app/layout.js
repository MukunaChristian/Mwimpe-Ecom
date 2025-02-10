"use client";

import { useEffect } from "react";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CartProvider } from "./context/CartContext";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    const handleAnalytics = () => {
      if (!window.gtag) {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-J7RTTXRMVG");
      }
    };
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-J7RTTXRMVG";
    script.async = true;
    script.onload = handleAnalytics;
    document.head.appendChild(script);
  }, []);

  return (
    <html lang="en">
      <head />
      <body className={`${inter.className} bg-white text-gray-900 flex flex-col min-h-screen`}>
        <CartProvider>
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
