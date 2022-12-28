import React from "react";
import TailwindLogo from "../src/TailwindLogo";
import Nextjs from "../src/NextJs";
import HtmlLogo from "../src/HtmlLogo";
import BootstrapLogo from "../src/BootstrapLogo";
import CssLogo from "../src/CssLogo";
import JavascriptLogo from "../src/JavascriptLogo";
import ReactLogo from "../src/ReactLogo";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";

function Portfolio() {
  return (
    <>
      <main className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-3xl  xl:max-w-3xl px-4">
          <h1 className=" text-white text-3xl mb-10 font-poppins">Featured Portfolio</h1>
          <p className="mb-6 md:mb-8 text-white font-poppins text-base">Check out my featured portfolio, feel free to explore it.</p>
          <div className="grid md:grid-cols-2 gap-5 ">
            <div className="flex flex-col">
              <div className="rounded-md overflow-hidden  ">
                <img src="zeitplans.jpg" alt="expense-project" />
                {/* <Image src="/expenseApp_qFvD7zZ8y.jpg" width={560} height={560} alt="expense_project" className="relative" /> */}
                <div className="mt-3">
                  <h3 className="text-white font-bold font-poppins text-[22px] ">
                    <a className="hover:border-b-2 hover:border-dashed " href="">
                      {" "}
                      Zeitplan App
                    </a>
                  </h3>
                  <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                    <HtmlLogo />
                    <CssLogo />
                    <JavascriptLogo />
                    <BootstrapLogo />
                    <TailwindLogo />
                    <Nextjs />
                  </div>
                  <p className="text-white font-poppins text-base">A landing page of a Schedule App. Its also a Dicoding Submission Project for Learn Basic of Web Programming class.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-md overflow-hidden ">
                <img src="expenseApp_qFvD7zZ8y.jpg" />
                <div className="mt-3">
                  <h3 className="text-white font-bold border-b-2 border-dashed border-transparent font-poppins text-[22px]">
                    <a className="hover:border-b-2 hover:border-dashed" href="">
                      {" "}
                      Expense App
                    </a>
                  </h3>
                  <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                    <TailwindLogo />
                    <Nextjs />
                  </div>
                  <p className="text-white font-poppins text-base">ExpenseApp is an app to see you expense history, income history and help you notes what youre buying lately💰</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-md overflow-hidden ">
                <img src="reactlink.jpg" className="w-full" />
                <div className="mt-3">
                  <h3 className="text-white font-bold font-poppins text-[22px]">
                    <a className="hover:border-b-2 hover:border-dashed " href="https://react-link.vercel.app/">
                      {" "}
                      React Link Bio
                    </a>
                  </h3>
                  <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                    <TailwindLogo />
                    <ReactLogo />
                  </div>
                  <p className="text-white font-poppins text-base">React Link is an app to see you expense history, income history and help you notes what youre buying lately🔗</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-[30px] ">
            <p className=" flex items-center text-white">
              {/* <a href="">See All Portfolio</a> */}
              <Link href="/work" className="flex items-center  hover:text-pink-500 hover:font-bold font-poppins">
                See All Portfolio
                <BsFillArrowRightCircleFill className="ml-5 text-white text-2xl hover:text-pink-500" />
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Portfolio;
