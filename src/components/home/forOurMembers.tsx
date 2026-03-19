"use client";
import Image from "next/image";
import cross from "@/public/home/cross.svg";
import { motion } from "motion/react";

const titleAnimation = {
  initial: { opacity: 0, y: -15 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const cardAnimation = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const ForOurMembersComponent = () => {
  return (
    <div className="bg-redefined-taupe p-14">
      <div className="bg-redefined-rust mx-auto w-11/12 rounded-3xl drop-shadow-[-9px_13px_0px_#5d5947] md:shadow-[0px_18px_0px_#A39E8A] md:drop-shadow-none">
        <motion.p
          {...titleAnimation}
          viewport={{ once: true }}
          className="bg-redefined-cream w-fill font-redefined-chivo text-redefined-rust mx-2 flex h-20 -translate-y-10 items-center justify-center rounded-full px-14 text-center text-2xl font-bold tracking-widest italic sm:text-3xl sm:shadow-[0px_7px_0px_#5d5947] md:text-4xl md:shadow-[0px_10px_0px_#5d5947] lg:p-4 lg:text-6xl"
        >
          FOR OUR MEMBERS
        </motion.p>

        <div className="grid grid-cols-1 gap-8 px-10 pb-10 sm:px-8 sm:pb-8 md:grid-cols-3 md:gap-6">
          <motion.div
            {...cardAnimation}
            viewport={{ once: true }}
            className="bg-redefined-cream relative flex flex-col items-center rounded-3xl p-6 text-center drop-shadow-[-8px_10px_0px_#5d5947]"
          >
            <div className="mb-4 flex w-full flex-row items-center justify-start gap-3 md:w-auto md:flex-col md:justify-center xl:w-full xl:flex-row xl:justify-start">
              <Image src={cross} alt="Cross Logo" />
              <p className="bg-redefined-cream text-redefined-rust font-redefined-zilla text-left text-base font-bold sm:text-lg sm:whitespace-nowrap md:text-center md:text-xl lg:text-2xl xl:text-left">
                General Meetings
              </p>
            </div>
            <p className="font-redefined-albert text-sm text-black sm:text-base md:text-lg lg:text-xl">
              These meetings aim to spread awareness and education about street
              medicine and healthcare for marginalized communities.
            </p>
          </motion.div>

          <motion.div
            {...cardAnimation}
            viewport={{ once: true }}
            className="bg-redefined-cream relative flex flex-col items-center rounded-3xl p-6 text-center drop-shadow-[-8px_10px_0px_#5d5947]"
          >
            <div className="mb-4 flex w-full flex-row items-center justify-start gap-3 md:w-auto md:flex-col md:justify-center xl:w-full xl:flex-row xl:justify-start">
              <Image src={cross} alt="Cross Logo" />
              <p className="bg-redefined-cream text-redefined-rust font-redefined-zilla text-left text-base font-bold sm:text-lg md:text-center md:text-xl lg:text-2xl xl:text-left">
                Workshops
              </p>
            </div>
            <p className="font-redefined-albert text-sm text-black sm:text-base md:text-lg lg:text-xl">
              We will provide various activities to help students actively learn
              and participate in skills that would make them successful in
              street medicine.
            </p>
          </motion.div>

          <motion.div
            {...cardAnimation}
            viewport={{ once: true }}
            className="bg-redefined-cream relative flex flex-col items-center rounded-3xl p-6 text-center drop-shadow-[-8px_10px_0px_#5d5947]"
          >
            <div className="mb-4 flex w-full flex-row items-center justify-start gap-3 md:w-auto md:flex-col md:justify-center xl:w-full xl:flex-row xl:justify-start">
              <Image src={cross} alt="Cross Logo" />
              <p className="bg-redefined-cream text-redefined-rust font-redefined-zilla text-left text-base font-bold sm:text-lg md:text-center md:text-xl lg:text-2xl xl:text-left">
                Clinics
              </p>
            </div>
            <p className="font-redefined-albert text-sm text-black sm:text-base md:text-lg lg:text-xl">
              With the nonprofit organization redefineD, we give the opportunity
              for students to volunteer at our free clinic.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ForOurMembersComponent;
