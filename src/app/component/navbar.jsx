import React from "react";
import Image from "next/image";
function navbar() {
  return (
    <div className="bg-[#1E0E62] lg:p-3  p-5 w-full  ">
      <div className="xl:w-[1440px] w-[90%] mx-auto flex items-center justify-between">
        <Image src="/logo.svg" alt="logo" width={79} height={58} className="lg:w-[79px] lg:h-[58px] w-[60px] h-[40px]"/>
        <button className="bg-[#E8397D] text-center rounded-full lg:w-[124px] w-[100px] text-white text-sm lg:text-[16px] h-[40px] lg:h-[53px]">Join Waitlist</button>
      </div>
    </div>
  );
}

export default navbar;
