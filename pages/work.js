import React from "react";
import Navigation from "../components/Navigation";
import TailwindLogo from "../src/TailwindLogo";
import Nextjs from "../src/NextJs";
import HtmlLogo from "../src/HtmlLogo";
import BootstrapLogo from "../src/BootstrapLogo";
import CssLogo from "../src/CssLogo";
import JavascriptLogo from "../src/JavascriptLogo";
import ReactLogo from "../src/ReactLogo";
import CodeigniterLogo from "../src/CodeigniterLogo";
// import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Footer from "../components/Footer";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";

function work() {
  return (
    <>
      <Navigation />
      <motion.div className="px-4 py-12 " initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.2, type: "spring" }}>
        <section className="mt-[96px] mx-auto md:max-w-3xl  xl:max-w-3xl px-4  ">
          <h1 className="dark:text-white text-gray-700 text-3xl mb-10 font-poppins font-bold ">Portfolio</h1>
          <p className="mb-6 md:mb-8 dark:text-white text-gray-700 font-poppins text-base">
            A selection of my personal works. I,ve included samples to showcase my skills and experience. Take a look around and let me know what you think. Im always open to feedback and opportunities to collaborate.
          </p>

          <h2 className="dark:text-white text-gray-700 text-3xl mb-10 font-bold ">Personal Website</h2>
          <p className="dark:text-white text-gray-700 text-base font-poppins mb-5">
            I,ve put together a portfolio of my personal work, mostly from my junior years. You,re welcome to take a look and explore. Some of the portfolios even have website demos that you can try out if you,d like.
          </p>
          <Tab.Group manual>
            <Tab.List className="flex space-x-1 rounded-full bg-gray-900 p-1 text-white ">
              <Tab
                className={({ selected }) =>
                  classNames("w-full rounded-full transition  duration-700 ease-in-out delay-50 py-2.5 text-sm font-medium leading-5 text-blue-700 font-poppins ", selected ? "bg-white text-white " : "text-pink-500")
                }
              >
                Web Developer
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames("w-full rounded-full transition  duration-700 ease-in-out delay-50 py-2.5 text-sm font-medium leading-5 text-blue-700 font-poppins", selected ? "bg-white text-white " : "text-pink-500")
                }
              >
                Web Design
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames("w-full rounded-full transition  duration-700 ease-in-out delay-50 py-2.5 text-sm font-medium leading-5 text-blue-700 font-poppins", selected ? "bg-white text-white " : "text-pink-500")
                }
              >
                Graphic Design
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel className="rounded-xl dark:bg-black p-3">
                <div className="grid md:grid-cols-2 gap-5 ">
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden ">
                      <img src="reactlink.jpg" className="w-full" />
                      <div className="mt-3">
                        <h3 className="dark:text-white text-gray-700 font-bold font-poppins text-[22px]">
                          <Link href="linkbio" className="hover:border-b-2 hover:border-dashed ">
                            {" "}
                            React Link Bio
                          </Link>
                        </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                          <TailwindLogo />
                          <ReactLogo />
                        </div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">React Link is an page to see connect with sosial media and more🔗</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden  ">
                      <img src="zeitplans.jpg" alt="expense-project" />
                      {/* <Image src="/expenseApp_qFvD7zZ8y.jpg" width={560} height={560} alt="expense_project" className="relative" /> */}
                      <div className="mt-3">
                        <h3 className="dark:text-white text-gray-700 font-bold font-poppins text-[22px] ">
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

                          <Nextjs className="dark:text-white" />
                        </div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">A landing page of a Schedule App. Its also a Dicoding Submission Project for Learn Basic of Web Programming class.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden ">
                      <img src="expenseApp_qFvD7zZ8y.jpg" />
                      <div className="mt-3">
                        <h3 className="dark:text-white text-gray-700 font-bold border-b-2 border-dashed border-transparent font-poppins text-[22px]">
                          <a className="hover:border-b-2 hover:border-dashed" href="">
                            {" "}
                            Expense App
                          </a>
                        </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                          <TailwindLogo />

                          <CodeigniterLogo />
                        </div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">ExpenseApp is an app to see you expense history, income history and help you notes what youre buying lately💰</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden ">
                      <img src="notta.jpg" className="w-full" />
                      <div className="mt-3">
                        <h3 className="dark:text-white text-gray-700 font-bold font-poppins text-[22px]">
                          <a className="hover:border-b-2 hover:border-dashed " href="https://react-link.vercel.app/">
                            {" "}
                            Notta
                          </a>
                        </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                          <TailwindLogo />
                          <ReactLogo />
                        </div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">App submission for Dicoding React course, Simple note taking app.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden ">
                      <img src="workly.jpg" className="w-full" />
                      <div className="mt-3">
                        <h3 className="dark:text-white font-bold font-poppins text-[22px]">
                          <a className="hover:border-b-2 hover:border-dashed " href="https://react-link.vercel.app/">
                            {" "}
                            Work.ly
                          </a>
                        </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                          <TailwindLogo />
                          <ReactLogo />
                        </div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">Slicing design with React, Tailwind CSS, lazy loading image, and more.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className="rounded-xl dark:bg-black p-3 dark:text-white text-gray-700">Belum Ada Project</Tab.Panel>
              <Tab.Panel className="rounded-xl dark:bg-black p-3 dark:text-white text-gray-700 ">Belum Ada Project</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </section>
      </motion.div>
      <Footer />
    </>
  );
}

export default work;
