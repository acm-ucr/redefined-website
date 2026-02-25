import Image from "next/image";
import { Chivo } from "next/font/google";

const chivo = Chivo({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Card() {
  return (
    <div className="relative mx-auto max-w-6xl rounded-3xl bg-[#CFC6B7] p-12 shadow-[10px_10px_0_#B5A893]">
      {/* Floating Title */}
      <h2
        className={`${chivo.className} absolute z-10`}
        style={{
          fontWeight: 500,
          fontStyle: "italic",
          fontSize: "80px",
          lineHeight: "34px",
          letterSpacing: "8%",
          color: "#9E4235",
          top: "-24px",
          left: "32px",
        }}
      >
        WHAT WE DO
      </h2>

      {/* Content */}
      <div className="mt-16 flex flex-col items-start gap-8 md:flex-row">
        {/* Image with left + bottom orange offset */}
        <div className="relative h-48 w-full flex-shrink-0 md:h-60 md:w-96">
          {/* Orange layer behind */}
          <div className="absolute inset-0 translate-x-[-12px] translate-y-[12px] rounded-xl bg-[#A94F2F]" />

          {/* Actual image */}
          <div className="relative h-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/about.png"
              alt="People walking"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Text + Logo */}
        <div className="flex flex-1 flex-col">
          <p className="max-w-full text-base leading-relaxed text-[#3B3B3B] md:max-w-md md:text-lg">
            redefineD at UCR provides general meetings, workshops, and
            volunteering opportunities for students at UCR. The goal for the
            club is to spread awareness and education about street medicine, for
            it is an important area in medicine but unknown to most people.
            Partnering with the redefineD nonprofit organization, we bring great
            resources to help students further their goals in pursuing
            healthcare professions.
          </p>

          {/* Logo aligned bottom right without overlapping */}
          <div className="mt-6 flex justify-end">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
          </div>
        </div>
      </div>
    </div>
  );
}
