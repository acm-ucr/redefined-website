import Image from "next/image";
import Picture from "@/public/Landing_Pic.png";
import Picture_Text from "@/public/Landing_pic_text.svg";
const Lander = () => {
  return (
    //adds landing picture and makes it so that the picture's width is the entire screen
    <div>
      <div className="flex w-screen justify-center">
        {/* split svg text and landing banner picture */}
        <Image
          className="absolute mt-[200px] flex w-1/3 items-center justify-center"
          src={Picture_Text}
          alt="Landing Picture"
        />
        {/* Landing banner image */}
        <Image
          className="flex w-full justify-center"
          src={Picture}
          alt="Landing Picture"
        />
      </div>
    </div>
  );
};

export default Lander;
