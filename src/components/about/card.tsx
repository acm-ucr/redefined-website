import Image from "next/image";
import Photo from "@/public/Photograph.webp";
import Ambulance from "@/public/Ambulance.svg";

const About = () => {
  return (
    <div className="bg-redefined-taupe flex justify-center p-20">
      <div className="bg-redefined-rust relative flex h-fit w-[95vw] flex-col rounded-4xl p-8 shadow-[15px_10px_0px_#5d5947]">
        <p className="text-redefined-cream font-redefined-chivo relative -top-10 -m-8 flex justify-end text-7xl font-bold italic">
          GET TO KNOW US
        </p>
        <div className="grid grid-cols-2">
          <p className="text-redefined-cream shrink pr-2 text-center text-xl">
            redefineD at UCR is a club that stems from the redefineD nonprofit
            organization. At our club, we aim to help students learn about the
            topic of street medicine and providing healthcare services to
            underserved populations. Our club started in the Fall Quarter of
            2025. redefineD at UCR values service, compassion, and empowerment.
            Through our club, you will gain valuable experience, obtain new
            knowledge, and be able to build a strong network of peers.
          </p>
          <Image
            src={Photo}
            alt="Photo"
            className="relative z-2 h-full w-fit object-contain drop-shadow-[15px_10px_0px_#5d5947]"
          ></Image>
        </div>
        <Image
          src={Ambulance}
          alt="Ambulance"
          className="absolute -bottom-20 left-4 z-20 w-36"
        ></Image>
      </div>
    </div>
  );
};

export default About;
