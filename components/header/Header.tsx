"use client";
import { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import MobileMenuButton from "./MobileMenuButton";

interface NavLink {
  href: string;
  src?: string;
  alt?: string;
  text: string;
}

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigationLinks: NavLink[] = [
    {
      href: "/window",
      src: "./icons/window.svg",
      alt: "Вікно",
      text: "Вікна",
    },
    {
      href: "/door",
      src: "./icons/door.svg",
      alt: "Двері",
      text: "Двері",
    },
    { href: "/", text: "Контакти" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-primary  text-light fixed w-screen">
      <div className="container flex max-lg:justify-between items-center">
        <nav className="w-full flex lg:justify-center py-4">
          <Logo />
          <ul
            className={`${
              isMobileMenuOpen
                ? "max-lg:translate-none"
                : "max-lg:translate-y-full"
            } transition-transform max-lg:fixed inset-0  max-lg:bg-light/500 max-lg:pt-36
         mx-auto flex max-lg:flex-col items-center text-2xl lg:text-xl  lg:space-x-16`}
          >
            {navigationLinks.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                src={link.src}
                alt={link.alt || ""}
                text={link.text}
                onClick={() => {
                  toggleMobileMenu();
                }}
              />
            ))}
          </ul>
        </nav>
        <MobileMenuButton
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </header>
  );
};

export default Header;
