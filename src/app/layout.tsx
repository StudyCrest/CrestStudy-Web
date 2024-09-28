import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@components/Header";
import { Loading } from "@components/Loading";
import "./globals.css";

export const description =
  "A solution to help students easily achieve their academic goals by providing tools to organize study schedules, track progress, and maintain motivation";

export const metadata: Metadata = {
  title: "StudyCrest",
  description,
  // SEO Metadata
  keywords: ["Education", "Study", "StudyCrest", "Academics"],

  // Open Graph (OG) tags for social sharing
  openGraph: {
    type: "website",
    url: "https://www.studycrest.io",
    title: "StudyCrest",
    description,
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "StudyCrest Open Graph Image",
      },
    ],
    locale: "en_US",
  },

  // Twitter Card for sharing on Twitter
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "StudyCrest",
    description,
    images: [
      {
        url: "/assets/twitter-image.jpg",
        alt: "StudyCrest Twitter Card Image",
      },
    ],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.studycrest.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <Suspense fallback={<Loading />}>
          <main className="flex-grow">{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
