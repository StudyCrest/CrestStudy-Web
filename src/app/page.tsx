import dynamic from "next/dynamic";
import { description } from "@data/seo";
import Image from "next/image";
import Button from "@components/Button";
import TextField from "@components/Input/TextField";

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
      <section className="bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          {/* Left Section: Text */}
          <div className="lg:w-1/2 text-center lg:text-left px-5 mt-52">
            <h2 className="text-studycrest-primary font-medium text-sm uppercase mb-4 leading-[16.8px] dropping-soon rounded py-2 px-3 w-[142px] h-[33px]">
              Dropping Soon!!!
            </h2>
            <h1 className="text-[52px] leading-[62.4px] font-semibold mb-4 text-studycrest-6">
              Study Better, Track Progress, and Ace your exams with ease.
            </h1>
            <p className="text-base text-studycrest-3 font-normal mb-6 leading-[25.92px]">
              Get ready to transform the way you study! Our innovative platform
              is designed to make learning more efficient and fun — everything
              you need to stay on top of your academic game is just around the
              corner.
            </p>
            <p className="text-sm text-studycrest-4 mb-3 font-semibold uppercase leading-[21.76px]">
              Get notified when we launch
            </p>

            <div className="flex items-center space-x-4 border border-studycrest-2 bg-studycrest-1 rounded-xl p-3 max-w-full">
              <TextField
                type="email"
                placeholder="Enter your email address"
                className="border border-studycrest-9 rounded-md py-[14px] px-4 focus:border-none focus:outline-studycrest-9 w-[373px]"
              />
              <Button title="Join the waitlist" />
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="lg:w-[40%] w-full flex -mt-20">
            <Image
              src="/assets/heroimage.svg"
              alt="StudyCrest app preview"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
