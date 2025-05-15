"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { EmailTemplate } from "../../utils/emailTemplate";
import { motion } from "framer-motion";

// Schema
const contactFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const defaultValues = {
  email: "",
};

function Header() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  const onSubmit = async (data) => {
    const loadingToastId = toast.loading("Sending message...");
    setIsLoading(true);

    try {
      const formPayload = new FormData();
      formPayload.append("email", data.email);
      formPayload.append("subject", "New query from Osceola Towing");
      formPayload.append("html", EmailTemplate({ values: data }));

      const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "/api/test";

      const response = await fetch(apiUrl, {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) throw new Error("Failed to submit form");

      toast.success("Message sent successfully!", { id: loadingToastId });
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again later.", {
        id: loadingToastId,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="lg:bg-[url('/assets/head.png')] bg-[url('/assets/mobileheader.svg')] flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center h-[calc(100vh-6vh)]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="lg:w-[600px] w-[70%] space-y-10 text-center"
      >
        <h1 className="lg:text-[65px] text-[35px] text-white leading-none font-bold">
          Meet Your AI Companion
        </h1>
        <p className="text-white text-[17px] lg:text-[18px]">
          Have fun, learn anything, and build an elevating bond with your own
          personality-packed MVP!
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="gap-5 flex flex-col lg:flex-row items-center"
        >
          <div className="flex flex-col">
            <input
              {...register("email")}
              type="email"
              placeholder="Your Email"
              className="bg-[#DFDFDF] opacity-80 text-[16px] w-[250px] lg:w-[364px] h-[55px] lg:h-[63px] rounded-full pl-5 text-black"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            type="submit"
            className="lg:w-[217px] cursor-pointer w-[180px] h-[60px] lg:h-[70px] border-b-10 border-t-4 border-x-6 bg-white rounded-full text-center text-sm lg:text-[16px] border-black"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Unlock Early Access"}
          </motion.button>
        </form>

        <div className="gap-5 flex justify-center items-center mt-4">
          <Image
            src="/assets/apple.svg"
            alt="Download on Apple Store"
            width={219}
            height={70}
            className="lg:w-[200px] lg:h-[70px] w-[130px] h-[40px]"
          />
          <Image
            src="/assets/google.svg"
            alt="Get it on Google Play"
            width={219}
            height={72}
            className="lg:w-[200px] lg:h-[70px] w-[130px] h-[40px]"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
