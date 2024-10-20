"use client";

import Link from "@/components/Link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-studycrest-11 pb-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-[838px] text-center mt-28 lg:mt-40">
            <h1 className="text-3xl sm:text-4xl lg:text-[56px] leading-tight lg:leading-[67.2px] font-semibold mb-4 text-studycrest-6">
              CrestStudy - Academic Success Made Simple and Achievable.
            </h1>
            <div className="flex justify-center mb-7">
              <p className="w-[575px] text-center text-base text-studycrest-3 font-normal leading-relaxed lg:leading-[25.92px]">
                Our personalized study schedules, progress-tracking tools, and
                daily reminders keep you on course to achieve your academic
                goals effortlessly.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="mr-5">
                <Link
                  href="/"
                  title="Get Started"
                  asButton={true}
                  size="large"
                />
              </div>
              <div>
                <Link
                  href="/contact"
                  title="Contact Us"
                  asButton={true}
                  variant="outlined"
                  size="large"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center mt-14">
          <Image
            src="/assets/new-hero-image.svg"
            alt="CrestStudy app"
            width={780}
            height={780}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
