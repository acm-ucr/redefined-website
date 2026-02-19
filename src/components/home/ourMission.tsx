import Image from "next/image";
import heartLogo from "@/public/redefineD_heart.svg";
import JoinUs from "@/components/home/joinUs";

const OurMissionComponent = () => {
  return (
    <div className="bg-redefined-taupe flex w-full flex-col items-center gap-12 pt-10">
      <p className="bg-redefined-cream text-redefined-rust font-redefined-chivo w-11/12 rounded-4xl p-8 text-center text-6xl leading-12 font-medium tracking-widest italic drop-shadow-[0px_17px_0px_#5d5947]">
        OUR MISSION
      </p>
      <div className="bg-redefined-cream flex w-3/4 items-start gap-2 rounded-3xl py-5 pr-13 pl-10 drop-shadow-[-20px_20px_0px_#5d5947]">
        <Image alt="Picture of heart" src={heartLogo}></Image>
        <p className="font-redefined-albert text-center align-middle text-2xl leading-9">
          Our club is dedicated to educating students about street medicine and
          the needs of underserved communities. By working closely with our
          parent organization, we provide members not only with knowledge but
          also with hands-on fieldwork opportunities. Through service, learning,
          and real-world experience, we aim to help marginalized populations
          redefine their lives while inspiring students to grow in purpose and
          create a lasting impact.
        </p>
      </div>
      <div className="p-10">
        <JoinUs />
      </div>
    </div>
  );
};

export default OurMissionComponent;
