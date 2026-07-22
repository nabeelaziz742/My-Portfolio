import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Nabeel Aziz — Backend & Full-Stack Developer",
  description:
    "Recruiter-grade luxury portfolio of Muhammad Nabeel Aziz, specializing in Python, Django, FastAPI, and modern web architectures.",
  keywords: [
    "Muhammad Nabeel Aziz",
    "Backend Developer",
    "Python Developer",
    "Django",
    "FastAPI",
    "Full-Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Nabeel Aziz" }],
  openGraph: {
    title: "Muhammad Nabeel Aziz — Backend & Full-Stack Developer",
    description:
      "Explore the professional portfolio showcasing robust backend architectures, clean APIs, and modern web apps.",
    url: "https://nabeelaziz.dev",
    siteName: "Muhammad Nabeel Aziz Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-sans bg-[#030712] text-[#F8FAFC] antialiased selection:bg-[#3B82F6] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}