import Image from "next/image";
import Link from "next/link";

const navMenu = [
  {
    name: "Home",
    url: "/",
    style: "text-studycrest-primary leading-normal font-semibold pr-4",
  },
  {
    name: "About StudyCrest",
    url: "/about",
    style:
      "text-studycrest-7 leading-normal font-medium hover:text-studycrest-primary pr-4",
  },
  {
    name: "FAQs",
    url: "/",
    style:
      "text-studycrest-7 leading-normal font-medium hover:text-studycrest-primary pr-4",
  },
  {
    name: "Contact Us",
    url: "/contact",
    style:
      "text-studycrest-7 leading-normal font-medium hover:text-studycrest-primary",
  },
];

export const Header = () => {
  return (
    <header className="bg-white border-b border-studycrest-8 py-4 m-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/logo.svg"
            alt="StudyCrest Logo"
            width={120}
            height={40}
            className="mr-4"
          />
          <h1 className="sr-only text-xl font-bold">StudyCrest</h1>
        </div>

        {/* Middle Section: Navigation */}
        <nav className="flex space-x-4">
          {navMenu.map((menu) => (
            <Link href={menu.url} className={menu.style}>
              {menu.name}
            </Link>
          ))}
        </nav>

        {/* Right Section: Actions (e.g., Profile, Search) */}
        <div className="flex items-center space-x-4">
          <button className="bg-studycrest-primary text-white px-[22px] py-3 rounded-lg font-semibold leading-normal">
            Join the waitlist
          </button>
        </div>
      </div>
    </header>
  );
};
