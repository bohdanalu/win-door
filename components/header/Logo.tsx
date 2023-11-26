import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link href="/" className="hover:opacity-75 transition-opacity z-10">
    <Image src="/logo.png" alt="Logo Viknaroff" width={200} height={73} />
  </Link>
);
export default Logo;
