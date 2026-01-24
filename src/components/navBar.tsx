"use client";
import { navigationItems } from "@/data/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/redefineD_logo.webp";

const NavBar = () => {
  return (
    <div className="bg-redefined-olive flex items-center justify-between px-8 py-4">
      <div className="flex h-10 w-50 items-center">
        <Image src={Logo} alt="Logo" />
      </div>

      <div className="flex gap-10">
        {navigationItems.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            target="_blank"
            className="text-redefined-cream font-redefined-alfa hover:text-redefined-taupe text-xl"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
