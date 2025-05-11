import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <>
    <div className="lg:w-[70%] w-[75%] mx-auto mt-20 lg:mb-20 mb-0 xl:flex items-center justify-between ">
      <div className="lg:text-start text-center">
        <h1 className="lg:text-[52px] text-[26px] text-[#9801FF] leading-none font-bold">
          Unlock Early Access{" "}
        </h1>
        <p className="text-black mt-5 text-[15px] lg:text-[20px]">
          Be the first to experience the future of AI and human companionship.
        </p>
        <div className="gap-5 my-7 flex flex-col lg:flex-row items-center">
          <input
            type="text"
            placeholder="Your Email"
            className="bg-white outline-none border-black border text-[16px] w-[250px] lg:w-[364px]  h-[45px] lg:h-[63px] rounded-full pl-5 text-black"
          />
          <button className="lg:w-[170px] text-white w-[160px] h-[60px] lg:h-[70px] border-b-10 border-t-4 border-x-6 bg-[#F3ABC7]  rounded-full text-center text-lg lg:text-[22px]  border-black ">
            Sign up
          </button>
        </div>
        <div className="gap-12 flex lg:justify-start justify-center items-center">
          <Image
            src="/assets/apple.svg"
            alt="logo"
            width={219}
            height={70}
            className="lg:w-[274px] lg:h-[88px] w-[108px] h-[31px]"
          />
          <Image
            src="/assets/google.svg"
            alt="logo"
            width={219}
            height={72}
            className="lg:w-[274px] lg:h-[88px] w-[108px] h-[31px]"
          />
        </div>
      </div>
      <div className="flex lg:mt-0 mt-5 lg:justify-end justify-center">
        <Image
          src="/assets/cartoon.svg"
          alt="logo"
          width={326}
          height={106}
        />
      </div>
    </div>
    <div className="lg:hidden block w-[70%] mx-auto my-10 flex justify-between items-center">
       <Image
          src="/assets/icon.svg"
          alt="logo"
          width={25}
          height={28}
        /> <Image
          src="/assets/insta.svg"
          alt="logo"
          width={25}
          height={28}
        /> <Image
          src="/assets/linkedin.svg"
          alt="logo"
          width={25}
          height={28}
        /> <Image
          src="/assets/discord.svg"
          alt="logo"
          width={25}
          height={28}
        />
    </div>
    </>
  );
}

export default Footer;
