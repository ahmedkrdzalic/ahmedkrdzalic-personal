import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
