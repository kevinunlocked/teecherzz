import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter as fallback font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Teecherz Home & Office - Quality Furniture in Zimbabwe",
  description:
    "Transform your home and office with quality furniture. 25+ years of trusted service. Free delivery, easy returns, multiple payment options.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/general-sans/GeneralSans-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/general-sans/GeneralSans-Medium.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/general-sans/GeneralSans-Semibold.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        style={{ fontFamily: "'General Sans', var(--font-inter), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
