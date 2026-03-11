import Image from "next/image";
import Line from "@/public/pulse.svg";

const GalleryHeader = () => {
  return (
    <div className="-mb-1 flex w-full items-center overflow-hidden pl-30">
      {/*Text and tailwind styling for header text*/}
      <div className="font-redefined-zilla text-redefined-olive mt-15 text-9xl font-semibold tracking-wide italic">
        GALLERY
      </div>
      {/* Pulse line for header and positional styling*/}
      <Image
        src={Line}
        alt="line design"
        className="mt-10 mb-2 h-7/10 w-screen"
      />
    </div>
  );
};

export default GalleryHeader;
