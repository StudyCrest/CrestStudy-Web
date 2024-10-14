import type { Metadata } from "next";
import { Suspense } from "react";
import { Urbanist } from "next/font/google";
import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
import { description } from "@/data/seo";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CrestStudy - Crush Your Academic Goals with Ease",
  description,
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
  },

  // SEO Metadata
  keywords: [
    "Education",
    "Study",
    "Crest",
    "CrestStudy",
    "Academics",
    "Study Tools",
    "Online Learning",
    "Crest Study",
    "Study Crest",
  ],

  // Open Graph (OG) tags for social sharing
  openGraph: {
    type: "website",
    url: "https://www.creststudy.com",
    title: "CrestStudy",
    description,
    images: [
      {
        url: "https://www.creststudy.com/assets/creststudy-og.JPG",
        width: 1200,
        height: 630,
        alt: "CrestStudy - Crush Your Academic Goals with Ease",
      },
    ],
    locale: "en_US",
  },
  // Twitter Card for sharing on Twitter
  twitter: {
    card: "summary_large_image",
    site: "@CrestStudy_",
    title: "CrestStudy",
    description: "Crush Your Academic Goals with Ease",
    images: [
      {
        url: "https://www.creststudy.com/assets/creststudytwitter.JPEG",
        alt: "CrestStudy Twitter Card Image",
      },
    ],
  },
  // Canonical URL
  alternates: {
    canonical: "https://www.creststudy.com",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.className}>
      <body className="min-h-screen">
        <Header />
        <Suspense fallback={<Loading />}>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
