import Image from "next/image";
import Line from "@/public/Vector 3.svg";

const GalleryHeader = () => {
  return (
    <div className="-mb-10 ml-30 flex w-full grid-cols-[auto_1fr] items-center">
      {/* Left: Text */}
      <div className="font-redefined-zilla mt-15 text-[172px] font-[600] tracking-[5%] text-[#5D5947] italic">
        GALLERY
      </div>
      {/* Right: Line */}

      <Image
        src={Line}
        alt="line design"
        className="mt-10 mb-20 h-7/10 w-screen"
      />
    </div>
  );
};

export default GalleryHeader;
