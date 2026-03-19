"use client";
import Link from "next/link";
import { footerLinks } from "@/data/footerLinks";
import Logo from "@/public/redefineD_logo.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-redefined-olive flex w-full py-4">
      <div className="flex w-full items-center justify-between p-6 px-6 md:px-12">
        <Link href="/" className="z-50 flex h-10 w-50 items-center">
          <Image src={Logo} alt="Logo" className="w-48" />
        </Link>
        <div aria-label="Footer links" className="flex gap-4">
          {footerLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
                className="font flex items-center gap-2 transition-transform duration-200 hover:scale-105"
              >
                <Icon className="text-redefined-cream h-10 w-10" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
