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
  title: "Abdullah Khalid | Graphic Designer & Islamic Content Creator",
  description: "Graphic designer and faith-based content creator specializing in Islamic social media graphics, event flyers, educational posts, and short-form video for Muslim organizations.",
  keywords: [
    "Abdullah Khalid",
    "graphic designer",
    "Islamic graphic design",
    "faith-based design",
    "Muslim content creator",
    "social media graphics",
    "Islamic social media",
    "event flyers",
    "Islamic content creator",
    "short-form video",
    "Muslim organizations",
    "Islamic education",
    "faith-based storytelling",
    "Philadelphia designer",
  ],
  authors: [{ name: "Abdullah Khalid" }],
  creator: "Abdullah Khalid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdullahkhalid.com",
    title: "Abdullah Khalid | Graphic Designer & Islamic Content Creator",
    description: "Graphic designer and faith-based content creator specializing in Islamic social media graphics, event flyers, educational posts, and short-form video for Muslim organizations.",
    siteName: "Abdullah Khalid Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Khalid | Graphic Designer & Islamic Content Creator",
    description: "Graphic designer and faith-based content creator specializing in Islamic social media graphics, event flyers, educational posts, and short-form video for Muslim organizations.",
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
