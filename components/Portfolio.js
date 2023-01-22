import React from "react";
import TailwindLogo from "../src/TailwindLogo";
import Nextjs from "../src/NextJs";
import HtmlLogo from "../src/HtmlLogo";
import BootstrapLogo from "../src/BootstrapLogo";
import CssLogo from "../src/CssLogo";
import JavascriptLogo from "../src/JavascriptLogo";
import CodeigniterLogo from "../src/CodeigniterLogo";
import ReactLogo from "../src/ReactLogo";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <>
      <main className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl px-4">
          <h1 className=" dark:text-white text-gray-700 text-3xl mb-10 font-poppins font-bold">Featured Portfolio</h1>
          <p className="mb-6 md:mb-8 dark:text-white text-gray-700 font-poppins text-base">Lihat portofolio unggulan saya, jangan ragu untuk menjelajahinya ya. dibawah ini adalah beberapa karya yang pernah saya buat</p>
          <div className="grid md:grid-cols-2 gap-5 ">
            <div className="flex flex-col">
              <div className="rounded-md overflow-hidden  ">
                <img src="zeitplans.jpg" alt="expense-project" />

                {/* <Image src="/expenseApp_qFvD7zZ8y.jpg" width={560} height={560} alt="expense_project" className="relative" /> */}
                <div className="mt-3">
                  <h3 className="dark:text-white text-gray-700 font-bold font-poppins text-[22px] ">
                    <a className="dark:hover:border-b-2 dark:hover:border-dashed  " href="">
                      {" "}
                      Zeitplan App
                    </a>
                  </h3>
                  <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                    <HtmlLogo />
                    <CssLogo />
                    <JavascriptLogo />
                    <BootstrapLogo />
                  </div>
                  <p className="dark:text-white text-gray-700 font-poppins text-base">A landing page of a Schedule App. Its also a Dicoding Submission Project for Learn Basic of Web Programming class.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-md overflow-hidden ">
                <img src="Crud Ci.jpg" />
                <div className="mt-3">
                  <h3 className="dark:text-white text-gray-700 font-bold border-b-2 border-dashed border-transparent font-poppins text-[22px]">
                    <a className="hover:border-b-2 hover:border-dashed" href="">
                      {" "}
                      Bookself
                    </a>
                  </h3>
                  <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                    <CodeigniterLogo />
                    <BootstrapLogo />
                  </div>
                  <p className="dark:text-white text-gray-700 font-poppins text-base">ExpenseApp is an app to see you expense history, income history and help you notes what youre buying lately💰</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-md overflow-hidden ">
                <img src="reactlink.jpg" className="w-full" />
                <div className="mt-3">
                  <h3 className="dark:text-white text-gray-700 font-bold font-poppins text-[22px]">
                    <a className="hover:border-b-2 hover:border-dashed " href="linkbio">
                      {" "}
                      React Link Bio
                    </a>
                  </h3>
                  <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                    <ReactLogo />
                    <TailwindLogo />
                  </div>
                  <p className="dark:text-white text-gray-700 font-poppins text-base">React Link is an app to see you expense history, income history and help you notes what youre buying lately🔗</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-[30px] ">
            <p className=" flex items-center dark:text-white text-gray-700">
              {/* <a href="">See All Portfolio</a> */}
              <Link href="/work" className="flex items-center  dark:hover:text-pink-500 hover:font-bold font-poppins">
                See All Portfolio
                <BsFillArrowRightCircleFill className="ml-5 dark:text-white text-gray-700 text-2xl dark:hover:text-pink-500" />
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Portfolio;
