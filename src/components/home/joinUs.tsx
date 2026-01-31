"use client";

import Image from "next/image";
import Picture from "@/public/join_us.webp";
const JoinUs = () => {
  //things to do when button is clicked--needs to be changed depending on functionality--placeholder functionality currecntly
  const handleClick = () => {
    console.log("Join us clicked");
    window.location.href = "/join";
  };
  //giving picture from figma button functionality
  return (
    <div className="bg-color-redefined-cream flex justify-center">
      {/*giving button functionality to join button */}
      <button onClick={handleClick}>
        <Image src={Picture} alt="Join us Button" />
      </button>
    </div>
  );
};

export default JoinUs;
