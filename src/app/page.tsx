"use client";

import Image from "next/image";
import { Card } from "@/components/Card";
import Faq from "@/components/Faq";
import Feature from "@/components/Features";
import Link from "@/components/Link";
import { TitleName } from "@/components/SectionComp/TitleName";
import { TitleTag } from "@/components/SectionComp/TitleTag";

export default function Home() {
  return (
    <section className="pb-40">
      {/* Hero Section */}
      <section className="bg-studycrest-11 max-h-full lg:max-h-full 2xl:pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="w-full max-w-[838px] text-center mt-32 xl:mt-40">
              <h1 className="text-3xl sm:text-4xl lg:text-[50px] xl:text-[56px] leading-tight lg:leading-[67.2px] font-semibold mb-4 text-studycrest-6">
                CrestStudy - Academic Success Made Simple and Achievable.
              </h1>
              <div className="flex justify-center mb-7">
                <p className="w-full max-w-[575px] text-center text-[15px] sm:text-base text-studycrest-3 font-normal leading-relaxed lg:leading-[25.92px]">
                  Our personalized study schedules, progress-tracking tools, and
                  daily reminders keep you on course to achieve your academic
                  goals effortlessly.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center">
                <div className="mr-0 sm:mr-5">
                  <Link
                    href="/waitlist"
                    title="Join Waitlist"
                    asButton={true}
                    size="large"
                  />
                </div>
                <div className="mt-10 sm:mt-0">
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
              src="/assets/new-hero-image.png"
              alt="CrestStudy app"
              width={800}
              height={800}
              quality={80}
              className="rounded-lg"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* CrestStudy Features */}
      <section className="mt-16 sm:mt-24">
        <div className="flex justify-center">
          <TitleTag title="CrestStudy features" />
        </div>
        <div className="flex justify-center">
          <TitleName title="Why choose CrestStudy?" />
        </div>
        <div className="flex justify-center mb-7">
          <p className="px-6 sm:px-0 sm:w-[550px] text-center text-[15px] sm:text-base text-studycrest-12 font-normal leading-relaxed lg:leading-[22.72px]">
            CrestStudy empowers students with Tailored Study Plans, Expert
            Guidance, and Comprehensive Resources to Achieve Their Full
            Potential
          </p>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="lg:mr-5">
            <div className="mb-0">
              <Feature
                title={"Personalized Study Schedule"}
                description={
                  "Set daily sessions and track progress with automated to-do lists."
                }
                image={"/assets/study-schedule-new.png"}
                noWrap={true}
              />
            </div>
            <Feature
              title={"Weekly Report Card & Analytics"}
              description={
                "You receive a detailed weekly report card from us with analytics on your study habits and progress, helping you track your performance in each course."
              }
              image={"/assets/weekly-analytics-new.png"}
              noWrap={true}
            />
          </div>
          <div className="hidden lg:flex lg:items-start">
            <Image
              src={"/assets/features-main.jpg"}
              alt="CrestStudy app"
              width={480}
              height={480}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-center items-center lg:items-start">
          <div className="lg:mr-3 lg:w-[300px]">
            <Feature
              title={"Daily Streaks & Rewards"}
              description={
                "Stay motivated with rewards for your daily study streaks."
              }
              noWrap={true}
              image={"/assets/streak.png"}
            />
          </div>
          <div className="lg:mr-3 lg:w-[300px]">
            <Feature
              title={"Automated To-Do Lists"}
              description={
                "Organize your tasks effortlessly with our automated to-do lists that keep you focused on what needs to be done each day."
              }
              noWrap={true}
              image={"/assets/todo-list.png"}
            />
          </div>
          <div className="lg:w-[300px]">
            <Feature
              title={"Reminders & Notifications"}
              description={"Never miss a session with our daily reminders."}
              noWrap={true}
              image={"/assets/notifications.png"}
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mt-16 sm:mt-24 text-center">
        <div className="flex justify-center">
          <TitleTag title="How it works" />
        </div>
        <div className="flex justify-center">
          <TitleName
            title="Streamline your study routine in three steps"
            extraStyle="w-[350px] sm:w-[563px]"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-center mt-5 space-y-5 sm:space-y-0 sm:space-x-5">
          <div>
            <Card
              image="/assets/create-account.svg"
              title="Create an account"
              description="Start by signing up with your email or social media accounts. It's quick and easy!"
            />
          </div>
          <div>
            <Card
              image="/assets/setting.svg"
              title="Complete Bio-data & Personalize Dashboard"
              description="Complete the Bio-data process by entering your school, academic level, and courses to tailor the platform to your specific needs."
              width={true}
            />
          </div>
          <div>
            <Card
              image="/assets/study-benefit.svg"
              title="Enjoy Study Benefits"
              description="Access personalized schedules, practice questions, receive timely reminders, and track your progress."
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-16 sm:mt-24 text-center">
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
