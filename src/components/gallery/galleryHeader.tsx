import Image from "next/image";
import Line from "@/public/pulse.svg";

const GalleryHeader = () => {
  return (
    <div className="-mb-1 pl-30 flex w-full overflow-hidden items-center">
      {/*Text and tailwind styling for header text*/}
      <div className="font-redefined-zilla mt-15 text-9xl font-semibold tracking-wide text-redefined-olive italic">
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
