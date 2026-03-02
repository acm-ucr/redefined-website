import Image from "next/image";
import Line from "@/public/Vector 3.svg";

const GalleryHeader = () => {
  return (
    <div className="-mb-10 ml-30 flex w-full grid-cols-[auto_1fr] items-center">
      {/* Left: Text */}
      <div className=" mt-15 font-redefined-zilla font-[600] text-[150px] italic text-[#5D5947] tracking-[5%]">GALLERY</div>
      {/* Right: Line */}

      <Image
        src={Line}
        alt="line design"
        className="mb-20 mt-10  h-7/10 w-screen"
      />
    </div>
  );
};

export default GalleryHeader;
