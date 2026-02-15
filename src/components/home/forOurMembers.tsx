import Image from "next/image";
import crossLogo from "@/public/redefineD_cross.svg";

const ForOurMembersComponent = () => {
  return (
    <div className="bg-redefined-taupe">
      <div className="bg-redefined-rust mx-auto w-11/12 rounded-3xl shadow-[0px_18px_0px_#A39E8A]">
        <p className="bg-redefined-cream w-fill font-redefined-chivo text-redefined-rust mx-2 flex h-20 -translate-y-10 items-center justify-center rounded-full px-14 text-4xl font-bold tracking-widest italic shadow-[0px_10px_0px_#5d5947]">
          FOR OUR MEMBERS
        </p>

        <div className="grid grid-cols-1 gap-6 px-10 pb-10 md:grid-cols-3">
          <div className="bg-redefined-cream relative rounded-3xl p-6 drop-shadow-[-8px_10px_0px_#5d5947]">
            <div className="mb-4 flex items-center gap-3">
              <Image src={crossLogo} alt="Cross Logo"></Image>
              <p className="bg-redefined-cream text-redefined-rust font-redefined-zilla text-2xl font-bold">
                General Meetings
              </p>
            </div>
            <p className="font-redefined-albert text-center text-sm text-black">
              These meetings aim to spread awareness and education about street
              medicine and healthcare for marginalized communities.
            </p>
          </div>

          <div className="bg-redefined-cream relative rounded-3xl p-6 drop-shadow-[-8px_10px_0px_#5d5947]">
            <div className="mb-4 flex items-center gap-3">
              <Image src={crossLogo} alt="Cross Logo"></Image>
              <p className="bg-redefined-cream text-redefined-rust font-redefined-zilla text-2xl font-bold">
                Workshops
              </p>
            </div>
            <p className="font-redefined-albert text-center text-sm text-black">
              We will provide various activities to help students actively learn
              and participate in skills that would make them successful in
              street medicine.
            </p>
          </div>

          <div className="bg-redefined-cream relative rounded-3xl p-6 drop-shadow-[-8px_10px_0px_#5d5947]">
            <div className="mb-4 flex items-center gap-3">
              <Image src={crossLogo} alt="Cross Logo"></Image>
              <p className="bg-redefined-cream text-redefined-rust font-redefined-zilla text-2xl font-bold">
                Clinics
              </p>
            </div>
            <p className="font-redefined-albert text-center text-sm text-black">
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
