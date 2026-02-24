"use client";
import { useState } from "react";
import Logo from "@/public/redefineD_logo.webp";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const desktopLinkStyle =
    "font-redefined-alfa text-xl transition-transform hover:scale-105";
  const mobileLinkStyle =
    "font-redefined-alfa text-4xl text-redefined-rust hover:opacity-70";

  return (
    <nav className="bg-redefined-olive relative px-8 py-5">
      <div className="flex items-center justify-between">
        <Link href="/" className="z-50 flex h-10 w-50 items-center">
          <Image src={Logo} alt="Logo" />
        </Link>

        {/* desktop section */}
        <div className="hidden gap-10 md:flex">
          <Link
            href="/about"
            className={`${desktopLinkStyle} ${pathname === "/about" ? "text-redefined-rust" : "text-redefined-cream"}`}
          >
            About
          </Link>
          <Link
            href="/board"
            className={`${desktopLinkStyle} ${pathname === "/board" ? "text-redefined-rust" : "text-redefined-cream"}`}
          >
            Board
          </Link>
          <Link
            href="/events"
            className={`${desktopLinkStyle} ${pathname === "/events" ? "text-redefined-rust" : "text-redefined-cream"}`}
          >
            Events
          </Link>
          <Link
            href="/gallery"
            className={`${desktopLinkStyle} ${pathname === "/gallery" ? "text-redefined-rust" : "text-redefined-cream"}`}
          >
            Gallery
          </Link>
        </div>

        {/* layer z-50 on top md:hidden mobile section */}
        <button
          className="z-50 flex h-8 w-8 items-center justify-center md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="font-redefined-alfa text-redefined-cream text-4xl leading-none">
              X
            </span>
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="bg-redefined-cream h-1 w-8 rounded-full" />
              <span className="bg-redefined-cream h-1 w-8 rounded-full" />
              <span className="bg-redefined-cream h-1 w-8 rounded-full" />
            </div>
          )}
        </button>
      </div>

      {/* close menu on click */}
      {isOpen && (
        <div className="bg-redefined-olive/90 fixed inset-0 z-40 flex flex-col items-center justify-center p-6 backdrop-blur-sm">
          <div className="bg-redefined-cream relative flex w-full max-w-sm flex-col items-center gap-6 rounded-[40px] py-14">
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={mobileLinkStyle}
            >
              About
            </Link>
            <Link
              href="/board"
              onClick={(e) => e.stopPropagation()}
              className={mobileLinkStyle}
            >
              Board
            </Link>
            <Link
              href="/events"
              onClick={() => setIsOpen(false)}
              className={mobileLinkStyle}
            >
              Events
            </Link>
            <Link
              href="/gallery"
              onClick={() => setIsOpen(false)}
              className={mobileLinkStyle}
            >
              Gallery
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
