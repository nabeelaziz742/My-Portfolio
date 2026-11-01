import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
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

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#081522",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nabeelaziz.dev"),
  title: {
    default: "Muhammad Nabeel Aziz | Python Django Backend Developer | REST APIs",
    template: "%s | Muhammad Nabeel Aziz",
  },
  description:
    "Professional portfolio of Muhammad Nabeel Aziz — Python Django Backend Developer specializing in scalable RESTful APIs, relational database design (PostgreSQL, MySQL), JWT Authentication, Role-Based Access Control (RBAC), and multi-tenant architectures.",
  keywords: [
    "Muhammad Nabeel Aziz",
    "Python Developer",
    "Django Developer",
    "Django REST Framework",
    "DRF",
    "RESTful APIs",
    "PostgreSQL",
    "MySQL",
    "Backend Developer Lahore",
    "JWT Authentication",
    "Role-Based Access Control",
    "RBAC",
    "Nexrupt Technologies",
    "Python Backend Engineer",
  ],
  authors: [{ name: "Muhammad Nabeel Aziz", url: "https://www.linkedin.com/in/nabeel-aziz" }],
  creator: "Muhammad Nabeel Aziz",
  publisher: "Muhammad Nabeel Aziz",
  alternates: {
    canonical: "https://nabeelaziz.dev",
  },
  openGraph: {
    title: "Muhammad Nabeel Aziz | Python Django Backend Developer | REST APIs",
    description:
      "Explore production backend architectures, live automotive dealership APIs, ISP multi-tenant platforms, and enterprise RBAC portals built by Muhammad Nabeel Aziz.",
    url: "https://nabeelaziz.dev",
    siteName: "Muhammad Nabeel Aziz — Backend Developer Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Muhammad Nabeel Aziz — Python Django Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Nabeel Aziz | Python Django Backend Developer",
    description:
      "Scalable RESTful APIs, PostgreSQL architectures, JWT authentication, and enterprise RBAC solutions.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Nabeel Aziz",
    jobTitle: "Python Django Backend Developer",
    url: "https://nabeelaziz.dev",
    email: "nabeelaziz742@gmail.com",
    telephone: "+92 302 6629455",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "Pakistan",
    },
    sameAs: [
      "https://www.linkedin.com/in/nabeel-aziz",
      "https://github.com/nabeelaziz742",
    ],
    knowsAbout: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "MySQL",
      "RESTful APIs",
      "JWT Authentication",
      "Role-Based Access Control",
      "Database Optimization",
      "Next.js",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#081522] text-[#EAF2F5] antialiased selection:bg-[#20B8A5] selection:text-[#081522]`}
      >
        {children}
      </body>
    </html>
  );
}