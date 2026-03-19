import Link from "next/link";

const JoinUs = () => {
  return (
    <Link href="https://discord.com/invite/GrU6QAHJJ" target="_blank">
      <div className="bg-color-redefined-cream flex justify-center md:p-10">
        <button className="bg-redefined-cream border-redefined-olive font-redefined-albert text-redefined-rust mb-11 cursor-pointer rounded-full border-10 p-6 text-4xl font-bold transition-transform duration-300 hover:scale-105 md:w-100 md:text-7xl lg:w-100">
          Join Us!
        </button>
      </div>
    </Link>
  );
};

export default JoinUs;
