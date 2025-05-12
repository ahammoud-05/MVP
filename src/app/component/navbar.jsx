"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function navbar() {
  return (
    <div className="bg-[#1E0E62] lg:p-3  p-5 w-full  ">
      <div className="xl:w-[90%] mx-auto flex items-center justify-between">
        <Image src="/logo.svg" alt="logo" width={79} height={58} className="lg:w-[79px] lg:h-[58px] w-[60px] h-[40px]"/>
        <motion.button whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}className="bg-[#E8397D] text-center cursor-pointer rounded-full lg:w-[124px] w-[100px] text-white text-sm lg:text-[16px] h-[40px] lg:h-[50px]">Join Waitlist</motion.button>
      </div>
    </div>
  );
}

export default navbar;
