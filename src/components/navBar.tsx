"use client";
import { navigationItems } from "@/data/navigation";
import Logo from "@/public/redefineD_logo.webp";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-redefined-olive flex items-center justify-between px-8 py-5">
      <Link
        href="/"
        className="flex h-10 w-50 items-center transition-transform duration-150 ease-out hover:scale-105"
      >
        <Image src={Logo} alt="Logo" />
      </Link>

      <div className="flex gap-10">
        {navigationItems.map((item) => {
          const isActive = pathname === item.link;

          return (
            <Link
              key={item.link}
              href={item.link}
              className={`font-redefined-alfa text-xl transition-transform duration-150 ease-out hover:scale-105 ${
                isActive
                  ? "text-redefined-rust"
                  : "text-redefined-cream hover:text-redefined-taupe"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
