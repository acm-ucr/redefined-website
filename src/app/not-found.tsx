import Image from "next/image";
import Link from "next/link";
import Line from "@/public/Vector 2.webp";

const NotFound = () => {
  return (
    <div className="bg-redefined-olive-50 flex h-screen flex-col items-center justify-center">
      <div className="bg-redefined-cream flex h-75 w-150 flex-col items-center justify-center rounded-2xl">
        <div className="text-redefined-rust font-redefined-zilla text-9xl font-bold italic">
          404
        </div>
        <div className="font-redefined-albert text-2xl text-black">
          page not found
        </div>
        <div className="font-redefined-albert pt-12 text-2xl text-black">
          return to
          <Link
            href="/"
            className="text-redefined-rust font-redefined-albert ml-1 text-2xl italic underline underline-offset-1"
          >
            home page
          </Link>
        </div>
        <div className="bg-redefined-olive absolute -z-1 h-75 w-150 -translate-x-4 translate-y-4 rounded-2xl"></div>
      </div>
      <Image src={Line} alt="Line" className="w-screen" />
    </div>
  );
};

export default NotFound;
