import { navMenu } from "@/data/navmenu";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import LinkComp from "../Link";
import { TitleTag } from "../SectionComp/TitleTag";

export default function Footer() {
  const pathname = usePathname();

  return (
    <div className="relative bg-studycrest-19 pb-10 pt-52 sm:pt-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 absolute -top-24 left-1/2 transform -translate-x-1/2">
        <div className="bg-studycrest-20 rounded-lg shadow-main">
          <div className="flex flex-col items-center sm:items-start lg:flex-row justify-between py-5 lg:py-[48px] px-10">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex justify-center">
                <TitleTag title="Ready to get Started?" />
              </div>
              <h2 className="text-studycrest-13 font-semibold text-xl sm:text-2xl leading-[33px] sm:w-[519px] text-center sm:text-left">
                Transform Your Study Habits and Achieve Academic Excellence with
                CrestStudy
              </h2>
            </div>
            <div className="flex items-center space-x-4 mt-5 lg:mt-0">
              <LinkComp
                href="/waitlist"
                title="Join Waitlist"
                asButton={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-studycrest-20 w-[56px] h-[56px] rounded-[48px] flex justify-center">
          <Image
            src="/assets/small-logo.svg"
            alt="CrestStudy Logo"
            width={30}
            height={30}
            className="rounded-lg"
          />
        </div>
        <p className="text-studycrest-20 text-lg font-semibold leading-[21.6px] pl-2">
          CrestStudy
        </p>
      </div>

      <div className="flex justify-center mt-7">
        <Image
          src="/assets/footer-line.svg"
          alt="CrestStudy"
          width={350}
          height={50}
          className="rounded-lg"
        />
      </div>

      <div className="flex justify-center mt-3">
        <nav className="hidden lg:flex space-x-4">
          {navMenu.map((menu) => (
            <LinkComp
              key={menu.id}
              href={menu.url}
              title={menu.name}
              extraStyle={
                pathname == menu.url
                  ? "text-studycrest-primary leading-[19.2px] font-semibold pr-4"
                  : "text-studycrest-7 leading-[19.2px] font-medium hover:text-studycrest-primary pr-4"
              }
            />
          ))}
        </nav>
      </div>

      <div className="flex justify-center my-3">
        <Link
          className="cursor-pointer"
          href="https://x.com/CrestStudy_"
          target="_blank"
        >
          <Image
            src="/assets/twitter.svg"
            alt="Twitter"
            width={22}
            height={22}
            className="rounded-lg mr-4 cursor-pointer"
          />
        </Link>
        <Link
          className="cursor-pointer"
          href="https://www.instagram.com/creststudy_/"
          target="_blank"
        >
          <Image
            src="/assets/instagram.svg"
            alt="Instagram"
            width={22}
            height={22}
            className="rounded-lg mr-4 cursor-pointer"
          />
        </Link>
        <Link
          className="cursor-pointer"
          href="https://www.linkedin.com/company/crest-study"
          target="_blank"
        >
          <Image
            src="/assets/linkedin.svg"
            alt="LinkedIn"
            width={22}
            height={22}
            className="rounded-lg mr-4 cursor-pointer"
          />
        </Link>
        <Link
          className="cursor-pointer"
          href="https://web.facebook.com/profile.php?id=61567300193493"
          target="_blank"
        >
          <Image
            src="/assets/facebook.svg"
            alt="Facebook"
            width={22}
            height={22}
            className="rounded-lg cursor-pointer"
          />
        </Link>
      </div>

      <p className="text-studycrest-21 text-base font-medium leading-[19.2px] flex justify-center pt-5">
        © Copyright 2024. All Rights Reserved
      </p>
    </div>
  );
}
