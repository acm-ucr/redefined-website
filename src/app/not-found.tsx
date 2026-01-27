import Image from "next/image";
import Link from "next/link";
import Line from "@/public/Vector 2.webp"

const NotFound = () => {
  return <div className = "flex flex-col items-center justify-center h-screen bg-redefined-olive-50">
      <div className = "flex flex-col justify-center items-center w-150 h-75 bg-redefined-cream rounded-2xl">
        <div className = "font-bold italic text-redefined-rust text-7xl font-redefined-zilla">
          404
        </div>
        <div className = "text-black text-2xl font-redefined-albert">
          page not found
        </div>
        <div className = "text-black text-2xl pt-12 font-redefined-albert ">
          return to
          <Link href="http://localhost:3000/" className = "ml-1 text-redefined-rust text-2xl underline underline-offset-1 italic font-redefined-albert">
            home page
          </Link>
        </div>
        <div className = "absolute bg-redefined-olive w-150 h-75 -z-1 -translate-x-4 translate-y-4 rounded-2xl">
        </div>
      </div>
      <Image src = {Line} alt = "Line"/>
  </div>;
};

export default NotFound;
