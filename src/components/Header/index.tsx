"use client";

import Image from "next/image";
import Link from "@/components/Link";
import { navMenu } from "@/data/navmenu";
import { useState } from "react";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { CloseIcon } from "@/components/icons/CloseIcon";
import useClickOutside from "@/hooks/useClickOutside";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ref = useClickOutside(() => setIsMobileMenuOpen(false));

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-studycrest-8 py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
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

        {/* Navigation for larger screens */}
        <nav className="hidden lg:flex space-x-4">
          {navMenu.map((menu) => (
            <Link
              key={menu.id}
              href={menu.url}
              title={menu.name}
              extraStyle={menu.style}
              external={true}
            />
          ))}
        </nav>

        {/* Mobile menu toggle button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            className="text-studycrest-6 focus:outline-none"
          >
            {!isMobileMenuOpen ? <MenuIcon /> : <CloseIcon />}
          </button>
        </div>

        {/* Call to action button */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="https://chat.whatsapp.com/Ix1HTUsScx8HrcIHkS1zAj"
            target="_blank"
            title="Join WhatsApp Community"
            asButton={true}
          />
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav
          ref={ref}
          className="lg:hidden bg-white border-t mt-[16px] border-studycrest-8"
        >
          <ul className="container mx-auto flex flex-col items-start space-y-4 py-3">
            {navMenu.map((menu) => (
              <li key={menu.id}>
                <Link href={menu.url} title={menu.name} external={true} />
              </li>
            ))}
            <li className="pt-3 px-4 hidden">
              <Link href="/" title="Join the waitlist" asButton={true} />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
