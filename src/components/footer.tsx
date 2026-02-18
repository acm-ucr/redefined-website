"use client";
import Link from "next/link";
import { footerLinks } from "@/data/footerLinks";
import Logo from "@/public/redefineD_logo.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-redefined-olive flex w-full py-4">
      <div className="flex w-full items-center justify-between px-12">
        <Image src={Logo} alt="redefineD Logo" className="w-48" />
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
                className="flex items-center gap-2"
              >
                <Icon className="text-redefined-cream h-8 w-8" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
