"use client";

import Feature from "@/components/Features";
import Link from "@/components/Link";
import { TitleName } from "@/components/SectionComp/TitleName";
import { TitleTag } from "@/components/SectionComp/TitleTag";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      {/* Hero Section */}
      <section className="bg-studycrest-11 min-h-screen">
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
              width={800}
              height={800}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* CrestStudy Features */}
      <section className="mt-20">
        <div className="flex justify-center">
          <TitleTag title="CrestStudy features" />
        </div>
        <div className="flex justify-center">
          <TitleName title="Why choose CrestStudy?" />
        </div>
        <div className="flex justify-center mb-7">
          <p className="w-[550px] text-center text-base text-studycrest-12 font-normal leading-relaxed lg:leading-[22.72px]">
            CrestStudy empowers students with Tailored Study Plans, Expert
            Guidance, and Comprehensive Resources to Achieve Their Full
            Potential
          </p>
        </div>
        <div className="flex justify-center">
          <div className="mr-5">
            <div className="mb-5">
              <Feature
                title={"Personalized Study Schedule"}
                description={
                  "Set daily sessions and track progress with automated to-do lists."
                }
                image={"/assets/study-schedule.svg"}
              />
            </div>
            <Feature
              title={"Personalized Study Schedule"}
              description={
                "Set daily sessions and track progress with automated to-do lists."
              }
              image={"/assets/weekly-analytics.svg"}
            />
          </div>
          <div>
            <Image
              src={"/assets/feature-main.svg"}
              alt="CrestStudy app"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mt-20 text-center">
        <div className="flex justify-center">
          <TitleTag title="How it works" />
        </div>
        <div className="flex justify-center">
          <TitleName
            title="Streamline your study routine in three steps"
            extraStyle="w-[563px]"
          />
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-20 text-center">
        <div className="flex justify-center">
          <TitleTag title="Frequently Asked Questions" />
        </div>
        <div className="flex justify-center">
          <TitleName
            title="Have a question? We've got you covered"
            extraStyle="w-[420px]"
          />
        </div>
      </section>
    </section>
  );
}
