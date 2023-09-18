import React, { useEffect, useState } from "react";
import TailwindLogo from "../src/TailwindLogo";
import Nextjs from "../src/NextJs";
import BootstrapLogo from "../src/BootstrapLogo";
import CodeigniterLogo from "../src/CodeigniterLogo";
import ReactLogo from "../src/ReactLogo";
import ViteLogo from "../src/Vite.jsx";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingBar from "react-top-loading-bar";

function Portfolio() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, disable: false, startEvent: "DOMContentLoaded", initClassName: "aos-init", animatedClassName: "aos-animate", useClassNames: false, disableMutationObserver: true });
  }, []);
  return (
    <>
      <main className="px-4 py-12 portfolio">
        <LoadingBar color="#fbbf24" progress={progress} onLoaderFinished={() => setProgress(0)} />
        <section className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl px-4 -z-10 bg-gradient">
          <h1 className=" dark:text-primary5 text-gray-700 text-3xl mb-10 font-poppins font-bold" data-aos="fade-up">
            Featured Portfolio
          </h1>
          <p className="mb-6 md:mb-8 dark:text-primary10 text-gray-700 font-poppins text-base" data-aos="fade-up">
            I&#39;m also experienced at some website development and software testing that i learn for 4 month will described below
          </p>
          <div className="grid md:grid-cols-2 gap-5 ">
            <div className="flex flex-col">
              <div className="rounded-md overflow-hidden dark:bg-card100 bg-cardlight shadow-md   " data-aos="fade-up">
                <picture className="block overflow-hidden ">
                  <img src="qrcode-generator.jpg" alt="qrcode" className="hover:scale-125 overflow-hidden ease-in-out duration-700" />
                </picture>
                <div className="mt-3 p-4">
                  <h3 className="dark:text-primary5 text-gray-700 font-bold font-poppins text-[22px] ">
                    <a
                      onClick={() => setProgress(100)}
                      className="dark:hover:border-b-2 dark:border-white  hover:border-dashed hover:bg-gradient-to-r hover:from-gradient100 hover:to-gradient200 hover:text-transparent bg-clip-text  "
                      href=" QrGenerator"
                    >
                      {" "}
                      QR Generator
                    </a>
                  </h3>
                  <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                    <ReactLogo />
                    <TailwindLogo />
                  </div>
                  <p className="dark:text-primary10 text-gray-700 font-poppins text-base">A simple QR Code Generator. You can convert the web link into QR Code instantly here and download it to your local device.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-md overflow-hidden dark:bg-card100  bg-cardlight shadow-md" data-aos="fade-up" data-aos-delay="300">
                <picture className="block overflow-hidden">
                  <img src="bubble-cleaner.jpg" className="hover:scale-125 ease-in-out duration-700" alt="bubble" />
                </picture>
                <div className="mt-3 p-4">
                  <h3 className="dark:text-primary5 text-gray-700 font-bold font-poppins text-[22px]">
                    <a
                      onClick={() => setProgress(100)}
                      className="hover:border-b-2 hover:border-dashed hover:bg-gradient-to-r hover:from-gradient100 hover:to-gradient200 hover:text-transparent bg-clip-text "
                      href="https://bubble-cleaner-4rq1.vercel.app/"
                    >
                      {" "}
                      Bubble Cleaner
                    </a>
                  </h3>
                  <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                    <TailwindLogo />
                    <ReactLogo />
                    <ViteLogo />
                  </div>
                  <p className="dark:text-primary10 text-gray-700 font-poppins text-base">a simple landing page bubble cleaner i made to improve my slicing .</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-md overflow-hidden dark:bg-card100  bg-cardlight shadow-md " data-aos="fade-up" data-aos-delay="400">
                <picture className="block overflow-hidden">
                  <img src="Crud Ci.jpg" className="hover:scale-125 overflow-hidden ease-in-out duration-700" alt="crudci" />
                </picture>
                <div className="mt-3 p-4">
                  <h3 className="dark:text-primary5 text-gray-700 font-bold border-b-2 border-dashed border-transparent font-poppins text-[22px]">
                    <a onClick={() => setProgress(100)} className="hover:border-b-2 hover:border-dashed hover:bg-gradient-to-r hover:from-gradient100 hover:to-gradient200 hover:text-transparent bg-clip-text " href="Bookself">
                      {" "}
                      Bookself App
                    </a>
                  </h3>
                  <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                    <CodeigniterLogo />
                    <BootstrapLogo />
                  </div>
                  <p className="dark:text-primary10 text-gray-700 font-poppins text-base">A bookshelf app that can show, search, add, delete, update book and move book to other shelf.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-md overflow-hidden dark:bg-card100  bg-cardlight shadow-md" data-aos="fade-up" data-aos-delay="500">
                <picture className="block overflow-hidden">
                  <img src="reactlink.jpg" className="hover:scale-125 overflow-hidden ease-in-out duration-700" alt="mylink" />
                </picture>
                <div className="mt-3 p-4">
                  <h3 className="dark:text-primary5 text-gray-700 font-bold font-poppins text-[22px]">
                    <a onClick={() => setProgress(100)} className="hover:border-b-2 hover:border-dashed hover:bg-gradient-to-r hover:from-gradient100 hover:to-gradient200 hover:text-transparent bg-clip-text  " href="linkbio">
                      {" "}
                      Link Bio
                    </a>
                  </h3>
                  <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                    <ReactLogo />
                    <TailwindLogo />
                  </div>
                  <p className="dark:text-primary10 text-gray-700 font-poppins text-base">A Bio link to connect customers to the business or portfolio website </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-[30px] ">
            <p className=" flex items-center dark:text-primary10 text-gray-700" data-aos="fade-up">
              <Link href="/work" className="flex items-center  dark:hover:text-gradient200 hover:font-bold font-poppins">
                See All Portfolio
                <BsFillArrowRightCircleFill className="ml-5 dark:text-primary10 text-gray-700 text-2xl dark:hover:text-gradient200" />
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Portfolio;
