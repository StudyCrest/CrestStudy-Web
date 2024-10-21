"use client";

import { CommonHero } from "@/components/CommonHero";

export default function ContactUs() {
  return (
    <section className="pb-40">
      {/* Hero Section */}
      <section className="bg-studycrest-11 max-h-full lg:max-h-full pb-8 2xl:pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CommonHero
            title="Contact Us"
            description="Our goal is to provide you with the best possible support and assistance. Don't hesitate to reach out with any questions or concerns"
            stretch={true}
          />
        </div>
      </section>
    </section>
  );
}
