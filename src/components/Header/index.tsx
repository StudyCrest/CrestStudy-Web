"use client";

import Image from "next/image";
import Link from "@components/Link";
import { navMenu } from "@data/navmenu";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-studycrest-8 py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
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
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Call to action button */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/" title="Join the waitlist" asButton={true} />
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white border-t mt-5 border-studycrest-8 pb-5">
          <ul className="container mx-auto flex flex-col items-start space-y-4 py-5">
            {navMenu.map((menu) => (
              <li key={menu.id}>
                <Link href={menu.url} title={menu.name} />
              </li>
            ))}
            <li className="pt-3 px-4">
              <Link href="/" title="Join the waitlist" asButton={true} />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
