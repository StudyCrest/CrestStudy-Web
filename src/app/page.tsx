"use client";

import { Card } from "@/components/Card";
import Faq from "@/components/Faq";
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
      <section className="mt-24">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="mr-5">
            <div className="mb-5">
              <Feature
                title={"Personalized Study Schedule"}
                description={
                  "Set daily sessions and track progress with automated to-do lists."
                }
                image={"/assets/study-schedule.svg"}
                noWrap={true}
              />
            </div>
            <Feature
              title={"Weekly Report Card & Analytics"}
              description={
                "You receive a detailed weekly report card from us with analytics on your study habits and progress, helping you track your performance in each course."
              }
              image={"/assets/weekly-analytics.svg"}
              noWrap={true}
            />
          </div>
          <div>
            <Image
              src={"/assets/feature-main.svg"}
              alt="CrestStudy app"
              width={480}
              height={480}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mr-3 w-[307px]">
            <Feature
              title={"Daily Streaks & Rewards"}
              description={
                "Stay motivated with rewards for your daily study streaks."
              }
              image={"/assets/streak.svg"}
            />
          </div>
          <div className="mr-3 w-[307px]">
            <Feature
              title={"Automated To-Do Lists"}
              description={
                "Organize your tasks effortlessly with our automated to-do lists that keep you focused on what needs to be done each day."
              }
              image={"/assets/todo.svg"}
            />
          </div>
          <div className="w-[307px]">
            <Feature
              title={"Reminders & Notifications"}
              description={"Never miss a session with our daily reminders."}
              image={"/assets/reminder.svg"}
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mt-24 text-center">
        <div className="flex justify-center">
          <TitleTag title="How it works" />
        </div>
        <div className="flex justify-center">
          <TitleName
            title="Streamline your study routine in three steps"
            extraStyle="w-[563px]"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center mt-5">
          <div className="mr-5">
            <Card
              image="/assets/create-account.svg"
              title="Create an account"
              description="Start by signing up with your email or social media accounts. It's quick and easy!"
            />
          </div>
          <div className="mr-5">
            <Card
              image="/assets/setting.svg"
              title="Complete KYC & Personalize Dashboard"
              description="Complete the KYC process by entering your school, academic level, and courses to tailor the platform to your specific needs."
            />
          </div>
          <Card
            image="/assets/study-benefit.svg"
            title="Enjoy Study Benefits"
            description="Access personalized schedules, practice questions, receive timely reminders, and track your progress,"
          />
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-24 text-center">
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
          <div className="flex justify-end items-start -mt-14 w-[30%]">
            <Image
              src="/assets/faq.svg"
              alt="CrestStudy FAQs"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="w-[70%]">
            <Faq />
          </div>
        </div>
      </section>
    </section>
  );
}
