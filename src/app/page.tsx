import dynamic from "next/dynamic";
import { description } from "./layout";

const Layout = dynamic(() => import("./layout"), { ssr: false });

export const metadata = {
  title: "Home - StudyCrest",
  description: description,
  openGraph: {
    title: "Home - StudyCrest",
    description,
    images: [
      {
        url: "/assets/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Home Page Open Graph Image",
      },
    ],
  },
};

export default function Home() {
  return (
    <Layout>
      <p className="font-urbanist text-sm">Home page</p>
    </Layout>
  );
}
