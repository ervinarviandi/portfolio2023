import React, { useEffect } from "react";
import TailwindLogo from "../src/TailwindLogo";
import Nextjs from "../src/NextJs";
import BootstrapLogo from "../src/BootstrapLogo";
import CodeigniterLogo from "../src/CodeigniterLogo";
import ReactLogo from "../src/ReactLogo";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <main className="px-4 py-12 portfolio">
        <section className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl px-4 -z-10 bg-gradient">
          <h1 className=" dark:text-white text-gray-700 text-3xl mb-10 font-poppins font-bold" data-aos="fade-up">
            Featured Portfolio
          </h1>
          <p className="mb-6 md:mb-8 dark:text-white text-gray-700 font-poppins text-base" data-aos="fade-up">
            {/* Lihat portofolio unggulan saya, jangan ragu untuk menjelajahinya ya. dibawah ini adalah beberapa karya yang pernah saya buat */}
            I&#39;m also experienced at some website development and software testing that i learn for 4 month will described below
          </p>
          <div className="grid md:grid-cols-2 gap-5 ">
            <div className="flex flex-col">
              <div className="rounded-md overflow-hidden dark:bg-card100 bg-card200  " data-aos="fade-up">
                <picture className="block overflow-hidden ">
                  <img src="qr-generator.jpg" alt="expense-project" className="hover:scale-125 overflow-hidden ease-in-out duration-700" />
                </picture>

                {/* <Image src="/expenseApp_qFvD7zZ8y.jpg" width={560} height={560} alt="expense_project" className="relative" /> */}
                <div className="mt-3 p-4">
                  <h3 className="dark:text-white text-gray-700 font-bold font-poppins text-[22px] ">
                    <a className="dark:hover:border-b-2 dark:hover:border-dashed  " href=" QrGenerator">
                      {" "}
                      QR Generator
                    </a>
                  </h3>
                  <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                    <ReactLogo />
                    <TailwindLogo />
                  </div>
                  <p className="dark:text-white text-gray-700 font-poppins text-base">A simple QR Code Generator. You can convert the web link into QR Code instantly here and download it to your local device.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-md overflow-hidden dark:bg-card100 bg-card200 " data-aos="fade-up">
                <picture className="block overflow-hidden ">
                  <img src="nugget.jpg" alt="expense-project" className="hover:scale-125 overflow-hidden ease-in-out duration-700" />
                </picture>

                {/* <Image src="/expenseApp_qFvD7zZ8y.jpg" width={560} height={560} alt="expense_project" className="relative" /> */}
                <div className="mt-3 p-4">
                  <h3 className="dark:text-white text-gray-700 font-bold font-poppins text-[22px] ">
                    <a className="dark:hover:border-b-2 dark:hover:border-dashed  " href="NuggetApp">
                      {" "}
                      Nugget Pages
                    </a>
                  </h3>
                  <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                    <TailwindLogo />
                    <Nextjs />
                  </div>
                  <p className="dark:text-white text-gray-700 font-poppins text-base">🍌A simple page I made to improve my slicing skills </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-md overflow-hidden dark:bg-card100 bg-card200 " data-aos="fade-up" data-aos-delay="300">
                <picture className="block overflow-hidden">
                  <img src="Crud Ci.jpg" className="hover:scale-125 overflow-hidden ease-in-out duration-700" />
                </picture>
                <div className="mt-3 p-4">
                  <h3 className="dark:text-white text-gray-700 font-bold border-b-2 border-dashed border-transparent font-poppins text-[22px]">
                    <a className="hover:border-b-2 hover:border-dashed" href="Bookself">
                      {" "}
                      Bookself
                    </a>
                  </h3>
                  <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                    <CodeigniterLogo />
                    <BootstrapLogo />
                  </div>
                  <p className="dark:text-white text-gray-700 font-poppins text-base">A bookshelf app that can show, search, add, delete, update book and move book to other shelf.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-md overflow-hidden dark:bg-card100 bg-card200" data-aos="fade-up">
                <picture className="block overflow-hidden">
                  <img src="reactlink.jpg" className="hover:scale-125 overflow-hidden ease-in-out duration-700" />
                </picture>
                <div className="mt-3 p-4">
                  <h3 className="dark:text-white text-gray-700 font-bold font-poppins text-[22px]">
                    <a className="hover:border-b-2 hover:border-dashed " href="linkbio">
                      {" "}
                      Link Bio
                    </a>
                  </h3>
                  <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                    <ReactLogo />
                    <TailwindLogo />
                  </div>
                  <p className="dark:text-white text-gray-700 font-poppins text-base">A Bio link to connect customers to the business or portfolio website </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-[30px] ">
            <p className=" flex items-center dark:text-white text-gray-700" data-aos="fade-up">
              {/* <a href="">See All Portfolio</a> */}
              <Link href="/work" className="flex items-center  dark:hover:text-blue-500 hover:font-bold font-poppins">
                See All Portfolio
                <BsFillArrowRightCircleFill className="ml-5 dark:text-white text-gray-700 text-2xl dark:hover:text-blue-500" />
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Portfolio;
