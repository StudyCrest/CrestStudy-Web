import { navMenu } from "@/data/navmenu";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import LinkComp from "../Link";

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className="bg-studycrest-19 py-10">
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
