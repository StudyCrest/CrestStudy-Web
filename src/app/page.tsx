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
        url: "/assets/logo.svg",
        width: 1200,
        height: 630,
        alt: "Home Page Image",
      },
    ],
  },
};

export default function Home() {
  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
  );
}
