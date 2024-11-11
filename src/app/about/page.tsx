"use client";

import Image from "next/image";
import Faq from "@/components/Faq";
import { TitleName } from "@/components/SectionComp/TitleName";
import { TitleTag } from "@/components/SectionComp/TitleTag";
import { CommonHero } from "@/components/CommonHero";
import { Card } from "@/components/Card";

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
              src="/assets/about-uss.jpg"
              alt="CrestStudy app About"
              width={1280}
              height={547}
              priority={true}
              className="rounded-lg"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* CrestStudy Story */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 bg-studycrest-15">
        <div className="mt-20 py-7">
          <div className="flex justify-center">
            <TitleTag title="CrestStudy story" />
          </div>

          <div className="flex flex-col xl:flex-row items-center bg-white rounded-lg p-6 mt-4 xl:mt-7">
            <Image
              src="/assets/study-struggle.jpg"
              alt="CrestStudy app About"
              width={560}
              height={390}
              loading="lazy"
              className="rounded-lg"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div className="xl:ml-14 mt-10 xl:mt-0">
              <h2 className="text-studycrest-6 font-semibold text-2xl sm:text-[30px] lg:text-[40px] leading-[52.8px]">
                The Student Struggle
              </h2>
              <p className="text-studycrest-3 font-normal text-[15px] sm:text-base leading-[30px] sm:leading-[37px] pt-3">
                We understand the struggles students face in balancing academic
                goals with daily responsibilities. Many start each semester with
                high hopes of achieving their academic potential. However,
                challenges like poor time management, lack of motivation, and
                disorganized study schedules often lead to stress and lower
                performance.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse xl:flex-row items-center bg-white rounded-lg p-6 mt-7">
            <div className="xl:mr-14 mt-10 xl:mt-0">
              <h2 className="text-studycrest-6 font-semibold text-2xl sm:text-[30px] lg:text-[40px] leading-[52.8px]">
                The Birth of CrestStudy
              </h2>
              <p className="text-studycrest-3 font-normal text-[15px] sm:text-base leading-[30px] sm:leading-[37px] pt-3">
                CrestStudy was born from a simple idea: to help students
                overcome these challenges head-on. The platform provides
                structure and support, simplifying the path to academic success.
              </p>
            </div>
            <Image
              src="/assets/about-creststudy-logo.png"
              alt="CrestStudy app About"
              width={560}
              height={390}
              loading="lazy"
              className="rounded-lg"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          <div className="flex flex-col xl:flex-row items-center bg-white rounded-lg p-6 mt-7">
            <Image
              src="/assets/study-success.jpg"
              alt="CrestStudy app About"
              width={560}
              height={390}
              loading="lazy"
              className="rounded-lg"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div className="xl:ml-14 mt-10 xl:mt-0">
              <h2 className="text-studycrest-6 font-semibold text-2xl sm:text-[30px] lg:text-[40px] leading-[52.8px]">
                Tailored Solution for Success
              </h2>
              <p className="text-studycrest-3 font-normal text-[15px] sm:text-base leading-[30px] sm:leading-[37px] pt-3">
                With personalized study schedules, progress tracking tools,
                daily streaks, rewards, and an automated to-do list with daily
                reminders, CrestStudy empowers students to stay motivated and on
                track throughout their academic journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-20 xl:my-28">
          <div className="flex justify-center">
            <TitleTag title="our mission and vision statements" />
          </div>

          <div className="mt-7 flex flex-col lg:flex-row justify-center space-y-5 sm:space-y-0 sm:space-x-5">
            <div className="border-gradient p-2 xl:p-4">
              <Card
                image="/assets/mission.svg"
                title="Our Mission"
                description="To help students stay organized, motivated, and productive throughout their academic journey by offering innovative tools that foster better time management and goal tracking."
              />
            </div>
            <div className="border-gradient p-2 xl:p-4">
              <Card
                image="/assets/vision.svg"
                title="Our Vision"
                description="To transform the way students approach learning by making personalized study schedules and progress tracking accessible to every student, empowering them to achieve academic excellence and balance their studies with everyday life."
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-16 sm:mt-28 text-center">
        <div className="flex justify-center">
          <TitleTag title="Frequently Asked Questions" />
        </div>
        <div className="flex flex-col items-center pb-4">
          <TitleName title="Have a question?" />
          <TitleName title="We've got you covered" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex">
          <div className="hidden lg:flex justify-end items-start -mt-14 w-[30%]">
            <Image
              src="/assets/student-faq.jpg"
              alt="CrestStudy FAQs"
              width={300}
              height={300}
              loading="lazy"
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
