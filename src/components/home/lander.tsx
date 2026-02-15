import Image from "next/image";
import Picture from "@/public/Landing_Pic.webp";
import Picture_Text from "@/public/Landing_pic_text.svg";
const Lander = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 place-items-center">
      <Image
        className="z-0 col-start-1 row-start-1 grid w-full"
        src={Picture}
        alt="Landing Picture"
      />
      <Image
        className="z-10 col-start-1 row-start-1"
        src={Picture_Text}
        alt="Landing Picture"
      />
    </div>
  );
};

export default Lander;
