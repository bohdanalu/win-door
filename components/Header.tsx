import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-primary text-light absolute w-screen">
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="hover:opacity-75 transition-opacity">
          <Image src="/logo.png" alt="Logo Viknaroff" width={200} height={73} />
        </Link>
        <nav className="max-lg:translate-y-full max-lg:hidden mx-auto flex text-xl  space-x-4 md:space-x-16">
          <Link
            href="/window"
            className="flex space-x-2 hover:opacity-75 transition-opacity"
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
            className="flex space-x-2 hover:opacity-75 transition-opacity"
          >
            <Image
              src="./icons/door.svg"
              alt="icon door"
              width={25}
              height={30}
            />
            <span>Двері</span>
          </Link>
          <Link href="/" className="pl-8 hover:opacity-75 transition-opacity">
            Контакти
          </Link>
        </nav>
        <button
          type="button"
          className="relative lg:hidden inline-flex items-center justify-center rounded-md p-2 text-light border-light border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>

          <svg
            className="block h-6 w-6"
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

          <svg
            className="hidden h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
