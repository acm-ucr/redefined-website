import Image from "next/image";
import Text from "@/public/GALLERY.svg";
import Line from "@/public/Vector 3.png";

const GalleryHeader = () => {
  return (
    <div className="ml-30 grid w-full grid-cols-[auto_1fr] items-center">
      {/* Left: Text */}
      <Image src={Text} alt="Gallery" className="" />

      {/* Right: Line */}

      <Image src={Line} alt="line design" className="h-2/3 w-full pl-50" />
    </div>
  );
};

export default GalleryHeader;
