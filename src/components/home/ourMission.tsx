import Image from "next/image";
import heartLogo from "@/public/redefineD_heart.webp"

interface MissionComponentProps {
  children: string;
}

const OurMissionComponent = ({ children }: MissionComponentProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-12">
      <div className="bg-redefined-cream text-redefined-rust font-redefined-chivo w-[95%] rounded-[50px] p-8 text-center text-[64px] leading-[60px] font-medium tracking-[0.12em] italic drop-shadow-[0px_17px_0px_#5d5947]">
        OUR MISSION
      </div>
      <div className="bg-redefined-cream flex w-[74%] items-start gap-2 rounded-[50px] py-5 pr-13 pl-10 drop-shadow-[-20px_20px_0px_#5d5947]">
        <Image
          alt="Picture of heart"
          src={heartLogo}
        ></Image>
        <div className="font-redefined-albert text-center align-middle text-2xl leading-[34px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default OurMissionComponent;
