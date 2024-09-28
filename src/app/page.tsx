import { description } from "./layout";

export const metadata = {
  title: "Home - StudyCrest",
  description,
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
    <div>
      <h1>Home</h1>
      <p>This is the Home page.</p>
    </div>
  );
}
