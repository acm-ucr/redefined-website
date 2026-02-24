import Image from "next/image";
import Text from "@/public/GALLERY.svg";
import Line from "@/public/Vector 3.svg";

const GalleryHeader = () => {
  return (
    <div className="-mb-30 ml-30 grid w-full grid-cols-[auto_1fr] items-center">
      {/* Left: Text */}
      <Image src={Text} alt="Gallery" />

      {/* Right: Line */}

      <Image
        src={Line}
        alt="line design"
        className="mb-25 -ml-30 h-7/10 w-screen"
      />
    </div>
  );
};

export default GalleryHeader;
