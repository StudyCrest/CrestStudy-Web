import Image from "next/image";
import Link from "@components/Link";
import { navMenu } from "@data/navmenu";

export const Header = () => {
  return (
    <header className="bg-white border-b border-studycrest-8 py-4 m-0 z-50 fixed top-0 left-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
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

        <nav className="flex space-x-4">
          {navMenu.map((menu) => (
            <Link
              key={menu.id}
              href={menu.url}
              title={menu.name}
              extraStyle={menu.style}
            />
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/" title="Join the waitlist" asButton={true} />
        </div>
      </div>
    </header>
  );
};
