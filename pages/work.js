import React from "react";
import Navigation from "../components/Navigation";
import TailwindLogo from "../src/TailwindLogo";
import Nextjs from "../src/NextJs";
import HtmlLogo from "../src/HtmlLogo";
import BootstrapLogo from "../src/BootstrapLogo";
import CssLogo from "../src/CssLogo";
import JavascriptLogo from "../src/JavascriptLogo";
import ReactLogo from "../src/ReactLogo";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Footer from "../components/Footer";

function work() {
  return (
    <>
      <Navigation />
      <main className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-3xl  xl:max-w-3xl px-4">
          <h1 className="text-white text-3xl mb-10 font-poppins font-bold">Portfolio</h1>
          <p className="mb-6 md:mb-8 text-white font-poppins text-base">
            A selection of my personal works. I,ve included samples to showcase my skills and experience. Take a look around and let me know what you think. Im always open to feedback and opportunities to collaborate.
          </p>

          <h2 className="text-white text-3xl mb-10 font-bold ">Personal Website</h2>
          <p className="text-white text-base font-poppins mb-5">
            I,ve put together a portfolio of my personal work, mostly from my junior years. You,re welcome to take a look and explore. Some of the portfolios even have website demos that you can try out if you,d like.
          </p>
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
        </section>
      </main>
      <Footer />
    </>
  );
}

export default work;
