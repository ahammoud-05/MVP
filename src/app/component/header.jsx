import React from "react";
import Image from "next/image";
function Header() {
  return (
    <div className="lg:bg-[url('/assets/head.png')]  bg-[url('/assets/mobileheader.svg')]  flex flex-col justify-center  items-center  bg-no-repeat bg-cover bg-center h-[calc(100vh-6vh)]">
      <div className="lg:w-[600px] w-[70%]  space-y-10 text-center">
        <h1 className="lg:text-[72px] text-[35px] text-white leading-none font-bold">
          Meet Your AI Campanion
        </h1>
        <p className="text-white text-[17px] lg:text-[20px]">
          Have fun, learn anything, and build an elevating bond with your own
          personality-packed MVP!
        </p>
        <div className="gap-5 flex flex-col lg:flex-row items-center">
          <input
            type="text"
            placeholder="Your Email"
            className="bg-[#DFDFDF] opacity-80 outline-none text-[16px] w-[250px] lg:w-[364px]  h-[55px] lg:h-[63px] rounded-full pl-5 text-black"
          />
          <button className="lg:w-[217px] w-[180px] h-[60px] lg:h-[70px] border-b-10 border-t-4 border-x-6 bg-white  rounded-full text-center text-sm lg:text-[16px]  border-black ">
            Unlock Early Access
          </button>
        </div>
        <div className="gap-5 flex justify-center items-center">
          <Image src="/assets/apple.svg" alt="logo" width={219} height={70} className="lg:w-[219px] lg:h-[70px] w-[130px] h-[40px]"/>
          <Image
            src="/assets/google.svg"
            alt="logo"
            width={219}
            height={72}
className="lg:w-[219px] lg:h-[70px] w-[130px] h-[40px]"          />
        </div>
      </div>
    </div>
  );
}

export default Header;
