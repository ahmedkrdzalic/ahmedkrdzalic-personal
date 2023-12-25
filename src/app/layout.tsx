import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import Paws from "@/components/Paws";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ahmed Krdzalic",
  icons: {
    icon: "/AK-logo-bg.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-EYXMFNXEJ5" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-EYXMFNXEJ5');
        `}
      </Script>
      <body
        className="relative"
        style={{
          zIndex: -2,
        }}
      >
        <Paws />
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
