import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Modal from "./Modal";

export default function Navbar({openModal}) {
 

  return (
    <>
    <div className="w-full h-full flex flex-col sm:flex-row items-center justify-between px-2 sm:px-4 gap-3 sm:gap-0">
    
      <div className="relative">
        <motion.div
          className="absolute bg-[#60A5FA] rounded-lg z-0 mb-[0.5rem] w-[150px] md:h-[35px] h-[28px]  rounded-lg"
          initial={{ x: "-7%" }}
          animate={{ x: "22%" }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.6,
            ease: "easeInOut",
          }}
         
        ></motion.div>

          <button 
            className="relative z-10 bg-blue-600 text-white font-semibold font-sans px-3 sm:px-4 text-sm sm:text-base md:text-[18px] py-1 rounded-lg flex items-center gap-1 sm:gap-2 hover:bg-blue-700 mb-[0.5rem]"
            onClick={openModal}
          >
            Book A Demo
            <span className="text-white">➜</span>
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-1 sm:gap-2">
            <FaPhoneAlt className="text-base sm:text-lg md:text-xl" />
            <span className="font-sans text-xs sm:text-sm md:text-base lg:text-[17px]">+91 80816 38914</span>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <MdOutlineMail className="text-base sm:text-lg md:text-xl lg:text-[22px]" />
            <span className="font-sans text-xs sm:text-sm md:text-base lg:text-[17px]">contactus@a2developers.org</span>
          </div>
        </div>
      </div>

     
    </>
  );
}
