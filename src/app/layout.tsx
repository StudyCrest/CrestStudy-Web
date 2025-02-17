import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { description } from "@/data/seo";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CrestStudy - Crush Your Academic Goals with Ease",
  description,
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  // SEO Metadata
  keywords: [
    "Education",
    "Study",
    "Crest",
    "crest study",
    "creststudy",
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
    description,
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
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CrestStudy",
              url: "https://www.creststudy.com",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.creststudy.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* Preload Critical Assets */}
        <link rel="preload" href="/assets/creststudy-og.JPG" as="image" />
      </head>
      <body className="min-h-screen">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
