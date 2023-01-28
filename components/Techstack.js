import React, { useEffect } from "react";
import TailwindLogo from "../src/Tech Stack/TailwindLogo";
import Nextjs from "../src/Tech Stack/NextJs";
import HtmlLogo from "../src/Tech Stack/HtmlLogo";
import BootstrapLogo from "../src/Tech Stack/BootstrapLogo";
import CssLogo from "../src/Tech Stack/CssLogo";
import JavascriptLogo from "../src/Tech Stack/JavascriptLogo";
import ReactLogo from "../src/Tech Stack/ReactLogo";
import Framermotion from "../src/Tech Stack/Framermotion";
import Typescript from "../src/Tech Stack/Typescript";
import CodeigniterLogo from "../src/Tech Stack/CodeigniterLogo";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function Techstack() {
  // const constraintsRef = useRef(null)
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="px-4 py-12">
        <div className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl px-4">
          <div className="w-full self-center px-4">
            <p className="dark:text-white text-gray-500 font-poppins font-bold text-2xl md:text-left text-center" data-aos="fade-up">
              Tech Stack{" "}
            </p>
            <p className="text-base font-poppins dark:text-white text-gray-700 mt-10" data-aos="fade-up">
              Dibawah ini adalah beberapa tools/teknologi yang pernah saya gunakan untuk membuat website ataupun membuat desain .
            </p>
            <motion.div className="flex gap-6 flex-wrap justify-center mt-20 ">
              <motion.div drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} dragElastic={0.7} className="cursor-grabbing" data-aos="fade-right">
                <HtmlLogo />
              </motion.div>
              <motion.div drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} dragElastic={0.7} className="cursor-grabbing" data-aos="fade-right" data-aos-delay="100">
                <CssLogo />
              </motion.div>
              <motion.div drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} dragElastic={0.7} className="cursor-grabbing" data-aos="fade-right" data-aos-delay="200">
                <JavascriptLogo />
              </motion.div>
              <motion.div drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} dragElastic={0.7} className="cursor-grabbing" data-aos="fade-right" data-aos-delay="300">
                <BootstrapLogo />
              </motion.div>
              <motion.div drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} dragElastic={0.7} className="cursor-grabbing" data-aos="fade-right" data-aos-delay="400">
                <TailwindLogo />
              </motion.div>
              <motion.div drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} dragElastic={0.7} className="cursor-grabbing" data-aos="fade-right" data-aos-delay="500">
                <ReactLogo />
              </motion.div>
              <motion.div drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} dragElastic={0.7} className="cursor-grabbing" data-aos="fade-right" data-aos-delay="600">
                <Nextjs />
              </motion.div>
              <motion.div drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} dragElastic={0.7} className="cursor-grabbing" data-aos="fade-right" data-aos-delay="700">
                <Framermotion />
              </motion.div>
              <motion.div drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} dragElastic={0.7} className="cursor-grabbing" data-aos="fade-right" data-aos-delay="800">
                <Typescript />
              </motion.div>
              <motion.div drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} dragElastic={0.7} className="cursor-grabbing" data-aos="fade-right" data-aos-delay="900">
                <CodeigniterLogo />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Techstack;
