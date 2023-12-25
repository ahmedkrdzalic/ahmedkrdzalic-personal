import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import Paws from "@/components/Paws";
import Head from "next/head";

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
      <Head>
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EYXMFNXEJ5"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-EYXMFNXEJ5');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </Head>
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
