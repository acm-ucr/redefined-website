import Image from "next/image";
import crossLogo from "@/public/redefineD_cross.svg";

const ForOurMembersComponent = () => {
  return (
    <section className="bg-redefined-rust rounded-3xl p-10 shadow-[0px_18px_0px_#A39E8A]">
      <div className="bg-redefined-cream mx-auto mb-12 flex h-20 w-full items-center justify-center rounded-full px-14 shadow-[0px_10px_0px_#5d5947]">
        <p className="font-redefined-chivo text-redefined-rust text-4xl font-bold tracking-widest italic">
          FOR OUR MEMBERS
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
            and participate in skills that would make them successful in street
            medicine.
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
            for studnets to volunteer at our free clinic.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForOurMembersComponent;
