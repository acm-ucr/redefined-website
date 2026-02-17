import Image from "next/image";
import Link from "next/link";
import Line from "@/public/Vector 2.webp";

const NotFound = () => {
  return (
    <div className="bg-redefined-olive-50 flex h-screen flex-col items-center justify-center">
      <div className="bg-redefined-cream flex relative h-75 w-150 flex-col items-center justify-center rounded-2xl">
        <p className="text-redefined-rust font-redefined-zilla text-7xl font-bold italic">
          404
        </p>
        <p className="font-redefined-albert text-2xl text-black">
          page not found
        </p>
        <p className="font-redefined-albert pt-12 text-2xl text-black">
          return to
          <Link
            href="http://localhost:3000/"
            className="text-redefined-rust font-redefined-albert ml-1 text-2xl italic underline underline-offset-1"
          >
            home page
          </Link>
        </p>
        <div className="bg-redefined-olive absolute -z-1 h-75 w-150 -translate-x-4 translate-y-4 rounded-2xl"></div>
      </div>
      <Image src={Line} alt="Line" />
      
    </div>
  );
};

export default NotFound;
