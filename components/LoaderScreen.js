import React from "react";
import { motion } from "framer-motion";

const LoaderScreen = () => {
  return (
    <motion.section initial={{ y: 0, opacity: 1 }} animate={{ y: -1000, transition: { duration: 1, delay: 2.9 } }} className="fixed bg-gray-100 z-[2000] w-full h-full  ">
      <div className=" w-full h-full flex flex-col justify-center items-center  text-3xl font-bold leading-[0px] text-gray-500">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 }, transitionEnd: { display: "none" } }} className=" font-poppins">
          Halo
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.8 }, transitionEnd: { display: "none" } }} className=" font-poppins">
          Hello
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.1 }, transitionEnd: { display: "none" } }} className=" font-poppins">
          Merhaba
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.4 }, transitionEnd: { display: "none" } }} className=" font-poppins">
          안녕하세요
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.7 }, transitionEnd: { display: "none" } }} className=" font-poppins">
          مرحبًا
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.0 }, transitionEnd: { display: "none" } }} className=" font-poppins">
          Xin chào
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.3 }, transitionEnd: { display: "none" } }} className=" font-poppins">
          Salam
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.6 }, transitionEnd: { display: "none" } }} className=" font-poppins">
          Allinllachu
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.9 } }} className=" font-poppins">
          こんにちは
        </motion.span>
      </div>
    </motion.section>
  );
};

export default LoaderScreen;
