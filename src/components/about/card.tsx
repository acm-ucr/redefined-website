import Image from "next/image";
import Photo from "@/public/Photograph.webp";
import Ambulance from "@/public/Ambulance.webp";
import { RiDivideFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="bg-redefined-rust relative m-25 flex h-[58vh] w-[77vw] flex-col rounded-4xl p-8 shadow-[15px_10px_0px_#5d5947]">
      <p className="text-redefined-cream font-redefined-chivo relative flex -translate-y-15 justify-end text-6xl font-bold italic">
        GET TO KNOW US
      </p>
      <div className="grid grid-cols-2">
        <p className="text-redefined-cream w-fit shrink pr-2 text-center text-xl">
          redefineD at UCR is a club that stems from the redefineD nonprofit
          organization. At our club, we aim to help students learn about the
          topic of street medicine and providing healthcare services to
          underserved populations. Our club started in the Fall Quarter of 2025.
          redefineD at UCR values service, compassion, and empowerment. Through
          our club, you will gain valuable experience, obtain new knowledge, and
          be able to build a strong network of peers.
        </p>
        <div className="relative h-80 w-fit rounded-4xl">
          <Image
            src={Photo}
            alt="Photo"
            className="relative z-2 object-contain drop-shadow-[15px_10px_0px_#5d5947]"
          ></Image>
        </div>
      </div>
      <Image
        src={Ambulance}
        alt="Ambulance"
        className="relative h-40 w-100 -translate-x-8 -translate-y-8 object-contain"
      ></Image>
    </div>
  );
};

export default About;
