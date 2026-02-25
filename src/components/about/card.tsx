import Image from "next/image";
import Photo from "@/public/image_2026-02-24_103203242.webp";
import Ambulance from "@/public/image_2026-02-24_124741981.webp";

const About = () => {
  return (
    <div className="bg-redefined-taupe relative -z-2 flex h-150 w-356 items-center justify-center">
      <p className="text-redefined-cream font-redefined-chivo absolute translate-x-63 -translate-y-55 text-6xl font-bold tracking-wide italic">
        GET TO KNOW US
      </p>
      <div className="bg-redefined-rust flex h-110 w-275 items-center rounded-4xl">
        <p className="text-redefined-cream mr-3 ml-2 w-115 text-center text-xl">
          redefineD at UCR is a club that stems from the redefineD nonprofit
          organization. At our club, we aim to help students learn about the
          topic of street medicine and providing healthcare services to
          underserved populations. Our club started in the Fall Quarter of 2025.
          redefineD at UCR values service, compassion, and empowerment. Through
          our club, you will gain valuable experience, obtain new knowledge, and
          be able to build a strong network of peers.
        </p>
        <div className="relative h-80 w-140 rounded-4xl">
          <Image
            src={Photo}
            alt="Photo"
            className="relative z-2 object-contain"
          ></Image>
          <div className="bg-redefined-olive absolute h-80 w-140 translate-x-4 -translate-y-77 rounded-4xl"></div>
        </div>
        <div className="bg-redefined-olive absolute -z-2 h-110 w-275 translate-x-4 translate-y-4 rounded-2xl"></div>
      </div>
      <Image
        src={Ambulance}
        alt="Ambulance"
        className="absolute h-40 w-90 -translate-x-125 translate-y-50 object-scale-down"
      ></Image>
    </div>
  );
};

export default About;
