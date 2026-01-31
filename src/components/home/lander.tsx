import Image from "next/image";
import Picture from "@/public/Landing_Pic.webp";
const Lander = () => {
  return (
    //adds landing picture and makes it so that the picture's width is the entire screen
    <div className="flex w-screen justify-center">
      <Image className="w-full" src={Picture} alt="Landing Picture" />
    </div>
  );
};

export default Lander;
