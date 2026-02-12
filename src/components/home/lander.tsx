import Image from "next/image";
import Picture from "@/public/Landing_Pic.png";
import Picture_Text from "@/public/Landing_pic_text.svg";
const Lander = () => {
  return (
    //adds landing picture and makes it so that the picture's width is the entire screen

    <div className="grid grid-cols-1 grid-rows-1">
      {/* split svg text and landing banner picture */}

      {/* Landing banner image */}
      <Image
        className="z-0 col-start-1 row-start-1 grid w-full"
        src={Picture}
        alt="Landing Picture"
      />
      <Image
        className="z-10 col-span-20 col-start-1 row-start-1 self-center justify-self-center"
        src={Picture_Text}
        alt="Landing Picture"
      />
    </div>
  );
};

export default Lander;
