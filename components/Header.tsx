"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="bg-primary relative text-light absolute w-screen">
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="hover:opacity-75 transition-opacity z-10">
          <Image src="/logo.png" alt="Logo Viknaroff" width={200} height={73} />
        </Link>
        <nav
          className={`${
            isMobileMenuOpen ? "translate-none" : "translate-y-full"
          } transition-transform  max-lg:fixed inset-0  max-lg:bg-light/500 max-lg:pt-36
         mx-auto flex max-lg:flex-col items-center text-2xl lg:text-xl  lg:space-x-16`}
        >
          <Link
            href="/window"
            className="flex max-lg:py-4 lg:space-x-2 hover:opacity-75 transition-opacity"
          >
            <Image
              src="./icons/window.svg"
              alt="icon door"
              width={25}
              height={30}
            />
            <span>Вікна</span>
          </Link>
          <Link
            href="/door"
            className="flex max-lg:py-4 lg:space-x-2 hover:opacity-75 transition-opacity"
          >
            <Image
              src="./icons/door.svg"
              alt="icon door"
              width={25}
              height={30}
            />
            <span>Двері</span>
          </Link>
          <Link
            href="/"
            className="lg:pl-8 max-lg:py-4 hover:opacity-75 transition-opacity"
          >
            Контакти
          </Link>
        </nav>
        <button
          type="button"
          className="relative lg:hidden inline-flex items-center justify-center rounded-md p-2 text-light border-light border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          {isMobileMenuOpen === false ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
