import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Abdullah Khalid | Muslim Filmmaker & Educator",
  description: "Muslim filmmaker and educator using visual storytelling to inspire faith, purpose, and positive change. Creating engaging Islamic content that educates and empowers communities worldwide.",
  keywords: ["Abdullah Khalid", "Muslim filmmaker", "Islamic content creator", "faith-based storytelling", "Islamic education", "video production", "Muslim educator", "Philadelphia filmmaker"],
  authors: [{ name: "Abdullah Khalid" }],
  creator: "Abdullah Khalid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdullahkhalid.com",
    title: "Abdullah Khalid | Muslim Filmmaker & Educator",
    description: "Muslim filmmaker and educator using visual storytelling to inspire faith, purpose, and positive change.",
    siteName: "Abdullah Khalid Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Khalid | Muslim Filmmaker & Educator",
    description: "Muslim filmmaker and educator using visual storytelling to inspire faith, purpose, and positive change.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
