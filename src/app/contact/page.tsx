"use client";

import Image from "next/image";
import Faq from "@/components/Faq";
import { TitleName } from "@/components/SectionComp/TitleName";
import { TitleTag } from "@/components/SectionComp/TitleTag";

export default function ContactUs() {
  return (
    <section className="pb-40">
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
