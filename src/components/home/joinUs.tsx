import Link from "next/link";
const JoinUs = () => {
  return (
    <Link href="https://discord.com/invite/GrU6QAHJJ" target="_blank">
      <div className="bg-color-redefined-cream flex justify-center">
        <button className="bg-redefined-cream border-redefined-olive h-129px font-redefined-albert mb-11 w-[400px] rounded-[102px] border-[13px] text-[64px] font-[800] text-[#9E4325] italic">
          Join Us!
        </button>
      </div>
    </Link>
  );
};

export default JoinUs;
