import Image from "next/image";
import crossLogo from "@/public/redefineD_cross.svg";

const ForOurMembersComponent = () => {
  return (
    <div className="bg-redefined-taupe">
      <div className="bg-redefined-rust mx-auto w-11/12 rounded-3xl drop-shadow-[-9px_13px_0px_#5d5947] md:shadow-[0px_18px_0px_#A39E8A] md:drop-shadow-none">
        <p className="bg-redefined-cream w-fill font-redefined-chivo text-redefined-rust mx-2 flex h-20 -translate-y-10 items-center justify-center rounded-full px-14 text-4xl font-bold tracking-widest italic sm:shadow-[0px_7px_0px_#5d5947] md:shadow-[0px_10px_0px_#5d5947]">
          FOR OUR MEMBERS
        </p>

        <div className="grid grid-cols-1 gap-8 px-10 pb-10 sm:px-8 sm:pb-8 md:grid-cols-3 md:gap-6">
          <div className="bg-redefined-cream relative rounded-3xl p-6 drop-shadow-[-8px_10px_0px_#5d5947]">
            <div className="mb-4 flex items-center gap-3 sm:h-8 sm:w-8 md:h-20 md:w-20">
              <Image src={crossLogo} alt="Cross Logo"></Image>
              <p className="bg-redefined-cream text-redefined-rust font-redefined-zilla font-bold sm:text-3xl sm:whitespace-nowrap md:text-2xl">
                General Meetings
              </p>
            </div>
            <p className="font-redefined-albert text-center text-black sm:text-xl md:text-sm">
              These meetings aim to spread awareness and education about street
              medicine and healthcare for marginalized communities.
            </p>
          </div>

          <div className="bg-redefined-cream relative rounded-3xl p-6 drop-shadow-[-8px_10px_0px_#5d5947]">
            <div className="mb-4 flex items-center gap-3 sm:h-8 sm:w-8 md:h-20 md:w-20">
              <Image src={crossLogo} alt="Cross Logo"></Image>
              <p className="bg-redefined-cream text-redefined-rust font-redefined-zilla font-bold sm:text-3xl md:text-2xl">
                Workshops
              </p>
            </div>
            <p className="font-redefined-albert text-center text-black sm:text-xl md:text-sm">
              We will provide various activities to help students actively learn
              and participate in skills that would make them successful in
              street medicine.
            </p>
          </div>

          <div className="bg-redefined-cream relative rounded-3xl p-6 drop-shadow-[-8px_10px_0px_#5d5947]">
            <div className="mb-4 flex items-center gap-3 sm:h-8 sm:w-8 md:h-20 md:w-20">
              <Image src={crossLogo} alt="Cross Logo"></Image>
              <p className="bg-redefined-cream text-redefined-rust font-redefined-zilla font-bold sm:text-3xl md:text-2xl">
                Clinics
              </p>
            </div>
            <p className="font-redefined-albert text-center text-black sm:text-xl md:text-sm">
              With the nonprofit organization redefineD, we give the opportunity
              for students to volunteer at our free clinic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForOurMembersComponent;
