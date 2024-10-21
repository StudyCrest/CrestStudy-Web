"use client";

import Image from "next/image";
import Faq from "@/components/Faq";
import { TitleName } from "@/components/SectionComp/TitleName";
import { TitleTag } from "@/components/SectionComp/TitleTag";
import { CommonHero } from "@/components/CommonHero";

export default function About() {
  return (
    <section className="pb-40">
      {/* Hero Section */}
      <section className="bg-studycrest-11 max-h-full lg:max-h-full pb-8 2xl:pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CommonHero
            title="About CrestStudy"
            description="Empowering Students to Achieve Academic Success with Ease"
          />

          {/* Hero Image */}
          <div className="flex justify-center mt-5">
            <Image
              src="/assets/about.svg"
              alt="CrestStudy app About"
              width={1280}
              height={547}
              className="rounded-lg"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-16 sm:mt-24 text-center">
        <div className="flex justify-center">
          <TitleTag title="Frequently Asked Questions" />
        </div>
        <div className="flex justify-center">
          <TitleName
            title="Have a question? We've got you covered"
            extraStyle="w-[420px]"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex">
          <div className="hidden lg:flex justify-end items-start -mt-14 w-[30%]">
            <Image
              src="/assets/faq.svg"
              alt="CrestStudy FAQs"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="lg:w-[70%]">
            <Faq />
          </div>
        </div>
      </section>
    </section>
  );
}
