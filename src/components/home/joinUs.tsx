import Link from "next/link";
const JoinUs = () => {
  return (
    <Link href="https://discord.com/invite/GrU6QAHJJ" target="_blank">
      <div className="bg-color-redefined-cream flex justify-center">
        {/*giving button functionality to join button */}

        <button className="bg-redefined-cream border-redefined-olive h-129px font-redefined-albert w-1/4 rounded-[102px] border-[13px] text-[64px] font-[800] text-[#9E4325] italic">
          Join us
        </button>
      </div>
    </Link>
  );
};

export default JoinUs;
