"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

function navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#1E0E62] lg:p-3  p-5 w-full">
      <div className="xl:w-[90%] mx-auto flex items-center justify-between">
        <Image
          src="/logo.svg"
          alt="logo"
          width={79}
          height={58}
          className="lg:w-[79px] lg:h-[58px] w-[60px] h-[40px]"
        />
        <div className="hidden md:block">
          <a className="text-white font-bold underline underline-offset-2 decoration-[1px] cursor-pointer">
            Home
          </a>
        </div>
        <div className="block md:hidden transition-all">
          <button
            className="transition duration-300 ease-in-out text-white cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          >
            <FaBars className="w-8 h-8" />
          </button>
        </div>
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col justify-between items-center p-6">
            <div className="flex justify-between items-center w-full">
              <Image
                src="/assets/KaiImage.png"
                alt="logo"
                width={53}
                height={53}
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-black text-3xl"
              >
                <Image
                  className="cursor-pointer"
                  src="/assets/x.png"
                  alt="close button"
                  width={23}
                  height={23}
                />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1">
              <Image
                src="/assets/top_left.png"
                alt="Top Left"
                width={200}
                height={200}
                className="absolute top-[150px] left-0"
              />
              <h2 className="text-6xl font-bold my-8">Home</h2>
              <Image
                src="/assets/top_right.png"
                alt="Top Right"
                width={200}
                height={200}
                className="absolute top-[150px] right-0"
              />
              <Image
                src="/assets/bottom_left.png"
                alt="Bottom Left"
                width={200}
                height={200}
                className="absolute bottom-[150px] left-0"
              />
              <Image
                src="/assets/bottom_right.png"
                alt="Bottom Right"
                width={200}
                height={200}
                className="absolute bottom-[150px] right-0"
              />
            </div>
            <div className="w-full flex justify-between text-sm text-gray-600 font-dm font-bold">
              <a href="#" className="underline underline-offset-2">
                Privacy Policy
              </a>
              <a href="#" className="underline underline-offset-2">
                Terms and Conditions
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default navbar;
