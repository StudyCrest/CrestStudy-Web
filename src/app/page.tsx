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
      <section className="bg-white pb-20 xl:pb-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
          {/* Left Section: Text */}
          <div className="lg:w-1/2 w-full text-left mt-32 lg:mt-52">
            <h2 className="text-studycrest-primary font-medium text-sm uppercase mb-4 leading-[16.8px] dropping-soon rounded py-2 px-3 w-[142px] h-[33px]">
              Dropping Soon!!!
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-[52px] leading-tight lg:leading-[62.4px] font-semibold mb-4 text-studycrest-6">
              Study Better, Track Progress, and Ace your exams with ease.
            </h1>
            <p className="text-base text-studycrest-3 font-normal mb-6 leading-relaxed lg:leading-[25.92px]">
              Get ready to transform the way you study! Our innovative platform
              is designed to make learning more efficient and fun — everything
              you need to stay on top of your academic game is just around the
              corner.
            </p>
            <p className="text-sm text-studycrest-4 mb-3 font-semibold uppercase leading-[21.76px]">
              Get notified when we launch
            </p>

            <div className="flex flex-col md:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 border border-studycrest-2 bg-studycrest-1 rounded-xl p-3 w-full">
              <TextField
                type="email"
                placeholder="Enter your email address"
                className="border border-studycrest-9 rounded-md py-[14px] px-4 focus:outline-none w-full lg:w-[260px] xl:w-[373px]"
              />
              <Button title="Join the waitlist" extraStyle="w-full" />
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="lg:w-[40%] w-full hidden lg:block lg:-mt-16">
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
