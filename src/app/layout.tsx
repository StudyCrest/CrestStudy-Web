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
  title: "CrestStudy - Home",
  description,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },

  // SEO Metadata
  keywords: ["Education", "Study", "CrestStudy", "Academics"],

  // Open Graph (OG) tags for social sharing
  openGraph: {
    type: "website",
    url: "https://www.creststudy.com",
    title: "CrestStudy",
    description,
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CrestStudy Open Graph Image",
      },
    ],
    locale: "en_US",
  },

  // Twitter Card for sharing on Twitter
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "CrestStudy",
    description,
    images: [
      {
        url: "/assets/twitter-image.jpg",
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
