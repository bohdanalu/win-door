"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface NavItemProps {
  href: string;
  src?: string;
  alt?: string;
  text: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, src, alt, text, onClick }) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${pathName === href ? "text-light/100" : ""}
    flex max-lg:py-4 lg:space-x-2 hover:opacity-75 transition-opacity`}
    >
      {src && <Image src={src} alt={alt || ""} width={25} height={30} />}
      <span>{text}</span>
    </Link>
  );
};

export default NavItem;
